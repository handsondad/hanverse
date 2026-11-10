import type { Film } from "./types";

const ink = "#4a3b2a";
const red = "#d9453a";
const bronze = "#d8b77a";

export const films: readonly Film[] = [
  {
    question: "script-journey",
    scenes: [
      {
        turn: 0, title: "汉字换了好几次衣服", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "三千多年 · 一路在变", from: 0.3, to: 4.2 },
          { kind: "glyph", char: "車", script: "oracle", at: [600, 370], size: 320, caption: "甲骨文的车", from: 0.8 },
          { kind: "label", at: [600, 370], text: "两个轮子一根轴", pos: [960, 230], from: 2.4, to: 4.4 },
          { kind: "shape", shape: "pill", at: [160, 740], size: [190, 80], color: "#ead7b4", text: "甲骨文", from: 4.6 },
          { kind: "shape", shape: "pill", at: [380, 740], size: [190, 80], color: bronze, text: "金文", from: 5.6 },
          { kind: "shape", shape: "pill", at: [600, 740], size: [190, 80], color: "#f2d9a0", text: "小篆", from: 6.6 },
          { kind: "shape", shape: "pill", at: [820, 740], size: [190, 80], color: "#f6e3c0", text: "隶书", from: 7.6 },
          { kind: "shape", shape: "pill", at: [1040, 740], size: [190, 80], color: "#ffe9a8", text: "楷书", motion: "pulse", from: 8.6 }
        ]
      },
      {
        turn: 1, title: "铸在青铜器上", duration: 12,
        cues: [
          { kind: "sprite", icon: "🏺", path: [[300, 420]], size: 170, from: 0.4 },
          { kind: "label", at: [300, 420], text: "青铜器", side: "bottom", from: 1 },
          { kind: "text", at: [600, 110], text: "古人把青铜叫「金」", from: 1.6, to: 5.4 },
          { kind: "flow", path: [[860, 170], [820, 290]], color: "#ff9f43", count: 6, from: 2.6, to: 5.4 },
          { kind: "shape", shape: "rect", at: [820, 440], size: [280, 280], color: bronze, text: "金文", motion: "grow", over: 1.5, from: 3.2, to: 8.2 },
          { kind: "text", at: [600, 110], text: "笔画粗粗的、圆圆的", from: 5.6 },
          { kind: "count", at: [820, 440], label: "毛公鼎上的字", start: 0, end: 499, unit: "个", from: 8.4 },
          { kind: "text", at: [600, 800], text: "到了秦朝 → 小篆", size: "s", from: 10.4 }
        ]
      },
      {
        turn: 2, title: "弯弯绕绕的小篆", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "秦朝 · 小篆", from: 0.3 },
          { kind: "evolve", at: [600, 400], size: 300, every: 1.8, from: 0.6, forms: [{ icon: "🐴" }, { script: "oracle", char: "馬" }, { script: "seal", char: "馬" }] },
          { kind: "text", at: [600, 800], text: "线条又细又匀，弯弯绕绕", from: 5.8, to: 8.4 },
          { kind: "sprite", icon: "🐢", path: [[1020, 640]], size: 100, wobble: true, from: 8.4 },
          { kind: "text", at: [600, 800], text: "写起来太慢了！", size: "l", from: 8.6 }
        ]
      },
      {
        turn: 3, title: "拉直、变方：隶书", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "秦汉 · 隶书", from: 0.3 },
          { kind: "glyph", char: "馬", script: "seal", at: [300, 420], size: 260, caption: "小篆", from: 0.5 },
          { kind: "line", path: [[720, 320], [760, 250], [840, 220], [920, 250], [960, 320]], color: ink, width: 14, draw: 1, from: 1.6, to: 6.6 },
          { kind: "arrow", path: [[840, 360], [840, 440]], from: 3, to: 6.6 },
          { kind: "line", path: [[720, 560], [720, 480], [960, 480], [960, 560]], color: red, width: 14, draw: 1, from: 3.6, to: 6.6 },
          { kind: "label", at: [840, 480], text: "弯线拉直，圆变方", side: "bottom", from: 4.4, to: 6.6 },
          { kind: "glyph", char: "馬", script: "song", at: [860, 420], size: 260, caption: "四条腿变四点", from: 7 },
          { kind: "highlight", at: [860, 510], size: [240, 90], color: red, from: 8.4 }
        ]
      },
      {
        turn: 4, title: "端端正正：楷书", duration: 11,
        cues: [
          { kind: "glyph", char: "马", at: [360, 400], size: 300, caption: "楷书", from: 0.5 },
          { kind: "text", at: [600, 110], text: "横平竖直，一笔一画", from: 1.6 },
          { kind: "glyph", char: "楷", at: [860, 400], size: 260, caption: "楷：榜样", motion: "pulse", from: 4.2 },
          { kind: "text", at: [600, 800], text: "汉末出现 · 唐朝定型", from: 7 },
          { kind: "sprite", icon: "📖", path: [[1080, 660]], size: 100, from: 9 }
        ]
      },
      {
        turn: 5, title: "一代一代慢慢改", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "一代一代，一点一点改", from: 0.3 },
          { kind: "sprite", icon: "🧓", path: [[300, 700]], size: 100, from: 0.6, to: 7.2 },
          { kind: "sprite", icon: "👨", path: [[600, 700]], size: 100, from: 1.2, to: 7.2 },
          { kind: "sprite", icon: "👦", path: [[900, 700]], size: 100, from: 1.8, to: 7.2 },
          { kind: "evolve", at: [330, 380], size: 260, every: 1.6, from: 3.4, forms: [{ script: "oracle", char: "日" }, { script: "seal", char: "日" }, { script: "kai", char: "日" }] },
          { kind: "evolve", at: [870, 380], size: 260, every: 1.6, from: 3.8, forms: [{ script: "oracle", char: "山" }, { script: "seal", char: "山" }, { script: "kai", char: "山" }] },
          { kind: "myth", wrong: "汉字是一下子变成今天的", right: "一代代写字的人慢慢改的", from: 7.6 }
        ]
      }
    ]
  },
  {
    question: "same-writing",
    scenes: [
      {
        turn: 0, title: "书同文", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "两千多年前 · 秦朝", from: 0.3 },
          { kind: "sprite", icon: "👑", path: [[600, 290]], size: 130, from: 0.8 },
          { kind: "label", at: [600, 290], text: "秦始皇", side: "right", from: 1.4 },
          { kind: "glyph", char: "秦", script: "seal", at: [600, 520], size: 240, caption: "小篆的秦", from: 3 },
          { kind: "text", at: [600, 800], text: "书同文：写一样的字", from: 6.5 }
        ]
      },
      {
        turn: 1, title: "各写各的马", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "战国：同一个字，写法不同", from: 0.3 },
          { kind: "sprite", icon: "🐴", path: [[600, 460]], size: 140, from: 0.8, to: 7.4 },
          { kind: "shape", shape: "circle", at: [300, 300], size: [220, 220], color: "#ffe2b8", text: "齐国的马", motion: "wiggle", from: 2.6 },
          { kind: "shape", shape: "circle", at: [900, 300], size: [220, 220], color: "#d8f0d0", text: "楚国的马", motion: "wiggle", from: 3.2 },
          { kind: "shape", shape: "circle", at: [300, 620], size: [220, 220], color: "#dbe8ff", text: "燕国的马", motion: "wiggle", from: 3.8 },
          { kind: "shape", shape: "circle", at: [900, 620], size: [220, 220], color: "#f6d6d0", text: "秦国的马", motion: "wiggle", from: 4.4 },
          { kind: "sprite", icon: "❓", path: [[600, 460]], size: 120, wobble: true, from: 7.6 }
        ]
      },
      {
        turn: 2, title: "命令看不懂", duration: 11,
        cues: [
          { kind: "sprite", icon: "👑", path: [[180, 420]], size: 130, from: 0.4 },
          { kind: "label", at: [180, 420], text: "都城", side: "bottom", from: 0.8 },
          { kind: "sprite", icon: "📜", path: [[300, 420], [880, 420]], size: 90, travel: 2.6, from: 1.4 },
          { kind: "sprite", icon: "🤔", path: [[1020, 420]], size: 130, from: 4 },
          { kind: "text", at: [600, 110], text: "看不懂！对不上！", size: "l", from: 4.6 },
          { kind: "text", at: [600, 800], text: "定下一套标准的字", from: 7.4 }
        ]
      },
      {
        turn: 3, title: "李斯整理小篆", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "丞相李斯 · 整理小篆", from: 0.3 },
          { kind: "glyph", char: "馬", script: "seal", at: [420, 410], size: 300, caption: "秦国的马", from: 1.2 },
          { kind: "sprite", icon: "📚", path: [[900, 400]], size: 140, from: 4.2 },
          { kind: "label", at: [900, 400], text: "识字课本", side: "bottom", from: 4.8 },
          { kind: "myth", wrong: "小篆是凭空造出来的", right: "拿秦国的字做底子整理的", from: 7.2 }
        ]
      },
      {
        turn: 4, title: "写快一点：隶书", duration: 12,
        cues: [
          { kind: "glyph", char: "文", script: "seal", at: [320, 380], size: 240, caption: "小篆：好看", from: 0.5 },
          { kind: "sprite", icon: "🐢", path: [[320, 640]], size: 90, wobble: true, from: 1.6 },
          { kind: "arrow", path: [[500, 380], [700, 380]], text: "拉直变方", from: 3.6 },
          { kind: "shape", shape: "rect", at: [880, 380], size: [240, 240], color: "#f6e3c0", text: "隶书", from: 4.4 },
          { kind: "sprite", icon: "⚡", path: [[880, 640]], size: 90, from: 5.2 },
          { kind: "text", at: [600, 110], text: "抄公文，写得快", from: 5.6 },
          { kind: "text", at: [600, 800], text: "汉朝：隶书最常用", from: 9 }
        ]
      },
      {
        turn: 5, title: "口音不同，字相同", duration: 12,
        cues: [
          { kind: "sprite", icon: "👦", path: [[220, 420]], size: 140, from: 0.6 },
          { kind: "sprite", icon: "👧", path: [[980, 420]], size: 140, from: 1 },
          { kind: "label", at: [220, 420], text: "南方", side: "bottom", from: 3.4 },
          { kind: "label", at: [980, 420], text: "北方", side: "bottom", from: 3.8 },
          { kind: "pulse", at: [600, 420], color: "#ff7a2f", radius: 90, from: 4.2, to: 6.4 },
          { kind: "glyph", char: "马", at: [600, 420], size: 240, motion: "pulse", from: 6.6 },
          { kind: "text", at: [600, 800], text: "说话不一样，字一样", from: 7.4 }
        ]
      }
    ]
  },
  {
    question: "simplified",
    scenes: [
      {
        turn: 0, title: "同一个字，两种写法", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "繁体字 · 简体字", from: 0.3 },
          { kind: "glyph", char: "雲", script: "song", at: [380, 330], size: 200, caption: "繁体", from: 1 },
          { kind: "glyph", char: "云", at: [820, 330], size: 200, caption: "简体", from: 2.6 },
          { kind: "highlight", at: [380, 270], size: [210, 100], color: red, from: 3.6, to: 6 },
          { kind: "label", at: [380, 270], text: "雨字头", side: "left", from: 3.8, to: 6 },
          { kind: "glyph", char: "書", script: "song", at: [380, 640], size: 180, from: 6.4 },
          { kind: "glyph", char: "书", at: [820, 640], size: 180, from: 7 },
          { kind: "text", at: [600, 820], text: "读音意思都一样", size: "s", from: 8.4 }
        ]
      },
      {
        turn: 1, title: "笔画少一点", duration: 13,
        cues: [
          { kind: "glyph", char: "書", script: "song", at: [360, 420], size: 240, caption: "繁体", from: 0.4, to: 5.4 },
          { kind: "arrow", path: [[520, 420], [680, 420]], text: "笔画变少", from: 1.6, to: 5.4 },
          { kind: "glyph", char: "书", at: [840, 420], size: 240, caption: "简体", from: 2.2, to: 5.4 },
          { kind: "text", at: [600, 110], text: "1956 年：简化方案", from: 5.6, to: 8.4 },
          { kind: "text", at: [600, 110], text: "1964 年：简化字总表", from: 8.4 },
          { kind: "count", at: [600, 450], label: "1986 年总表", start: 0, end: 2235, unit: "个简化字", from: 9.4, over: 2.4 }
        ]
      },
      {
        turn: 2, title: "「云」是古时候的字", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "甲骨文就写作「云」", from: 0.3 },
          { kind: "evolve", at: [600, 400], size: 300, every: 1.6, from: 0.8, forms: [{ icon: "☁️" }, { script: "oracle", char: "云" }, { script: "song", char: "雲", label: "繁体" }, { script: "kai", char: "云", label: "简体" }] },
          { kind: "label", at: [600, 300], text: "后来加上雨字头", side: "right", from: 4, to: 6.4 },
          { kind: "myth", wrong: "简体字是现代人随便造的", right: "很多简体字古时候就有", from: 7.6 }
        ]
      },
      {
        turn: 3, title: "三千年前就这么写", duration: 12,
        cues: [
          { kind: "glyph", char: "网", script: "oracle", at: [240, 360], size: 200, caption: "像渔网", from: 0.5 },
          { kind: "glyph", char: "网", at: [240, 640], size: 130, from: 1.4 },
          { kind: "glyph", char: "从", script: "oracle", at: [600, 360], size: 200, caption: "人跟着人", from: 2.4 },
          { kind: "glyph", char: "从", at: [600, 640], size: 130, from: 3.2 },
          { kind: "glyph", char: "眾", script: "oracle", at: [960, 360], size: 200, caption: "下面三个人", from: 4.4 },
          { kind: "glyph", char: "众", at: [960, 640], size: 130, from: 5.2 },
          { kind: "text", at: [600, 110], text: "三千多年前就这样写", from: 7 }
        ]
      },
      {
        turn: 4, title: "从草书变来", duration: 12,
        cues: [
          { kind: "glyph", char: "書", script: "song", at: [260, 400], size: 220, caption: "繁体", from: 0.5, to: 7.4 },
          { kind: "line", path: [[540, 300], [640, 320], [560, 370], [660, 400], [570, 450], [650, 480], [600, 520]], color: ink, width: 10, draw: 1.6, from: 1.4, to: 7.4 },
          { kind: "label", at: [600, 520], text: "草书：几笔连起来", side: "bottom", from: 2.6, to: 7.4 },
          { kind: "arrow", path: [[720, 400], [820, 400]], from: 4.2, to: 7.4 },
          { kind: "glyph", char: "书", at: [960, 400], size: 220, caption: "简体", from: 4.8, to: 7.4 },
          { kind: "glyph", char: "東", script: "song", at: [380, 420], size: 220, caption: "繁体", from: 7.8 },
          { kind: "arrow", path: [[520, 420], [680, 420]], text: "草书改楷书", from: 8.4 },
          { kind: "glyph", char: "东", at: [820, 420], size: 220, caption: "简体", from: 9 }
        ]
      },
      {
        turn: 5, title: "还在用繁体字", duration: 11,
        cues: [
          { kind: "shape", shape: "pill", at: [300, 300], size: [220, 90], color: "#ffe2b8", text: "香港", from: 0.5, to: 5.4 },
          { kind: "shape", shape: "pill", at: [600, 300], size: [220, 90], color: "#d8f0d0", text: "澳门", from: 0.9, to: 5.4 },
          { kind: "shape", shape: "pill", at: [900, 300], size: [220, 90], color: "#dbe8ff", text: "台湾", from: 1.3, to: 5.4 },
          { kind: "shape", shape: "pill", at: [600, 460], size: [300, 90], color: "#f6e3c0", text: "海外华人", from: 2, to: 5.4 },
          { kind: "text", at: [600, 110], text: "一套汉字，两种写法", from: 5.6 },
          { kind: "glyph", char: "雲", script: "song", at: [400, 480], size: 220, caption: "繁体", from: 6 },
          { kind: "glyph", char: "云", at: [800, 480], size: 220, caption: "简体", from: 6.6 },
          { kind: "text", at: [600, 800], text: "学会简体，繁体能猜", size: "s", from: 8.2 }
        ]
      }
    ]
  },
  {
    question: "she-character",
    scenes: [
      {
        turn: 0, title: "男女都写「他」", duration: 12,
        cues: [
          { kind: "glyph", char: "他", at: [330, 360], size: 240, caption: "单人旁", from: 0.4 },
          { kind: "sprite", icon: "👦", path: [[250, 640]], size: 100, from: 3, to: 6.4 },
          { kind: "sprite", icon: "👧", path: [[410, 640]], size: 100, from: 3.4, to: 6.4 },
          { kind: "text", at: [600, 110], text: "以前：男女都写「他」", size: "s", from: 3.8 },
          { kind: "write", char: "她", at: [860, 360], size: 300, stroke: 0.5, from: 6.4 },
          { kind: "text", at: [600, 800], text: "刘半农：女的用「她」", from: 8.6 }
        ]
      },
      {
        turn: 1, title: "一篇文章", duration: 11,
        cues: [
          { kind: "sprite", icon: "🤔", path: [[600, 380]], size: 160, wobble: true, from: 0.4, to: 4.4 },
          { kind: "text", at: [600, 600], text: "是男的还是女的？", from: 0.8, to: 4.4 },
          { kind: "text", at: [600, 160], text: "1920 年", size: "l", from: 4.6 },
          { kind: "sprite", icon: "📝", path: [[330, 450]], size: 160, from: 5 },
          { kind: "label", at: [330, 450], text: "刘半农", side: "bottom", from: 5.4 },
          { kind: "glyph", char: "她", at: [740, 440], size: 190, caption: "女的", from: 7 },
          { kind: "glyph", char: "他", at: [1000, 440], size: 190, caption: "男的", from: 7.6 }
        ]
      },
      {
        turn: 2, title: "很多人反对", duration: 12,
        cues: [
          { kind: "sprite", icon: "🗣️", path: [[230, 400]], size: 150, from: 0.4 },
          { kind: "text", at: [600, 110], text: "读音一样，听不出来！", from: 0.8, to: 6.2 },
          { kind: "glyph", char: "他", at: [560, 400], size: 200, from: 1.8 },
          { kind: "glyph", char: "她", at: [860, 400], size: 200, from: 2.2 },
          { kind: "text", at: [710, 640], text: "都读 tā", from: 3 },
          { kind: "text", at: [600, 110], text: "写在纸上，一眼分清", color: red, from: 6.6 },
          { kind: "highlight", at: [820, 400], size: [110, 210], color: red, from: 7.2 }
        ]
      },
      {
        turn: 3, title: "古书里的老字", duration: 12,
        cues: [
          { kind: "sprite", icon: "📜", path: [[300, 380]], size: 170, from: 0.4 },
          { kind: "label", at: [300, 380], text: "《玉篇》", side: "bottom", from: 1 },
          { kind: "text", at: [600, 110], text: "很早以前就有这个字", from: 1.6, to: 7.4 },
          { kind: "glyph", char: "她", script: "song", at: [800, 380], size: 240, caption: "意思是妈妈", from: 2.4, to: 7.4 },
          { kind: "glyph", char: "她", at: [800, 380], size: 240, color: red, caption: "专门指女的", from: 7.6 },
          { kind: "myth", wrong: "她是刘半农新造的字", right: "老字请出来，换个新任务", from: 7.8 }
        ]
      },
      {
        turn: 4, title: "唱出来的「她」", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "《教我如何不想她》", from: 0.4 },
          { kind: "sprite", icon: "📝", path: [[260, 360]], size: 140, from: 0.8, to: 5.6 },
          { kind: "sprite", icon: "🎼", path: [[560, 360]], size: 140, from: 2.4, to: 5.6 },
          { kind: "label", at: [560, 360], text: "赵元任谱成歌", side: "bottom", from: 2.8, to: 5.6 },
          { kind: "flow", path: [[700, 340], [1060, 300]], icon: "🎵", count: 5, from: 3.4, to: 5.6 },
          { kind: "sprite", icon: "📰", path: [[380, 420]], size: 150, from: 5.8 },
          { kind: "sprite", icon: "📚", path: [[820, 420]], size: 150, from: 6.4 },
          { kind: "text", at: [600, 800], text: "用的人越来越多", from: 7.4 }
        ]
      },
      {
        turn: 5, title: "他、她、它", duration: 13,
        cues: [
          { kind: "glyph", char: "牠", script: "song", at: [360, 380], size: 220, caption: "牛字旁", from: 0.6, to: 6.4 },
          { kind: "arrow", path: [[500, 380], [700, 380]], text: "后来写成", from: 2.4, to: 6.4 },
          { kind: "glyph", char: "它", at: [840, 380], size: 220, caption: "宝盖头", from: 3, to: 6.4 },
          { kind: "glyph", char: "他", at: [300, 400], size: 200, caption: "男的", from: 6.8 },
          { kind: "glyph", char: "她", at: [600, 400], size: 200, caption: "女的", from: 7.4 },
          { kind: "glyph", char: "它", at: [900, 400], size: 200, caption: "东西、动物", from: 8 },
          { kind: "text", at: [600, 800], text: "读音都一样：tā", from: 9.4 }
        ]
      }
    ]
  },
  {
    question: "zetian",
    scenes: [
      {
        turn: 0, title: "女皇帝的名字", duration: 11,
        cues: [
          { kind: "sprite", icon: "👑", path: [[600, 220]], size: 120, from: 0.4, to: 6.6 },
          { kind: "label", at: [600, 220], text: "武则天", side: "right", from: 1, to: 6.6 },
          { kind: "glyph", char: "日", at: [480, 440], size: 170, from: 2.4, to: 6.6 },
          { kind: "glyph", char: "月", at: [720, 440], size: 170, from: 2.8, to: 6.6 },
          { kind: "glyph", char: "空", at: [600, 640], size: 170, from: 3.4, to: 6.6 },
          { kind: "glyph", char: "曌", script: "song", at: [600, 400], size: 320, caption: "读 zhào", motion: "pulse", from: 6.8 },
          { kind: "text", at: [600, 800], text: "照亮的「照」", from: 7.8 }
        ]
      },
      {
        turn: 1, title: "日月挂在天空", duration: 13,
        cues: [
          { kind: "glyph", char: "日", script: "oracle", at: [200, 330], size: 200, caption: "太阳", path: [[460, 300]], travel: 2, from: 0.4, to: 6.8 },
          { kind: "glyph", char: "月", script: "oracle", at: [1000, 330], size: 200, caption: "月亮", path: [[740, 300]], travel: 2, from: 1, to: 6.8 },
          { kind: "pulse", at: [600, 620], color: "#ff9f43", radius: 110, from: 3, to: 6.8 },
          { kind: "text", at: [600, 800], text: "照亮整个天下", from: 3.6, to: 6.8 },
          { kind: "glyph", char: "明", script: "oracle", at: [360, 420], size: 240, caption: "甲骨文的明", from: 7.2 },
          { kind: "glyph", char: "曌", script: "song", at: [840, 420], size: 240, caption: "日+月+空", from: 8.4 },
          { kind: "text", at: [600, 800], text: "拼在一起，合出新意思", from: 9.6 }
        ]
      },
      {
        turn: 2, title: "一批新字", duration: 11,
        cues: [
          { kind: "text", at: [600, 160], text: "689 年", size: "l", from: 0.4 },
          { kind: "count", at: [480, 420], label: "一开始", start: 0, end: 12, unit: "个", over: 1.4, from: 2 },
          { kind: "count", at: [480, 620], label: "后来大约", start: 12, end: 18, unit: "个", over: 1.4, from: 4.6 },
          { kind: "glyph", char: "曌", script: "song", at: [930, 500], size: 200, caption: "其中一个", from: 7.4 }
        ]
      },
      {
        turn: 3, title: "好玩的新字", duration: 13,
        cues: [
          { kind: "glyph", char: "圀", script: "song", at: [240, 360], size: 200, caption: "八方在框里", from: 0.6 },
          { kind: "glyph", char: "国", at: [240, 640], size: 120, from: 2 },
          { kind: "glyph", char: "埊", script: "song", at: [600, 360], size: 200, caption: "山、水、土", from: 4.2 },
          { kind: "glyph", char: "地", at: [600, 640], size: 120, from: 5.6 },
          { kind: "glyph", char: "〇", script: "song", at: [960, 360], size: 200, caption: "一个圆圈", from: 7.4 },
          { kind: "glyph", char: "星", at: [960, 640], size: 120, from: 8.6 }
        ]
      },
      {
        turn: 4, title: "大家不用了", duration: 12,
        cues: [
          { kind: "sprite", icon: "👑", path: [[600, 300]], size: 120, from: 0.4, to: 5.2 },
          { kind: "text", at: [600, 110], text: "掌权时：不得不用", from: 1.2, to: 5.2 },
          { kind: "glyph", char: "圀", script: "song", at: [330, 440], size: 180, from: 1.8, to: 5.2 },
          { kind: "glyph", char: "埊", script: "song", at: [870, 440], size: 180, from: 2.2, to: 5.2 },
          { kind: "text", at: [600, 110], text: "退位以后：没人用了", from: 5.6 },
          { kind: "glyph", char: "国", at: [330, 400], size: 180, caption: "写回原来的", from: 6.2 },
          { kind: "glyph", char: "地", at: [870, 400], size: 180, caption: "写回原来的", from: 6.6 },
          { kind: "myth", wrong: "皇帝造的字大家都会用", right: "大家都用，字才活得下去", from: 8.2 }
        ]
      },
      {
        turn: 5, title: "留下来的「曌」", duration: 11,
        cues: [
          { kind: "glyph", char: "曌", script: "song", at: [600, 380], size: 300, motion: "pulse", from: 0.4 },
          { kind: "label", at: [600, 240], text: "武则天的名字", side: "top", pos: [600, 110], from: 1.2 },
          { kind: "text", at: [600, 800], text: "跟着名字留了下来", from: 3 },
          { kind: "sprite", icon: "📖", path: [[1000, 640]], size: 120, from: 5.6 },
          { kind: "label", at: [1000, 640], text: "字典里查得到", side: "top", pos: [1000, 520], from: 6 }
        ]
      }
    ]
  }
];
