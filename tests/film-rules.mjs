// 讲解动画的规则检查：结构、时间、字形能不能显示，以及「在镜头里看不看得见」「同时出现的东西会不会太挤」。
// 用法：node tests/film-rules.mjs [src/data/films/<主题>.ts]
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { cameraAt } from "../src/lib/film.ts";
import { formProblem, glyphProblem, strokes, writeProblem } from "./glyph-rules.mjs";

const limits = {
  sceneSeconds: [4, 14],
  filmSeconds: [30, 110],
  title: 12,
  label: 12,
  text: 14,
  myth: 18,
  shapeText: 6,
  arrowText: 10,
  countLabel: 8,
  caption: 8,
  imageCaption: 10,
  forms: [2, 5],
  zoom: [1, 2.6],
  busy: 8
};

const views = new Set(["paper", "shell", "slips", "grid"]);
const publicDir = fileURLToPath(new URL("../public/", import.meta.url));
const isPoint = (point) => Array.isArray(point) && point.length === 2 && point.every(Number.isFinite);
const chars = (text) => [...text].length;

function inBox([x, y], box, margin = 0) {
  return x >= box.x - margin && x <= box.x + box.width + margin && y >= box.y - margin && y <= box.y + box.height + margin;
}

/** 跟 FilmStage 里的标签摆放一致：返回标签框中心和宽高（画面坐标） */
function labelBox(cue, k) {
  const [ax, ay] = cue.at;
  const side = cue.side ?? (ax < 600 ? "left" : "right");
  const offset = { left: [-170 * k, -40 * k], right: [170 * k, -40 * k], top: [0, -120 * k], bottom: [0, 120 * k] }[side];
  const [px, py] = cue.pos ?? [ax + offset[0], ay + offset[1]];
  const size = 30 * k;
  return { at: [px, py], width: chars(cue.text) * size + 28 * k, height: size + 20 * k };
}

function captionAt(point, camera) {
  return [camera.x + (point[0] / 1200) * camera.width, camera.y + (point[1] / 900) * camera.height];
}

function cuePoints(cue) {
  switch (cue.kind) {
    case "label": return [cue.at, ...(cue.pos ? [cue.pos] : [])];
    case "highlight": case "pulse": case "shape": case "text": case "count": case "meter": case "evolve": case "write": case "image": return [cue.at];
    case "glyph": return [cue.at, ...(cue.path ?? [])];
    case "flow": case "arrow": case "line": case "sprite": return cue.path;
    default: return [];
  }
}

/** 一个字形大约占多大（画面坐标），用来判断在不在镜头里 */
function glyphHalf(cue) {
  if (cue.kind === "glyph") return (cue.size ?? 220) / 2;
  if (cue.kind === "evolve") return (cue.size ?? 260) / 2;
  if (cue.kind === "write") return (cue.size ?? 420) / 2;
  return 0;
}

