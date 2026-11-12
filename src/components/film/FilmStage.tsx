import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import strokeJson from "../../data/strokes.json";
import type { Cue, FilmScene, Form, Point, Script, ViewId } from "../../data/films/types";
import { cameraAt, ease, envelope, evolveAt, FRAME, partialPath, pathLength, pointAlong, turnAt, type Camera, type Vec } from "../../lib/film";
import { smooth } from "../../lib/motion";
import { formLabel, scriptFamily } from "../../lib/scripts";

/** Make Me a Hanzi 的笔画：1024 见方、y 轴朝上、基线在 900 */
type Strokes = { readonly strokes: readonly string[]; readonly medians: readonly (readonly (readonly [number, number])[])[] };
const strokeData = strokeJson as unknown as Record<string, Strokes>;

const ink = "#4a3b2a";
const cinnabar = "#d9453a";

/**
 * 标签、箭头、大字保持屏幕上的大小不变，k = 1 / 镜头放大倍数。
 * ui 在 k 的基础上再按舞台实际宽度放大文字，窄屏上也看得清。
 */
type Ctx = { t: number; k: number; ui: number; alpha: number; camera: Camera };

/** 舞台小于这个宽度（CSS 像素）时放大文字，最多放大 maxLegibility 倍 */
const comfortableWidth = 560;
const maxLegibility = 1.6;

/** 字幕性质的元素：坐标是镜头里的屏幕位置 */
function captionPoint([sx, sy]: Point, ctx: Ctx): Vec {
  return [ctx.camera.x + (sx / FRAME.width) * ctx.camera.width, ctx.camera.y + (sy / FRAME.height) * ctx.camera.height];
}

/** 大字和计数牌常常几块并排，只放大一半，免得互相挤到 */
const captionScale = (ctx: Ctx) => ctx.k * Math.sqrt(ctx.ui / ctx.k);

/** 放大后的文字块不能被画面边缘裁掉 */
function keepInside([x, y]: Vec, halfWidth: number, halfHeight: number, ctx: Ctx): Vec {
  const { camera } = ctx;
  const margin = 6 * ctx.ui;
  const clamp = (value: number, low: number, high: number) => (low > high ? (low + high) / 2 : Math.min(Math.max(value, low), high));
  return [
    clamp(x, camera.x + halfWidth + margin, camera.x + camera.width - halfWidth - margin),
    clamp(y, camera.y + halfHeight + margin, camera.y + camera.height - halfHeight - margin)
  ];
}

const polyline = (points: readonly Vec[]) => points.map((p) => p.join(",")).join(" ");

function Backdrop({ view }: { view?: ViewId }) {
  if (view === "shell") {
    // 一块龟腹甲：中缝、横缝，背面钻凿的小坑透出来的影子
    const outline = "M600 40 C760 40 880 110 900 250 C915 340 880 380 905 470 C930 580 900 720 820 800 C750 860 680 870 600 870 C520 870 450 860 380 800 C300 720 270 580 295 470 C320 380 285 340 300 250 C320 110 440 40 600 40 Z";
    const hollows: Vec[] = [[470, 300], [730, 300], [440, 520], [760, 520], [480, 720], [720, 720]];
    return (
      <g>
        <path d={outline} fill="#ead6aa" stroke="#b99a63" strokeWidth={8} />
        <path d={outline} fill="none" stroke="#f7ead0" strokeWidth={3} transform="translate(600 455) scale(0.94) translate(-600 -455)" />
        {[200, 380, 600, 760].map((y) => (
          <path key={y} d={`M330 ${y} Q600 ${y + 26} 870 ${y}`} fill="none" stroke="#c9ab74" strokeWidth={4} opacity={0.7} />
        ))}
        <line x1={600} y1={60} x2={600} y2={855} stroke="#c9ab74" strokeWidth={4} opacity={0.7} />
        {hollows.map(([x, y]) => (
          <ellipse key={`${x}-${y}`} cx={x} cy={y} rx={22} ry={36} fill="#d2b47c" opacity={0.55} />
        ))}
      </g>
    );
  }
  if (view === "slips") {
    const width = 112;
    const gap = 14;
    const count = 8;
    const left = (FRAME.width - (count * width + (count - 1) * gap)) / 2;
    return (
      <g>
        {Array.from({ length: count }, (_, i) => {
          const x = left + i * (width + gap);
          return (
            <g key={i}>
              <rect x={x} y={40} width={width} height={820} rx={10} fill={i % 2 ? "#e3c27c" : "#e8ca88"} stroke="#c39a52" strokeWidth={4} />
              <line x1={x + 12} y1={450} x2={x + width - 12} y2={450} stroke="#c9a35d" strokeWidth={5} opacity={0.6} />
            </g>
          );
        })}
        {[150, 750].map((y) => (
          <path key={y} d={`M${left - 30} ${y} Q600 ${y + 14} ${FRAME.width - left + 30} ${y}`} fill="none" stroke="#7a5230" strokeWidth={9} strokeLinecap="round" />
        ))}
      </g>
    );
  }
  if (view === "grid") {
    const side = 640;
    const [x, y] = [(FRAME.width - side) / 2, (FRAME.height - side) / 2];
    return (
      <g stroke={cinnabar} fill="none">
        <rect x={x} y={y} width={side} height={side} fill="#fffdf6" strokeWidth={6} />
        <line x1={x} y1={y + side / 2} x2={x + side} y2={y + side / 2} strokeWidth={3} strokeDasharray="18 14" opacity={0.6} />
        <line x1={x + side / 2} y1={y} x2={x + side / 2} y2={y + side} strokeWidth={3} strokeDasharray="18 14" opacity={0.6} />
      </g>
    );
  }
  return null;
}

