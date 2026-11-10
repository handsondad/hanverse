import type { Form } from "../films/types";

/**
 * 小念 × 爸爸：问题驱动的讲解。
 * 小念从看到、写到的字发问，爸爸回答；小念接着爸爸刚说的话追问，一问一答一路讲到道理。
 * 从头读到尾，就能弄懂标题里的那个问题。
 */

export type TopicId = "origin" | "picture" | "point" | "together" | "sound" | "change" | "parts" | "write" | "fun" | "story" | "art";

export type Topic = {
  id: TopicId;
  emoji: string;
  title: string;
  color: string;
  /** 小念眼里这一类是什么 */
  kidHook: string;
  /** 爸爸眼里这一类在讲什么 */
  dadLens: string;
};

export const topics: readonly Topic[] = [
  {
    id: "origin", emoji: "🐢", title: "汉字从哪来", color: "#c9a26b",
    kidHook: "龟壳上怎么会有字？最早的字是谁造的？",
    dadLens: "三千多年前的甲骨文，和关于造字的传说"
  },
  {
    id: "picture", emoji: "🖼️", title: "画出来的字", color: "#ff9f43",
    kidHook: "日、月、山、水，看上去就像画！马为什么站着？",
    dadLens: "象形字：照着东西的样子画下来"
  },
  {
    id: "point", emoji: "👉", title: "做记号的字", color: "#6cc4ff",
    kidHook: "本和末只差一横的位置？上和下怎么画？",
    dadLens: "指事字：在图上加个记号，指出要说的那一处"
  },
  {
    id: "together", emoji: "🧩", title: "拼起来的字", color: "#6fd39a",
    kidHook: "人靠着树是休，屋里有猪是家？",
    dadLens: "会意字：把两三个字拼在一起，合出一个新意思"
  },
  {
    id: "sound", emoji: "🔊", title: "一半管读音", color: "#b48cff",
    kidHook: "妈、吗、骂都有马；江和河都有三点水。",
    dadLens: "形声字：一半表示意思，一半提示读音，汉字里最多的就是它"
  },
  {
    id: "change", emoji: "📜", title: "字的变身", color: "#ff7a8a",
    kidHook: "甲骨文怎么变成今天的字？为什么有繁体和简体？",
    dadLens: "字体演变：甲骨文、金文、小篆、隶书、楷书，还有简化字"
  },
  {
    id: "parts", emoji: "🏠", title: "偏旁部首", color: "#ffc75a",
    kidHook: "三点水都和水有关？月字旁为什么常常是身体？",
    dadLens: "偏旁部首：字里的「零件」，看零件就能猜意思"
  },
  {
    id: "write", emoji: "✍️", title: "写字的学问", color: "#9ed36a",
    kidHook: "笔顺为什么先横后竖？古人用什么写字？汉字有多少个？",
    dadLens: "笔画、笔顺、书写工具和常用字"
  },
  {
    id: "fun", emoji: "🎲", title: "好玩的汉字", color: "#4fd1c5",
    kidHook: "三个火叠起来念什么？最难写的字有几画？猜个字谜吧！",
    dadLens: "叠字、字谜、大写数字、最难写的字：汉字里的游戏"
  },
  {
    id: "story", emoji: "🏮", title: "汉字的故事", color: "#e2574c",
    kidHook: "过年的年是什么意思？结婚为什么贴两个喜？方块字美在哪？",
    dadLens: "汉字文化与美学：节日、风俗和字形里藏着的讲究"
  },
  {
    id: "art", emoji: "🖌️", title: "书法艺术与鉴赏", color: "#5b6f8f",
    kidHook: "一个永字藏着八种笔画？颜筋柳骨是什么？草书为什么像跳舞？",
    dadLens: "书法欣赏：看真迹里的线条，读出写字人的力气和心情"
  }
];

/** 问题列表里从简单到复杂的排序 */
export type Difficulty = 1 | 2 | 3;
export const difficultyLabel: Record<Difficulty, string> = { 1: "入门", 2: "进阶", 3: "挑战" };

export type ShowFrame = { icon: string; label: string };

/** 爸爸讲这一段时配的东西：图解步骤、一排字形（从图画到楷书），或以后补充的图片、视频 */
export type BeatShow =
  | { kind: "steps"; frames: readonly ShowFrame[] }
  | { kind: "forms"; forms: readonly Form[] }
  /** src 是 public/ 下的路径，如 "art/jizhi.jpg"，开头不带 / */
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; alt: string; poster?: string };

export type DialogueTurn = {
  /** 小念：第一句说看到的字，之后每一句都接着爸爸上一句里的说法追问；最后一句用自己的话总结 */
  nian: string;
  /** 爸爸的回答 */
  dad: string;
  show?: BeatShow;
};

export type ZiQuestion = {
  id: string;
  topic: TopicId;
  /** 列表上显示的问题，用小念的口吻 */
  title: string;
  /** 小念刚刚遇到的事 */
  trigger: string;
  difficulty: Difficulty;
  /** 这一问讲到的字（简体，一个一个），页面上能点进「一个字的一生」 */
  chars: readonly string[];
  /** 一问一答，从看到的字讲到道理 */
  dialogue: readonly DialogueTurn[];
  /** 给大人：补充背景、学界的不同说法、出处 */
  parentTip: string;
};
