import assert from "node:assert/strict";
import test from "node:test";
import { ziQuestions } from "../src/data/questions/index.ts";
import { films } from "../src/data/films/index.ts";
import { cameraAt, envelope, evolveAt, pointAlong, sceneAt, totalDuration, turnAt } from "../src/lib/film.ts";
import { usedGlyphs } from "../tools/glyphs.mjs";
import { filmProblems } from "./film-rules.mjs";
import { sealSubset, strokes } from "./glyph-rules.mjs";

const byId = new Map(ziQuestions.map((question) => [question.id, question]));

test("每部动画都通过规则检查", () => {
  for (const film of films) assert.deepEqual(filmProblems(film, byId.get(film.question)), [], film.question);
});

test("每个问题都有讲解动画", () => {
  const have = new Set(films.map((film) => film.question));
  assert.deepEqual(ziQuestions.filter((question) => !have.has(question.id)).map((question) => question.id), []);
});

test("一个问题只有一部动画", () => {
  const ids = films.map((film) => film.question);
  assert.equal(new Set(ids).size, ids.length);
});

test("小篆子集和笔顺数据正好是动画要用的，不多不少", () => {
  const used = usedGlyphs();
  assert.deepEqual([...sealSubset].sort(), [...used.seal].sort(), "跑一下 npm run fonts");
  assert.deepEqual(Object.keys(strokes).sort(), [...used.write].sort(), "跑一下 npm run strokes");
});

test("时间线是时间的纯函数：同一时刻同一帧", () => {
  const film = films[0];
  const total = totalDuration(film);
  assert.deepEqual(sceneAt(film, 0), { index: 0, local: 0 });
  assert.equal(sceneAt(film, total + 5).index, film.scenes.length - 1);
  const second = film.scenes[0].duration + 0.5;
  assert.deepEqual(sceneAt(film, second), { index: 1, local: 0.5 });
  assert.equal(envelope(0.9, 1), 0);
  assert.ok(envelope(3, 1) > 0.99);
  assert.ok(envelope(10, 1, 4) < 0.01);
  assert.deepEqual(pointAlong([[0, 0], [100, 0], [100, 100]], 0.75), [100, 50]);
  const camera = cameraAt([{ t: 0, at: [600, 450], zoom: 2 }], 1);
  assert.deepEqual([camera.width, camera.height, camera.x, camera.y], [600, 450, 300, 225]);
  const edge = cameraAt([{ t: 0, at: [0, 0], zoom: 2 }], 0);
  assert.deepEqual([edge.x, edge.y], [0, 0]);
});

test("字的变身按时间一步步换，最后停在最后一种；转身从 rotate 转到 turnTo", () => {
  assert.deepEqual(evolveAt(0, 3, 2), { index: 0, blend: 0 });
  assert.equal(evolveAt(1.99, 3, 2).index, 0);
  assert.ok(evolveAt(1.99, 3, 2).blend > 0.9, "换下一种之前先淡过去");
  assert.deepEqual(evolveAt(2.5, 3, 2), { index: 1, blend: 0 });
  assert.deepEqual(evolveAt(99, 3, 2), { index: 2, blend: 0 });
  assert.equal(turnAt(0, -90, 0, 2), -90);
  assert.equal(turnAt(5, -90, 0, 2), 0);
  assert.equal(turnAt(5, 30), 30);
});
