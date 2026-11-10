import { artQuestions } from "./art.ts";
import { changeQuestions } from "./change.ts";
import { funQuestions } from "./fun.ts";
import { originQuestions } from "./origin.ts";
import { partsQuestions } from "./parts.ts";
import { pictureQuestions } from "./picture.ts";
import { pointQuestions } from "./point.ts";
import { soundQuestions } from "./sound.ts";
import { storyQuestions } from "./story.ts";
import { togetherQuestions } from "./together.ts";
import { writeQuestions } from "./write.ts";
import { topics, type Topic, type TopicId, type ZiQuestion } from "./types.ts";

export * from "./types.ts";

/** 新问题只要加进对应主题的文件，就会出现在这里 */
export const ziQuestions: readonly ZiQuestion[] = [
  ...originQuestions,
  ...pictureQuestions,
  ...pointQuestions,
  ...togetherQuestions,
  ...soundQuestions,
  ...changeQuestions,
  ...partsQuestions,
  ...writeQuestions,
  ...funQuestions,
  ...storyQuestions,
  ...artQuestions
];

const byOrder = (a: ZiQuestion, b: ZiQuestion) => a.difficulty - b.difficulty;

export function questionsIn(topic: TopicId): ZiQuestion[] {
  return ziQuestions.filter((question) => question.topic === topic).sort(byOrder);
}

export function questionById(id: string): ZiQuestion | undefined {
  return ziQuestions.find((question) => question.id === id);
}

export function topicById(id: string): Topic | undefined {
  return topics.find((topic) => topic.id === id);
}

/** 讲到过这个字的问题 */
export function questionsAbout(char: string): ZiQuestion[] {
  return ziQuestions.filter((question) => question.chars.includes(char));
}

/** 同一主题里排在后面的问题，用作“小念还想问” */
export function nextQuestions(question: ZiQuestion, count = 3): ZiQuestion[] {
  const list = questionsIn(question.topic).filter((item) => item.id !== question.id);
  const after = list.filter((item) => item.difficulty >= question.difficulty);
  return [...after, ...list.filter((item) => !after.includes(item))].slice(0, count);
}