function Label({ cue, ctx }: { cue: Extract<Cue, { kind: "label" }>; ctx: Ctx }) {
  const { k, ui, alpha } = ctx;
  const [ax, ay] = cue.at;
  const side = cue.side ?? (ax < 600 ? "left" : "right");
  const offset: Record<string, Vec> = { left: [-170 * ui, -40 * ui], right: [170 * ui, -40 * ui], top: [0, -120 * ui], bottom: [0, 120 * ui] };
  const size = 30 * ui;
  const width = [...cue.text].length * size + 28 * ui;
  const height = size + 20 * ui;
  const [px, py] = keepInside(cue.pos ?? [ax + offset[side][0], ay + offset[side][1]], width / 2, height / 2, ctx);
  const pop = ease.backOut((ctx.t - cue.from) / 0.45);
  const color = cue.color ?? ink;
  return (
    <g opacity={alpha}>
      <line x1={ax} y1={ay} x2={px} y2={py} stroke={color} strokeWidth={3 * k} strokeDasharray={`${8 * k} ${6 * k}`} />
      <circle cx={ax} cy={ay} r={8 * k} fill="#fff" stroke={color} strokeWidth={4 * k} />
      <g transform={`translate(${px} ${py}) scale(${Math.max(pop, 0.01)})`}>
        <rect x={-width / 2} y={-height / 2} width={width} height={height} rx={height / 2} fill="#fff" stroke={color} strokeWidth={3 * k} />
        <text className="film-text" fontSize={size} textAnchor="middle" dominantBaseline="central" fill={color}>{cue.text}</text>
      </g>
    </g>
  );
}