/** 返回这部动画的问题列表，空数组表示通过 */
export function filmProblems(film, question) {
  const problems = [];
  const say = (where, text) => problems.push(`${film.question} ${where}：${text}`);
  if (!question) return [`${film.question}：找不到这个问题`];
  if (film.scenes.length < 4) say("全片", `至少要 4 场戏，现在 ${film.scenes.length} 场`);

  const total = film.scenes.reduce((sum, scene) => sum + scene.duration, 0);
  if (total < limits.filmSeconds[0] || total > limits.filmSeconds[1]) say("全片", `总长 ${total} 秒，应在 ${limits.filmSeconds.join("～")} 秒`);

  const turns = film.scenes.map((scene) => scene.turn);
  if (turns[0] !== 0) say("全片", "第一场戏要配第 0 轮问答");
  turns.forEach((turn, i) => {
    if (!Number.isInteger(turn) || turn < 0 || turn >= question.dialogue.length) say(`第${i + 1}场`, `turn ${turn} 超出对话范围`);
    if (i > 0 && turn < turns[i - 1]) say(`第${i + 1}场`, "场次要按对话顺序排列");
  });
  const covered = new Set(turns).size;
  if (covered < question.dialogue.length - 1) say("全片", `只配了 ${covered} 轮问答，对话有 ${question.dialogue.length} 轮，最多只能空一轮`);

  film.scenes.forEach((scene, i) => {
    const where = `第${i + 1}场「${scene.title}」`;
    if (scene.view !== undefined && !views.has(scene.view)) say(where, `没有底图 ${scene.view}，只能用 ${[...views].join("、")}`);
    if (chars(scene.title) > limits.title) say(where, `标题超过 ${limits.title} 个字`);
    if (scene.duration < limits.sceneSeconds[0] || scene.duration > limits.sceneSeconds[1]) say(where, `时长 ${scene.duration} 秒，应在 ${limits.sceneSeconds.join("～")} 秒`);
    if (scene.cues.length < 2) say(where, "至少要有 2 个动画元素");

    const keys = scene.camera ?? [];
    keys.forEach((key, j) => {
      if (key.zoom < limits.zoom[0] || key.zoom > limits.zoom[1]) say(where, `镜头放大 ${key.zoom} 倍，应在 ${limits.zoom.join("～")} 倍`);
      if (key.t < 0 || key.t > scene.duration) say(where, `镜头关键帧 t=${key.t} 超出时长`);
      if (j > 0 && key.t <= keys[j - 1].t) say(where, "镜头关键帧的时间要递增");
      if (!isPoint(key.at)) say(where, "镜头的 at 要写成 [x, y]");
    });

    scene.cues.forEach((cue, j) => {
      const at = `${where} 第${j + 1}个(${cue.kind})`;
      if (!(cue.from >= 0) || cue.from > scene.duration - 0.8) say(at, `from=${cue.from} 太晚或无效，这场戏只有 ${scene.duration} 秒`);
      if (cue.to !== undefined && (cue.to <= cue.from + 0.5 || cue.to > scene.duration)) say(at, `to=${cue.to} 无效`);

      const points = cuePoints(cue);
      if (!points.every(isPoint)) { say(at, "坐标要写成 [x, y]"); return; }
      if (["flow", "arrow", "line"].includes(cue.kind) && points.length < 2) say(at, "路线至少要两个点");
      if (cue.kind === "sprite" && points.length < 1) say(at, "至少要一个点");
      for (const [x, y] of points) if (x < -150 || x > 1350 || y < -150 || y > 1050) say(at, `坐标 (${x}, ${y}) 远在画面外`);

      const textLimit = { label: limits.label, text: limits.text, shape: limits.shapeText, arrow: limits.arrowText }[cue.kind];
      const text = cue.text ?? "";
      if (textLimit && chars(text) > textLimit) say(at, `文字「${text}」超过 ${textLimit} 个字`);
      if (cue.kind === "myth" && (chars(cue.wrong) > limits.myth || chars(cue.right) > limits.myth)) say(at, `误会卡每句不超过 ${limits.myth} 个字`);
      if ((cue.kind === "count" || cue.kind === "meter") && chars(cue.label) > limits.countLabel) say(at, `标题「${cue.label}」超过 ${limits.countLabel} 个字`);
      if (cue.kind === "meter" && [cue.start, cue.end].some((v) => v < 0 || v > 1)) say(at, "meter 的 start、end 要在 0～1");

      if (cue.kind === "glyph") {
        const problem = glyphProblem(cue.script ?? "kai", cue.char);
        if (problem) say(at, problem);
        if (cue.caption && chars(cue.caption) > limits.caption) say(at, `说明「${cue.caption}」超过 ${limits.caption} 个字`);
      }
      if (cue.kind === "evolve") {
        if (cue.forms.length < limits.forms[0] || cue.forms.length > limits.forms[1]) say(at, `要 ${limits.forms.join("～")} 种样子`);
        for (const form of cue.forms) {
          const problem = formProblem(form);
          if (problem) say(at, problem);
          if (form.label && chars(form.label) > 4) say(at, `字体名「${form.label}」超过 4 个字`);
        }
        const steps = cue.forms.length * (cue.every ?? 1.6);
        if (cue.from + steps - (cue.every ?? 1.6) > (cue.to ?? scene.duration)) say(at, `变到最后一种要 ${steps} 秒，这场戏放不下，减少样子或调小 every`);
      }
      if (cue.kind === "image") {
        if (typeof cue.src !== "string" || cue.src.startsWith("/") || !existsSync(publicDir + cue.src)) say(at, `public/${cue.src} 不存在（src 写 public/ 下的路径，开头不带 /）`);
        if (cue.caption && chars(cue.caption) > limits.imageCaption) say(at, `说明「${cue.caption}」超过 ${limits.imageCaption} 个字`);
      }
      if (cue.kind === "write") {
        const problem = writeProblem(cue.char);
        if (problem) say(at, problem);
        const count = strokes[cue.char]?.strokes.length ?? 0;
        const needed = 0.3 + Math.min(cue.upTo ?? count, count) * (cue.stroke ?? 0.7);
        if (count && cue.from + needed > (cue.to ?? scene.duration)) say(at, `「${cue.char}」${count} 笔要写 ${needed.toFixed(1)} 秒，这场戏放不下，调小 stroke 或 upTo`);
        for (const mark of cue.mark ?? []) if (!(mark >= 0 && mark < count)) say(at, `mark 里的第 ${mark} 笔不存在（从 0 数，一共 ${count} 笔）`);
      }

      // 出现后半秒，镜头里要看得见
      const t = Math.min(cue.from + 0.5, scene.duration);
      const camera = cameraAt(scene.camera, t);
      const k = 1 / camera.zoom;
      const margin = 10 * k;
      if (cue.kind === "label") {
        const box = labelBox(cue, k);
        const [cx, cy] = box.at;
        const corners = [[cx - box.width / 2, cy - box.height / 2], [cx + box.width / 2, cy + box.height / 2]];
        if (!corners.every((corner) => inBox(corner, camera, margin))) say(at, `标签「${cue.text}」有一部分在镜头外，换个 side 或写 pos`);
        if (!inBox(points[0], camera)) say(at, "标签指着的位置在镜头外");
      } else if (cue.kind === "text" || cue.kind === "count" || cue.kind === "meter") {
        const [x, y] = captionAt(cue.at, camera);
        const halfWidth = cue.kind === "text" ? (chars(cue.text) * { s: 34, m: 48, l: 72 }[cue.size ?? "m"] * k) / 2 : 150 * k;
        if (!inBox([x - halfWidth, y], camera, margin) || !inBox([x + halfWidth, y], camera, margin)) say(at, `「${cue.text ?? cue.label}」有一部分在镜头外`);
      } else if (cue.kind === "glyph" || cue.kind === "evolve" || cue.kind === "write") {
        const half = glyphHalf(cue) * 0.6;
        const end = points[points.length - 1];
        const [x, y] = cue.kind === "glyph" && cue.path ? end : points[0];
        if (!inBox([x - half, y - half], camera) || !inBox([x + half, y + half], camera)) say(at, `「${cue.char ?? "字"}」有一大块在镜头外`);
      } else if (cue.kind === "image") {
        const [x, y] = cue.at;
        const [w, h] = cue.size;
        const overlap = Math.max(0, Math.min(x + w / 2, camera.x + camera.width) - Math.max(x - w / 2, camera.x)) * Math.max(0, Math.min(y + h / 2, camera.y + camera.height) - Math.max(y - h / 2, camera.y));
        if (overlap < 0.5 * Math.min(w * h, camera.width * camera.height)) say(at, "图有一大半在镜头外");
      } else if (cue.kind === "highlight" || cue.kind === "pulse" || cue.kind === "shape" || (cue.kind === "sprite" && points.length === 1)) {
        if (!inBox(points[0], camera)) say(at, "这个元素在镜头外");
      } else if (cue.kind === "sprite" || cue.kind === "arrow" || cue.kind === "line") {
        if (!inBox(points[points.length - 1], camera, 80 * k)) say(at, "路线的终点在镜头外");
      }
    });

    // 同一时刻出现的元素不要太多
    for (let t = 0.5; t < scene.duration; t += 0.5) {
      const shown = scene.cues.filter((cue) => cue.from <= t && (cue.to === undefined || cue.to > t)).length;
      if (shown > limits.busy) { say(where, `第 ${t} 秒同时有 ${shown} 个元素，太挤了（最多 ${limits.busy} 个）`); break; }
    }

    // 有底色的形状画在后面，会把先画、同时还在的字盖住
    scene.cues.forEach((shape, j) => {
      if (shape.kind !== "shape" || shape.color === "none") return;
      const [w, h] = shape.size;
      const box = { x: shape.at[0] - w / 2, y: shape.at[1] - h / 2, width: w, height: h };
      scene.cues.slice(0, j).forEach((cue, i) => {
        if (!["glyph", "evolve", "write"].includes(cue.kind) || !isPoint(cue.at)) return;
        const together = (cue.to ?? scene.duration) > shape.from && (shape.to ?? scene.duration) > cue.from;
        if (together && inBox(cue.at, box)) say(`${where} 第${j + 1}个(shape)`, `盖住了第 ${i + 1} 个元素「${cue.char ?? "字"}」，只要框就写 color: "none"，或者把形状挪到它前面`);
      });
    });
  });
  return problems;
}

async function main() {
  const { ziQuestions } = await import("../src/data/questions/index.ts");
  const files = process.argv.slice(2);
  const films = [];
  if (files.length) {
    for (const file of files) films.push(...(await import(pathToFileURL(file).href)).films);
  } else {
    films.push(...(await import("../src/data/films/index.ts")).films);
  }
  const byId = new Map(ziQuestions.map((question) => [question.id, question]));
  const problems = films.flatMap((film) => filmProblems(film, byId.get(film.question)));
  if (problems.length) {
    console.log(problems.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(`all ${films.length} films pass`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) await main();
