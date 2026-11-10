import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import { nextQuestions, questionsAbout, questionsIn, topics, ziQuestions } from "../src/data/questions/index.ts";
import { lookupZi } from "../src/lib/zi.ts";
import { dialogueProblems, sharedWords, topicWords } from "./dialogue-rules.mjs";
import { ziData } from "./glyph-rules.mjs";

test("问题 id 不重复，每个问题都属于一个主题", () => {
  const ids = ziQuestions.map((question) => question.id);
  assert.equal(new Set(ids).size, ids.length);
  const known = new Set(topics.map((topic) => topic.id));
  for (const question of ziQuestions) assert.ok(known.has(question.topic), question.id);
});

test("每个主题至少三个问题，从简单排到难", () => {
  for (const topic of topics) {
    const list = questionsIn(topic.id);
    assert.ok(list.length >= 3, `${topic.id} 只有 ${list.length} 个`);
    assert.equal(list[0].difficulty, 1, topic.id);
    for (let i = 1; i < list.length; i += 1) assert.ok(list[i].difficulty >= list[i - 1].difficulty, topic.id);
  }
});

test("每段问答都是一路追问，最后小念自己总结", () => {
  const problems = ziQuestions.flatMap((question) => dialogueProblems(question));
  assert.deepEqual(problems, []);
});

test("追问检查看的是有意思的词，不是虚词", () => {
  const words = topicWords("甲骨文为什么刻在龟壳上？");
  assert.ok(words.has("甲骨") && words.has("龟壳") && !words.has("什么"));
  assert.deepEqual(sharedWords("那为什么呢？", "这是为什么呢"), []);
  assert.deepEqual(sharedWords("汉字是谁造的？", "汉字很古老"), [], "人人都会说的词不算接住话头");
  assert.deepEqual(sharedWords("龟壳怎么占卜？", "商朝人用龟壳问事情"), ["龟壳"]);
});

test("相关问题在同一个主题里", () => {
  for (const question of ziQuestions) {
    const related = nextQuestions(question);
    assert.ok(related.length >= 1, question.id);
    assert.ok(related.every((item) => item.topic === question.topic && item.id !== question.id), question.id);
  }
});

test("问答里讲到的字都能链回这个问题，每一问至少有一个字查得到古文字", () => {
  for (const question of ziQuestions) {
    const ancient = question.chars.filter((char) => {
      const zi = lookupZi(ziData, char);
      return zi.sealChar || zi.oracleChar || zi.shuowen;
    });
    assert.ok(ancient.length >= 1, `${question.id}：讲到的字都查不到古文字`);
    for (const char of question.chars) assert.ok(questionsAbout(char).includes(question), `${question.id}：「${char}」`);
  }
});

test("问答里配的图都在 public/ 里", () => {
  for (const question of ziQuestions) {
    for (const turn of question.dialogue) {
      if (turn.show?.kind !== "image") continue;
      assert.ok(!turn.show.src.startsWith("/") && existsSync(new URL(`../public/${turn.show.src}`, import.meta.url)), `${question.id}：public/${turn.show.src}`);
      assert.ok(turn.show.alt, `${question.id}：图要写 alt`);
    }
  }
});

test("查字和 yigezi 一样先换成繁体", () => {
  const horse = lookupZi(ziData, "马");
  assert.equal(horse.traditional, "馬");
  assert.equal(horse.oracleChar, "馬");
  assert.ok(horse.shuowen?.e.includes("象馬頭髦尾四足之形"));
  const home = lookupZi(ziData, "家");
  assert.equal(home.traditional, "家");
  assert.ok(home.correction?.includes("豕"));
});