function Highlight({ cue, ctx }: { cue: Extract<Cue, { kind: "highlight" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const [w, h] = cue.size ?? [240, 240];
  const color = cue.color ?? "#ffb300";
  const glow = 0.8 + 0.2 * Math.sin(ctx.t * 4);
  return (
    <ellipse
      cx={x} cy={y} rx={w / 2} ry={h / 2}
      fill={color} fillOpacity={0.16 * glow} stroke={color} strokeWidth={5 * ctx.k}
      strokeDasharray={`${16 * ctx.k} ${10 * ctx.k}`} strokeDashoffset={-ctx.t * 40 * ctx.k} opacity={ctx.alpha}
    />
  );
}

function Pulse({ cue, ctx }: { cue: Extract<Cue, { kind: "pulse" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const color = cue.color ?? "#ff5a5f";
  const radius = cue.radius ?? 70;
  const rate = cue.rate ?? 1.2;
  const rings = [0, 1, 2].map((i) => {
    const phase = (((ctx.t - cue.from) * rate + i / 3) % 1 + 1) % 1;
    return <circle key={i} cx={x} cy={y} r={radius * phase} fill="none" stroke={color} strokeWidth={6 * ctx.k} opacity={(1 - phase) * ctx.alpha} />;
  });
  return <g>{rings}<circle cx={x} cy={y} r={10 * ctx.k} fill={color} opacity={ctx.alpha} /></g>;
}

function Flow({ cue, ctx }: { cue: Extract<Cue, { kind: "flow" }>; ctx: Ctx }) {
  const points = cue.path;
  const length = Math.max(pathLength(points), 1);
  const count = cue.count ?? 8;
  const speed = cue.speed ?? 220;
  const size = cue.size ?? 10;
  const color = cue.color ?? "#4fb6ff";
  return (
    <g>
      {Array.from({ length: count }, (_, i) => {
        const u = ((((ctx.t - cue.from) * speed) / length + i / count) % 1 + 1) % 1;
        const [x, y] = pointAlong(points, u);
        const edge = Math.min(1, u / 0.08, (1 - u) / 0.08);
        return cue.icon ? (
          <text key={i} x={x} y={y} fontSize={size * 2.6} textAnchor="middle" dominantBaseline="central" opacity={ctx.alpha * edge}>{cue.icon}</text>
        ) : (
          <circle key={i} cx={x} cy={y} r={size} fill={color} stroke="#fff" strokeWidth={2.5} opacity={ctx.alpha * edge} />
        );
      })}
    </g>
  );
}

function Arrow({ cue, ctx }: { cue: Extract<Cue, { kind: "arrow" }>; ctx: Ctx }) {
  const { k } = ctx;
  const points = cue.path;
  const progress = ease.inOut((ctx.t - cue.from) / (cue.draw ?? 0.8));
  const drawn = partialPath(points, Math.max(progress, 0.001));
  const color = cue.color ?? "#ff7a2f";
  const tip = drawn[drawn.length - 1];
  const prev = drawn.length > 1 ? drawn[drawn.length - 2] : points[0];
  const angle = Math.atan2(tip[1] - prev[1], tip[0] - prev[0]);
  const head = 26 * k;
  const wing = (turn: number): Vec => [tip[0] - head * Math.cos(angle + turn), tip[1] - head * Math.sin(angle + turn)];
  const mid = pointAlong(points, 0.5);
  return (
    <g opacity={ctx.alpha}>
      <polyline points={polyline(drawn)} fill="none" stroke="#fff" strokeWidth={15 * k} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={polyline(drawn)} fill="none" stroke={color} strokeWidth={8 * k} strokeLinecap="round" strokeLinejoin="round" />
      {progress > 0.05 && <polygon points={polyline([tip, wing(0.5), wing(-0.5)])} fill={color} stroke="#fff" strokeWidth={3 * k} strokeLinejoin="round" />}
      {cue.text && progress > 0.6 && (
        <text className="film-text" x={mid[0]} y={mid[1] - 30 * ctx.ui} fontSize={28 * ctx.ui} textAnchor="middle" fill={color} opacity={smooth((progress - 0.6) / 0.4)}>{cue.text}</text>
      )}
    </g>
  );
}

function Line({ cue, ctx }: { cue: Extract<Cue, { kind: "line" }>; ctx: Ctx }) {
  const progress = ease.inOut((ctx.t - cue.from) / (cue.draw ?? 0.8));
  const drawn = partialPath(cue.path, Math.max(progress, 0.001));
  return (
    <polyline
      points={polyline(drawn)} fill="none" stroke={cue.color ?? ink} strokeWidth={cue.width ?? 6}
      strokeLinecap="round" strokeLinejoin="round" opacity={ctx.alpha}
    />
  );
}

function Sprite({ cue, ctx }: { cue: Extract<Cue, { kind: "sprite" }>; ctx: Ctx }) {
  const points = cue.path;
  const local = ctx.t - cue.from;
  const [x, y] = points.length === 1 ? points[0] : pointAlong(points, ease.inOut(local / (cue.travel ?? 2)));
  const scale = points.length === 1 ? Math.max(ease.backOut(local / 0.5), 0.01) : 1;
  const rotate = turnAt(local, cue.rotate, cue.turnTo, cue.over) + (cue.spin ? local * 160 : cue.wobble ? Math.sin(local * 6) * 10 : 0);
  return (
    <text
      x={0} y={0} fontSize={cue.size ?? 56} textAnchor="middle" dominantBaseline="central" opacity={ctx.alpha}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      {cue.icon}
    </text>
  );
}

function Shape({ cue, ctx }: { cue: Extract<Cue, { kind: "shape" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const [w, h] = cue.size;
  const local = ctx.t - cue.from;
  let scale = Math.max(ease.backOut(local / 0.5), 0.01);
  let rotate = 0;
  if (cue.motion === "pulse") scale *= 1 + 0.06 * Math.sin(local * 5);
  if (cue.motion === "wiggle") rotate = Math.sin(local * 7) * 5;
  if (cue.motion === "grow") scale *= 0.35 + 0.65 * ease.inOut(local / (cue.over ?? 2));
  if (cue.motion === "shrink") scale *= 1 - 0.55 * ease.inOut(local / (cue.over ?? 2));
  const stroke = cue.outline ? { stroke: ink, strokeWidth: 4, strokeDasharray: "12 8" } : { stroke: "#fff", strokeWidth: 4 };
  const body =
    cue.shape === "circle" ? <ellipse cx={0} cy={0} rx={w / 2} ry={h / 2} fill={cue.color} {...stroke} />
      : <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={cue.shape === "pill" ? h / 2 : Math.min(18, h / 4)} fill={cue.color} {...stroke} />;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} opacity={ctx.alpha}>
      {body}
      {cue.text && <text className="film-text" fontSize={Math.min(30, h * 0.4, (w * 1.6) / [...cue.text].length)} textAnchor="middle" dominantBaseline="central" fill={ink}>{cue.text}</text>}
    </g>
  );
}

/** 字的中心偏一点：dominant-baseline central 对汉字字体偏上，往下挪一点看着才居中 */
const glyphNudge = 0.04;

function GlyphText({ char, script, size, color, x = 0, y = 0, opacity }: { char: string; script: Script; size: number; color: string; x?: number; y?: number; opacity?: number }) {
  return (
    <text
      className="film-glyph" x={x} y={y + size * glyphNudge} fontSize={size} textAnchor="middle" dominantBaseline="central"
      fill={color} style={{ fontFamily: scriptFamily[script] }} opacity={opacity}
    >
      {char}
    </text>
  );
}

function Caption({ text, atX, atY, ctx }: { text: string; atX: number; atY: number; ctx: Ctx }) {
  const size = 30 * ctx.ui;
  const [cx, cy] = keepInside([atX, atY], ([...text].length * size) / 2, size / 2, ctx);
  return <text className="film-text" x={cx - atX} y={cy - atY} fontSize={size} textAnchor="middle" dominantBaseline="central" fill="#7a6a55">{text}</text>;
}

function Glyph({ cue, ctx }: { cue: Extract<Cue, { kind: "glyph" }>; ctx: Ctx }) {
  const local = ctx.t - cue.from;
  const size = cue.size ?? 220;
  const points = cue.path ? [cue.at, ...cue.path] : [cue.at];
  const [x, y] = points.length === 1 ? points[0] : pointAlong(points, ease.inOut(local / (cue.travel ?? 2)));
  let scale = points.length === 1 ? Math.max(ease.backOut(local / 0.5), 0.01) : 1;
  let rotate = turnAt(local, cue.rotate, cue.turnTo, cue.over);
  if (cue.motion === "pulse") scale *= 1 + 0.05 * Math.sin(local * 5);
  if (cue.motion === "wiggle") rotate += Math.sin(local * 7) * 5;
  return (
    <g transform={`translate(${x} ${y})`} opacity={ctx.alpha}>
      <g transform={`rotate(${rotate}) scale(${cue.mirror ? -scale : scale} ${scale})`}>
        <GlyphText char={cue.char} script={cue.script ?? "kai"} size={size} color={cue.color ?? ink} />
      </g>
      {cue.caption && <Caption text={cue.caption} atX={x} atY={y + size * 0.62 + 22 * ctx.ui} ctx={ctx} />}
    </g>
  );
}

function Picture({ cue, ctx }: { cue: Extract<Cue, { kind: "image" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const [w, h] = cue.size;
  const scale = 0.94 + 0.06 * ease.inOut((ctx.t - cue.from) / 0.6);
  const mat = 12;
  return (
    <g transform={`translate(${x} ${y})`} opacity={ctx.alpha}>
      <g transform={`scale(${scale})`}>
        <rect x={-w / 2 - mat} y={-h / 2 - mat} width={w + mat * 2} height={h + mat * 2} rx={6} fill="#fffdf7" stroke="#cdb994" strokeWidth={3} />
        <image href={`${import.meta.env.BASE_URL}${cue.src}`} x={-w / 2} y={-h / 2} width={w} height={h} preserveAspectRatio="xMidYMid meet" />
      </g>
      {cue.caption && <Caption text={cue.caption} atX={x} atY={y + h / 2 + mat + 30 * ctx.ui} ctx={ctx} />}
    </g>
  );
}

function FormView({ form, size, opacity, scale }: { form: Form; size: number; opacity: number; scale: number }) {
  return (
    <g opacity={opacity} transform={`scale(${scale})`}>
      {"icon" in form
        ? <text x={0} y={0} fontSize={size * 0.8} textAnchor="middle" dominantBaseline="central">{form.icon}</text>
        : <GlyphText char={form.char} script={form.script} size={size} color={ink} />}
    </g>
  );
}

function Evolve({ cue, ctx }: { cue: Extract<Cue, { kind: "evolve" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const size = cue.size ?? 260;
  const { index, blend } = evolveAt(ctx.t - cue.from, cue.forms.length, cue.every ?? 1.6);
  const next = cue.forms[index + 1];
  const rawChipSize = 26 * ctx.ui;
  const labels = cue.forms.map(formLabel);
  const rawRowWidth = labels.reduce((sum, label) => sum + [...label].length * rawChipSize + 22 * ctx.ui, 0) + 14 * ctx.ui * (labels.length - 1);
  const fit = Math.min(1, (ctx.camera.width - 20 * ctx.k) / Math.max(rawRowWidth, 1));
  const chipSize = rawChipSize * fit;
  const chipWidths = labels.map((label) => ([...label].length * rawChipSize + 22 * ctx.ui) * fit);
  const gap = 14 * ctx.ui * fit;
  const rowWidth = chipWidths.reduce((sum, w) => sum + w, 0) + gap * (labels.length - 1);
  const [rowX, rowY] = keepInside([x, y + size * 0.62 + 30 * ctx.ui], rowWidth / 2, chipSize * 0.8, ctx);
  let cursor = -rowWidth / 2;
  const current = blend > 0.5 ? index + 1 : index;
  return (
    <g transform={`translate(${x} ${y})`} opacity={ctx.alpha}>
      <FormView form={cue.forms[index]} size={size} opacity={1 - blend} scale={1 - 0.08 * blend} />
      {next && blend > 0 && <FormView form={next} size={size} opacity={blend} scale={0.92 + 0.08 * blend} />}
      <g transform={`translate(${rowX - x} ${rowY - y})`}>
        {labels.map((label, i) => {
          const width = chipWidths[i];
          const cx = cursor + width / 2;
          cursor += width + gap;
          const on = i === current;
          const done = i < current;
          return (
            <g key={i} transform={`translate(${cx} 0)`}>
              <rect x={-width / 2} y={-chipSize * 0.8} width={width} height={chipSize * 1.6} rx={chipSize * 0.8}
                fill={on ? "#ff9f43" : done ? "#ffe2c4" : "#fff"} stroke={on ? "#ff9f43" : "#e8cfa9"} strokeWidth={3 * ctx.k} />
              <text className="film-text" fontSize={chipSize} textAnchor="middle" dominantBaseline="central" fill={on ? "#fff" : ink} style={on ? { stroke: "none" } : undefined}>{label}</text>
            </g>
          );
        })}
      </g>
    </g>
  );
}

/** 一笔一笔写字：每一笔是一个形状，沿着笔画中线把它「刷」出来 */
function Write({ cue, ctx, id }: { cue: Extract<Cue, { kind: "write" }>; ctx: Ctx; id: string }) {
  const data = strokeData[cue.char];
  if (!data) return null;
  const size = cue.size ?? 420;
  const scale = size / 1024;
  const perStroke = cue.stroke ?? 0.7;
  const total = Math.min(cue.upTo ?? data.strokes.length, data.strokes.length);
  const local = ctx.t - cue.from - 0.3;
  const marked = new Set(cue.mark ?? []);
  const [x, y] = cue.at;
  return (
    <g opacity={ctx.alpha} transform={`translate(${x - size / 2} ${y - size / 2}) scale(${scale})`}>
      {cue.grid && (
        <g stroke={cinnabar} fill="#fffdf6" strokeWidth={6 / scale / 2}>
          <rect x={0} y={0} width={1024} height={1024} />
          <line x1={0} y1={512} x2={1024} y2={512} strokeDasharray="30 24" opacity={0.55} />
          <line x1={512} y1={0} x2={512} y2={1024} strokeDasharray="30 24" opacity={0.55} />
        </g>
      )}
      <g transform="translate(0 900) scale(1 -1)">
        <defs>
          {data.strokes.map((d, i) => <clipPath key={i} id={`${id}-${i}`}><path d={d} /></clipPath>)}
        </defs>
        {data.strokes.map((d, i) => <path key={i} d={d} fill="#e9dcc6" />)}
        {data.strokes.slice(0, total).map((_, i) => {
          const progress = ease.inOut((local - i * perStroke) / (perStroke * 0.85));
          if (progress <= 0) return null;
          const median = data.medians[i];
          const color = marked.has(i) ? cue.color ?? cinnabar : ink;
          return (
            <g key={i} clipPath={`url(#${id}-${i})`}>
              <polyline points={polyline(partialPath(median, progress))} fill="none" stroke={color} strokeWidth={150} strokeLinecap="round" strokeLinejoin="round" />
            </g>
          );
        })}
      </g>
      {data.medians.slice(0, total).map((median, i) => {
        const shown = smooth((local - i * perStroke) / 0.2);
        if (shown <= 0) return null;
        const [mx, my] = median[0];
        const writing = local < (i + 1) * perStroke;
        return (
          <g key={i} transform={`translate(${mx} ${900 - my})`} opacity={writing ? shown : 0.55}>
            <circle r={44} fill={marked.has(i) ? cue.color ?? cinnabar : "#ff9f43"} stroke="#fff" strokeWidth={8} />
            <text fontSize={56} fontWeight={900} textAnchor="middle" dominantBaseline="central" fill="#fff">{i + 1}</text>
          </g>
        );
      })}
    </g>
  );
}

function BigText({ cue, ctx }: { cue: Extract<Cue, { kind: "text" }>; ctx: Ctx }) {
  const size = { s: 34, m: 48, l: 72 }[cue.size ?? "m"] * captionScale(ctx);
  const chars = [...cue.text];
  const [x, y] = keepInside(captionPoint(cue.at, ctx), (chars.length * size) / 2, size / 2, ctx);
  return (
    <text className="film-text film-big" x={x} y={y} fontSize={size} textAnchor="middle" dominantBaseline="central" fill={cue.color ?? ink} opacity={ctx.alpha}>
      {chars.map((char, i) => (
        <tspan key={i} opacity={smooth((ctx.t - cue.from - i * 0.05) / 0.15)}>{char}</tspan>
      ))}
    </text>
  );
}

function Count({ cue, ctx }: { cue: Extract<Cue, { kind: "count" }>; ctx: Ctx }) {
  const [x, y] = captionPoint(cue.at, ctx);
  const value = cue.start + (cue.end - cue.start) * ease.inOut((ctx.t - cue.from) / (cue.over ?? 2));
  const { k } = ctx;
  return (
    <g opacity={ctx.alpha} transform={`translate(${x} ${y})`}>
      <rect x={-150 * k} y={-70 * k} width={300 * k} height={140 * k} rx={28 * k} fill="#fff" stroke={ink} strokeWidth={3 * k} />
      <text className="film-text" y={-34 * k} fontSize={Math.min(26 * captionScale(ctx), (270 * k) / [...cue.label].length)} textAnchor="middle" fill="#7a6a55">{cue.label}</text>
      <text className="film-text film-big" y={22 * k} fontSize={58 * k} textAnchor="middle" fill={ink}>
        {Math.round(value)}<tspan fontSize={24 * k}> {cue.unit ?? ""}</tspan>
      </text>
    </g>
  );
}

function Meter({ cue, ctx }: { cue: Extract<Cue, { kind: "meter" }>; ctx: Ctx }) {
  const [x, y] = captionPoint(cue.at, ctx);
  const { k } = ctx;
  const value = cue.start + (cue.end - cue.start) * ease.inOut((ctx.t - cue.from) / (cue.over ?? 2));
  const width = 280 * k;
  return (
    <g opacity={ctx.alpha} transform={`translate(${x - width / 2} ${y})`}>
      <text className="film-text" y={-14 * k} fontSize={Math.min(26 * captionScale(ctx), width / [...cue.label].length)} fill={ink}>{cue.label}</text>
      <rect width={width} height={28 * k} rx={14 * k} fill="#fff" stroke={ink} strokeWidth={3 * k} />
      <rect width={Math.max(width * Math.min(Math.max(value, 0), 1), 0)} height={28 * k} rx={14 * k} fill={cue.color ?? "#4fb6ff"} />
    </g>
  );
}

function renderCue(cue: Cue, ctx: Ctx, id: string): ReactNode {
  switch (cue.kind) {
    case "label": return <Label cue={cue} ctx={ctx} />;
    case "highlight": return <Highlight cue={cue} ctx={ctx} />;
    case "pulse": return <Pulse cue={cue} ctx={ctx} />;
    case "flow": return <Flow cue={cue} ctx={ctx} />;
    case "arrow": return <Arrow cue={cue} ctx={ctx} />;
    case "line": return <Line cue={cue} ctx={ctx} />;
    case "sprite": return <Sprite cue={cue} ctx={ctx} />;
    case "shape": return <Shape cue={cue} ctx={ctx} />;
    case "glyph": return <Glyph cue={cue} ctx={ctx} />;
    case "evolve": return <Evolve cue={cue} ctx={ctx} />;
    case "write": return <Write cue={cue} ctx={ctx} id={id} />;
    case "text": return <BigText cue={cue} ctx={ctx} />;
    case "count": return <Count cue={cue} ctx={ctx} />;
    case "meter": return <Meter cue={cue} ctx={ctx} />;
    case "image": return <Picture cue={cue} ctx={ctx} />;
    case "myth": return null;
  }
}

function Myth({ cue, t }: { cue: Extract<Cue, { kind: "myth" }>; t: number }) {
  const local = t - cue.from;
  const strike = smooth((local - 0.9) / 0.5);
  const right = smooth((local - 1.6) / 0.4);
  return (
    <div className="film-myth" style={{ opacity: envelope(t, cue.from, cue.to) }}>
      <span className="film-myth-wrong" style={{ "--strike": strike } as CSSProperties}>❌ {cue.wrong}</span>
      <span className="film-myth-right" style={{ opacity: right }}>✅ {cue.right}</span>
    </div>
  );
}

type Props = {
  scene: FilmScene;
  /** 这场戏里的时间（秒） */
  t: number;
  isLast: boolean;
  number: number;
  /** 同一页上可能有几部动画，笔画的 clipPath id 要分开 */
  idPrefix: string;
};

export function FilmStage({ scene, t, isLast, number, idPrefix }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageWidth, setStageWidth] = useState(comfortableWidth);
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => setStageWidth(entry.contentRect.width || comfortableWidth));
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);
  const camera = cameraAt(scene.camera, t);
  const k = 1 / camera.zoom;
  const ui = k * Math.min(Math.max(comfortableWidth / stageWidth, 1), maxLegibility);
  const sceneFade = isLast ? 1 : 1 - smooth((t - (scene.duration - 0.3)) / 0.3);

  return (
    <div ref={stageRef} className="film-stage" data-view={scene.view ?? "paper"}>
      <svg viewBox={`${camera.x} ${camera.y} ${camera.width} ${camera.height}`} role="img" aria-label={scene.title}>
        <Backdrop view={scene.view} />
        {scene.cues.map((cue, index) => {
          const alpha = envelope(t, cue.from, cue.to) * sceneFade;
          if (alpha <= 0.001) return null;
          return <g key={index}>{renderCue(cue, { t, k, ui, alpha, camera }, `${idPrefix}-${number}-${index}`)}</g>;
        })}
      </svg>
      <span className="film-title"><b>{number}</b><span>{scene.title}</span></span>
      {scene.cues.map((cue, index) => (cue.kind === "myth" && t >= cue.from ? <Myth key={index} cue={cue} t={t} /> : null))}
    </div>
  );
}
