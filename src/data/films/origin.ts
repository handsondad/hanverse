import type { Film } from "./types";

const crack = "#3b2a1a";

export const films: readonly Film[] = [
  {
    question: "oracle-bones",
    scenes: [
      {
        turn: 0, title: "会说话的龟甲", view: "shell", duration: 10,
        cues: [
          { kind: "text", at: [600, 110], text: "三千多年前 · 商朝", from: 0.3 },
          { kind: "glyph", char: "龜", script: "oracle", at: [600, 430], size: 320, caption: "甲骨文的龟", from: 0.8, to: 5 },
          { kind: "sprite", icon: "🐢", path: [[180, 640]], size: 120, wobble: true, from: 5.2 },
          { kind: "label", at: [600, 470], text: "龟甲：乌龟的肚皮", side: "top", from: 5.4 },
          { kind: "sprite", icon: "🐂", path: [[1020, 640]], size: 120, from: 6.4 },
          { kind: "text", at: [600, 820], text: "甲骨 = 龟甲 + 牛骨", from: 7 }
        ]
      },
      {
        turn: 1, title: "挖坑、火烫、裂开", view: "shell", duration: 12,
        camera: [{ t: 0, at: [600, 450], zoom: 1 }, { t: 1.5, at: [760, 520], zoom: 2.2 }, { t: 10, at: [760, 520], zoom: 2.2 }, { t: 11.5, at: [700, 480], zoom: 1.6 }],
        cues: [
          { kind: "highlight", at: [760, 520], size: [90, 120], from: 1.6, to: 4.2 },
          { kind: "label", at: [760, 520], text: "背面挖的小坑", side: "left", from: 1.8, to: 4.2 },
          { kind: "sprite", icon: "🔥", path: [[760, 610]], size: 60, wobble: true, from: 4.2, to: 7.6 },
          { kind: "pulse", at: [760, 520], color: "#ff7a2f", radius: 60, from: 4.6, to: 7.4 },
          { kind: "line", path: [[760, 470], [762, 520], [758, 575]], color: crack, width: 6, from: 7 },
          { kind: "line", path: [[760, 512], [800, 494]], color: crack, width: 6, from: 7.6 },
          { kind: "text", at: [600, 800], text: "啪！裂开了", size: "l", from: 7.2 }
        ]
      },
      {
        turn: 2, title: "裂纹变成「卜」", duration: 11,
        cues: [
          { kind: "line", path: [[330, 230], [336, 450], [326, 670]], color: crack, width: 16, draw: 1, from: 0.4 },
          { kind: "line", path: [[332, 420], [470, 350]], color: crack, width: 16, from: 1.3 },
          { kind: "text", at: [330, 780], text: "龟甲上的裂纹", size: "s", from: 1.6 },
          { kind: "arrow", path: [[520, 450], [660, 450]], from: 2.6 },
          { kind: "evolve", at: [880, 400], size: 300, every: 1.8, from: 3, forms: [{ script: "oracle", char: "卜" }, { script: "seal", char: "卜" }, { script: "kai", char: "卜" }] },
          { kind: "text", at: [600, 110], text: "裂纹叫「兆」：好兆头", from: 8.6 }
        ]
      },
      {
        turn: 3, title: "把问题刻在旁边", view: "shell", duration: 12,
        cues: [
          { kind: "line", path: [[440, 230], [444, 330], [438, 430]], color: crack, width: 7, from: 0.3 },
          { kind: "line", path: [[442, 320], [490, 296]], color: crack, width: 7, from: 0.8 },
          { kind: "sprite", icon: "🔪", path: [[760, 180], [690, 250], [690, 560]], size: 70, travel: 3.2, from: 1, to: 4.6 },
          { kind: "glyph", char: "今", script: "oracle", at: [620, 240], size: 130, from: 1.6 },
          { kind: "glyph", char: "日", script: "oracle", at: [620, 380], size: 130, from: 2.6 },
          { kind: "glyph", char: "雨", script: "oracle", at: [620, 520], size: 130, from: 3.6 },
          { kind: "label", at: [690, 380], text: "今天会下雨吗？", side: "right", from: 5 },
          { kind: "text", at: [600, 820], text: "刀刻圆圈难，笔画直又尖", from: 7.6 }
        ]
      },
      {
        turn: 4, title: "「龙骨」原来是甲骨", duration: 12,
        cues: [
          { kind: "text", at: [600, 100], text: "1899 年", size: "l", from: 0.3 },
          { kind: "sprite", icon: "🦴", path: [[400, 400]], size: 170, from: 0.6 },
          { kind: "label", at: [400, 400], text: "药铺里的「龙骨」", side: "bottom", from: 1.4 },
          { kind: "sprite", icon: "🔍", path: [[760, 260], [450, 380]], size: 110, travel: 2, from: 2.6 },
          { kind: "myth", wrong: "龙骨是龙的骨头", right: "是刻了字的龟甲和牛骨", from: 4.4, to: 8.4 },
          { kind: "count", at: [880, 460], label: "找到的甲骨", start: 0, end: 150000, unit: "片", from: 8.4, over: 2.5 }
        ]
      },
      {
        turn: 5, title: "还有好多谜", duration: 12,
        cues: [
          { kind: "count", at: [330, 240], label: "甲骨上的字", start: 0, end: 4500, unit: "个左右", from: 0.4 },
          { kind: "count", at: [870, 240], label: "认出来的", start: 0, end: 1500, unit: "个左右", from: 2.6 },
          { kind: "meter", at: [600, 470], label: "认出来的", start: 0, end: 0.33, color: "#6fd39a", from: 4.6 },
          { kind: "sprite", icon: "❓", path: [[960, 600]], size: 90, wobble: true, from: 5.4 },
          { kind: "sprite", icon: "🏆", path: [[240, 620]], size: 100, from: 7 },
          { kind: "text", at: [600, 780], text: "认出一个字，奖励十万元！", from: 7.2 }
        ]
      }
    ]
  },
  {
    question: "cangjie",
    scenes: [
      {
        turn: 0, title: "四只眼睛的仓颉", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "传说：仓颉造字", from: 0.3 },
          { kind: "sprite", icon: "👀", path: [[560, 300]], size: 120, from: 1, to: 5.5 },
          { kind: "sprite", icon: "👀", path: [[560, 410]], size: 120, from: 1.4, to: 5.5 },
          { kind: "label", at: [630, 355], text: "传说他有四只眼睛", side: "right", from: 2, to: 5.5 },
          { kind: "sprite", icon: "🐦", path: [[160, 560], [440, 560]], size: 100, travel: 2, from: 5.5 },
          { kind: "flow", icon: "🐾", path: [[160, 690], [700, 690]], count: 5, from: 6 },
          { kind: "glyph", char: "鳥", script: "oracle", at: [900, 420], size: 260, caption: "照着样子画", from: 8.5 }
        ]
      },
      {
        turn: 1, title: "天雨粟，鬼夜哭", duration: 12,
        cues: [
          { kind: "myth", wrong: "仓颉真有四只眼睛", right: "这是传说，用来夸他", from: 0.3, to: 4.5 },
          { kind: "text", at: [600, 110], text: "传说：天雨粟，鬼夜哭", from: 4.5 },
          { kind: "flow", icon: "🌾", path: [[300, 190], [300, 640]], count: 4, from: 4.8 },
          { kind: "flow", icon: "🌾", path: [[520, 190], [520, 640]], count: 4, from: 5.1 },
          { kind: "sprite", icon: "👻", path: [[880, 400]], size: 150, wobble: true, from: 6.6 },
          { kind: "label", at: [880, 420], text: "鬼在夜里哭", side: "bottom", from: 7.2 },
          { kind: "text", at: [600, 800], text: "文字太了不起了！", from: 9 }
        ]
      },
      {
        turn: 2, title: "荀子怎么说", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "仓颉独传者，壹也", from: 0.3 },
          { kind: "sprite", icon: "🧑", path: [[240, 400]], size: 110, from: 1, to: 5.5 },
          { kind: "sprite", icon: "👩", path: [[440, 400]], size: 110, from: 1.3, to: 5.5 },
          { kind: "sprite", icon: "🧔", path: [[640, 400]], size: 110, from: 1.6, to: 5.5 },
          { kind: "sprite", icon: "👵", path: [[840, 400]], size: 110, from: 1.9, to: 5.5 },
          { kind: "text", at: [600, 620], text: "喜欢写字的人很多", from: 2.4, to: 5.5 },
          { kind: "glyph", char: "倉", script: "seal", at: [470, 420], size: 240, caption: "小篆的仓", from: 5.6 },
          { kind: "glyph", char: "頡", script: "seal", at: [730, 420], size: 240, caption: "小篆的颉", from: 5.9 },
          { kind: "sprite", icon: "📚", path: [[1020, 640]], size: 110, from: 9.2 },
          { kind: "label", at: [1020, 600], text: "帮大家整理字", side: "top", from: 9.6 }
        ]
      },
      {
        turn: 3, title: "仓颉不止一个", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "鲁迅：仓颉也不止一个", from: 0.3 },
          { kind: "sprite", icon: "🧑", path: [[300, 290]], size: 100, from: 2, to: 8.5 },
          { kind: "glyph", char: "日", script: "oracle", at: [300, 500], size: 190, from: 2.6 },
          { kind: "sprite", icon: "👩", path: [[600, 290]], size: 100, from: 3.6, to: 8.5 },
          { kind: "glyph", char: "魚", script: "oracle", at: [600, 500], size: 190, from: 4.2 },
          { kind: "sprite", icon: "🧒", path: [[900, 290]], size: 100, from: 5.2, to: 8.5 },
          { kind: "glyph", char: "馬", script: "oracle", at: [900, 500], size: 190, from: 5.8 },
          { kind: "text", at: [600, 800], text: "很多人 · 很长时间", from: 8.6 }
        ]
      },
      {
        turn: 4, title: "更早的刻画记号", duration: 12,
        cues: [
          { kind: "glyph", char: "雨", script: "oracle", at: [880, 380], size: 240, caption: "甲骨文：很成熟", from: 0.4 },
          { kind: "arrow", path: [[730, 380], [520, 380]], text: "更早", from: 2.8, to: 7 },
          { kind: "sprite", icon: "🏺", path: [[330, 420]], size: 220, from: 3.4 },
          { kind: "line", path: [[290, 380], [290, 450], [330, 415], [370, 450], [370, 380]], color: crack, width: 7, draw: 1, from: 4.6 },
          { kind: "label", at: [330, 500], text: "陶器上刻的记号", side: "bottom", from: 5.5 },
          { kind: "sprite", icon: "❓", path: [[620, 600]], size: 90, wobble: true, from: 8 },
          { kind: "text", at: [600, 800], text: "算不算文字？还在争论", from: 8.4 }
        ]
      },
      {
        turn: 5, title: "记号还是文字", duration: 11,
        cues: [
          { kind: "sprite", icon: "😊", path: [[300, 380]], size: 160, from: 0.4 },
          { kind: "label", at: [300, 440], text: "一个记号", side: "bottom", from: 1, to: 6 },
          { kind: "glyph", char: "今", script: "oracle", at: [820, 220], size: 130, from: 3 },
          { kind: "glyph", char: "日", script: "oracle", at: [820, 360], size: 130, from: 3.6 },
          { kind: "glyph", char: "雨", script: "oracle", at: [820, 500], size: 130, from: 4.2 },
          { kind: "label", at: [870, 360], text: "能读成一句话", side: "right", from: 5.2 },
          { kind: "text", at: [600, 800], text: "文字：能把话记下来", from: 7 }
        ]
      }
    ]
  },
  {
    question: "oldest-writing",
    scenes: [
      {
        turn: 0, title: "谁是最老的文字", duration: 12,
        cues: [
          { kind: "glyph", char: "龜", script: "oracle", at: [900, 400], size: 240, caption: "商朝的甲骨文", from: 0.4 },
          { kind: "sprite", icon: "🧱", path: [[300, 400]], size: 160, from: 2.4 },
          { kind: "label", at: [300, 470], text: "两河流域：楔形文字", side: "bottom", from: 2.8 },
          { kind: "sprite", icon: "🏜️", path: [[600, 400]], size: 160, from: 4.6 },
          { kind: "label", at: [600, 470], text: "古埃及：圣书字", side: "bottom", from: 5 },
          { kind: "text", at: [600, 800], text: "五千多年前就有了", from: 8 }
        ]
      },
      {
        turn: 1, title: "泥板和小画", duration: 13,
        cues: [
          { kind: "shape", shape: "rect", at: [330, 430], size: [300, 380], color: "#c99a6b", from: 0.4, to: 7 },
          { kind: "line", path: [[260, 330], [330, 330]], color: "#5a3b22", width: 14, draw: 0.3, from: 2, to: 7 },
          { kind: "line", path: [[300, 400], [300, 480]], color: "#5a3b22", width: 14, draw: 0.3, from: 2.4, to: 7 },
          { kind: "line", path: [[350, 400], [400, 450]], color: "#5a3b22", width: 14, draw: 0.3, from: 2.8, to: 7 },
          { kind: "label", at: [400, 430], text: "泥板上的小钉子", side: "right", from: 3.4, to: 7 },
          { kind: "shape", shape: "rect", at: [870, 430], size: [280, 420], color: "#e6c88a", from: 6.5 },
          { kind: "sprite", icon: "🦅", path: [[870, 300]], size: 90, from: 7.2 },
          { kind: "sprite", icon: "👁️", path: [[870, 430]], size: 90, from: 7.8 },
          { kind: "sprite", icon: "🐍", path: [[870, 560]], size: 90, from: 8.4 },
          { kind: "text", at: [600, 800], text: "圣书字：一幅幅小画", from: 9 }
        ]
      },
      {
        turn: 2, title: "都从画画开始", duration: 12,
        cues: [
          { kind: "sprite", icon: "🐦", path: [[300, 280]], size: 130, from: 0.5 },
          { kind: "glyph", char: "鳥", script: "oracle", at: [700, 280], size: 220, caption: "甲骨文的鸟", from: 2.5 },
          { kind: "sprite", icon: "👁️", path: [[300, 580]], size: 130, from: 5 },
          { kind: "glyph", char: "目", script: "oracle", at: [700, 580], size: 220, caption: "甲骨文的目", from: 6 },
          { kind: "text", at: [600, 820], text: "都从画画开始", from: 8.5 }
        ]
      },
      {
        turn: 3, title: "睡着的古文字", duration: 12,
        cues: [
          { kind: "sprite", icon: "🧱", path: [[330, 400]], size: 160, from: 0.3 },
          { kind: "sprite", icon: "🏜️", path: [[600, 400]], size: 160, from: 0.6 },
          { kind: "text", at: [600, 110], text: "没人用，也没人会读", from: 2, to: 8 },
          { kind: "sprite", icon: "💤", path: [[470, 270]], size: 90, wobble: true, from: 2.5 },
          { kind: "text", at: [600, 800], text: "睡了一千多年", from: 4.5, to: 8 },
          { kind: "sprite", icon: "🪨", path: [[900, 400]], size: 150, from: 8 },
          { kind: "label", at: [900, 460], text: "刻着三种文字", side: "bottom", from: 8.6 },
          { kind: "text", at: [600, 800], text: "两百年前重新读懂", from: 9 }
        ]
      },
      {
        turn: 4, title: "汉字一直醒着", duration: 13,
        cues: [
          { kind: "sprite", icon: "🦴", path: [[200, 640]], size: 110, from: 0.3, to: 4.4 },
          { kind: "text", at: [600, 110], text: "汉字一天也没睡过", from: 1.5 },
          { kind: "flow", icon: "🏃", path: [[150, 790], [1050, 790]], count: 4, from: 2.5, to: 9 },
          { kind: "evolve", at: [600, 400], size: 300, every: 1.8, from: 4.5, forms: [{ icon: "☀️" }, { script: "oracle", char: "日" }, { script: "seal", char: "日" }, { script: "kai", char: "日" }] },
          { kind: "text", at: [600, 800], text: "三千多年前的太阳", from: 10.5 }
        ]
      },
      {
        turn: 5, title: "最早？还是一直在用？", duration: 12,
        cues: [
          { kind: "line", path: [[1050, 200], [1050, 580]], color: "#d9453a", width: 5, from: 0.3 },
          { kind: "label", at: [1050, 200], text: "今天", side: "top", from: 0.5 },
          { kind: "shape", shape: "pill", at: [455, 260], size: [543, 70], color: "#c99a6b", text: "楔形文字", from: 1 },
          { kind: "shape", shape: "pill", at: [481, 380], size: [596, 70], color: "#e6c88a", text: "圣书字", from: 2 },
          { kind: "shape", shape: "pill", at: [774, 500], size: [552, 70], color: "#ff9f43", text: "汉字", motion: "pulse", from: 3.5 },
          { kind: "myth", wrong: "汉字是最古老的文字", right: "汉字是唯一一直用到今天的古老文字", from: 6 },
          { kind: "sprite", icon: "❓", path: [[430, 500]], size: 70, wobble: true, from: 9.5 }
        ]
      }
    ]
  },
  {
    question: "oracle-say",
    scenes: [
      {
        turn: 0, title: "商王的问题", view: "shell", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "商王问神和祖先", from: 0.3, to: 5.5 },
          { kind: "glyph", char: "王", script: "oracle", at: [600, 400], size: 260, caption: "王", from: 0.8 },
          { kind: "sprite", icon: "🌧️", path: [[170, 260]], size: 100, from: 2.4 },
          { kind: "sprite", icon: "🦌", path: [[1030, 260]], size: 100, from: 3.2 },
          { kind: "sprite", icon: "⚔️", path: [[170, 600]], size: 100, from: 4 },
          { kind: "sprite", icon: "🤒", path: [[1030, 600]], size: 100, from: 4.8 },
          { kind: "text", at: [600, 800], text: "刻下来：卜辞", from: 7 }
        ]
      },
      {
        turn: 1, title: "雨从哪边来", view: "shell", duration: 13,
        cues: [
          { kind: "text", at: [600, 800], text: "癸卯日：今天会下雨", from: 0.3, to: 3.2 },
          { kind: "glyph", char: "雨", script: "oracle", at: [600, 430], size: 240, from: 0.6 },
          { kind: "arrow", path: [[330, 430], [460, 430]], text: "西边？", from: 3.4 },
          { kind: "arrow", path: [[870, 430], [740, 430]], text: "东边？", from: 4.8 },
          { kind: "arrow", path: [[600, 140], [600, 290]], text: "北边？", from: 6.2 },
          { kind: "arrow", path: [[600, 760], [600, 580]], text: "南边？", from: 7.6 },
          { kind: "pulse", at: [600, 430], color: "#ff7a2f", radius: 160, from: 9.2 }
        ]
      },
      {
        turn: 2, title: "借来的方向字", duration: 14,
        cues: [
          { kind: "text", at: [600, 110], text: "方向画不出来", from: 0.3, to: 3.6 },
          { kind: "glyph", char: "北", script: "oracle", at: [600, 290], size: 170, from: 0.8 },
          { kind: "glyph", char: "西", script: "oracle", at: [330, 470], size: 170, from: 1.2 },
          { kind: "glyph", char: "東", script: "oracle", at: [870, 470], size: 170, from: 1.6 },
          { kind: "glyph", char: "南", script: "oracle", at: [600, 650], size: 170, from: 2 },
          { kind: "text", at: [600, 820], text: "借读音差不多的字", from: 3.8 },
          { kind: "label", at: [660, 290], text: "两个人背靠背", side: "right", from: 4.4, to: 6.8 },
          { kind: "label", at: [330, 470], text: "像一个鸟窝", side: "bottom", from: 6.8, to: 9.2 },
          { kind: "label", at: [870, 470], text: "像捆起来的口袋", side: "bottom", from: 9.2, to: 11.6 },
          { kind: "label", at: [660, 650], text: "像什么？还在争论", side: "right", from: 11.6 }
        ]
      },
      {
        turn: 3, title: "武丁牙疼", view: "shell", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "商王武丁常常牙疼", from: 0.3, to: 8.4 },
          { kind: "sprite", icon: "👑", path: [[160, 300]], size: 100, from: 0.6 },
          { kind: "sprite", icon: "😣", path: [[1040, 300]], size: 110, wobble: true, from: 1.4, to: 8.4 },
          { kind: "glyph", char: "疾", script: "oracle", at: [480, 430], size: 220, caption: "生病", from: 3 },
          { kind: "glyph", char: "齒", script: "oracle", at: [720, 430], size: 220, caption: "牙齿", from: 3.8 },
          { kind: "text", at: [600, 800], text: "疾齿：牙生病了", from: 5.5 },
          { kind: "sprite", icon: "👴", path: [[1040, 300]], size: 110, from: 8.6 },
          { kind: "label", at: [1040, 300], text: "去世的父亲？", side: "bottom", from: 9 }
        ]
      },
      {
        turn: 4, title: "「齿」里加条虫", duration: 12,
        cues: [
          { kind: "sprite", icon: "🦷", path: [[220, 650]], size: 110, from: 0.3 },
          { kind: "glyph", char: "齒", script: "oracle", at: [520, 400], size: 260, from: 0.5, to: 6.4 },
          { kind: "label", at: [560, 360], text: "张开的嘴和牙", pos: [880, 240], from: 1.5, to: 3.6 },
          { kind: "glyph", char: "虫", script: "oracle", at: [1000, 420], size: 120, path: [[540, 410]], travel: 1.6, from: 3.6, to: 6.4 },
          { kind: "glyph", char: "齲", script: "oracle", at: [600, 400], size: 300, caption: "后来的龋", from: 6.5 },
          { kind: "text", at: [600, 800], text: "龋齿就是蛀牙", from: 8.5 }
        ]
      },
      {
        turn: 5, title: "没有虫，是细菌", duration: 13,
        cues: [
          { kind: "sprite", icon: "🍬", path: [[280, 360]], size: 120, from: 0.4, to: 9.5 },
          { kind: "arrow", path: [[380, 360], [500, 360]], from: 1.2, to: 9.5 },
          { kind: "sprite", icon: "🦠", path: [[600, 360]], size: 120, wobble: true, from: 1.8, to: 9.5 },
          { kind: "arrow", path: [[700, 360], [820, 360]], from: 2.6, to: 9.5 },
          { kind: "sprite", icon: "🦷", path: [[920, 360]], size: 120, from: 3.2, to: 9.5 },
          { kind: "myth", wrong: "牙里住着小虫子", right: "细菌把牙弄坏了", from: 4.5, to: 9.5 },
          { kind: "glyph", char: "齲", script: "oracle", at: [600, 420], size: 260, from: 9.6 },
          { kind: "text", at: [600, 110], text: "猜错的想法藏在字里", from: 10 }
        ]
      },
      {
        turn: 6, title: "当一回商王", view: "shell", duration: 9,
        cues: [
          { kind: "glyph", char: "雨", script: "oracle", at: [600, 400], size: 240, from: 0.4 },
          { kind: "sprite", icon: "❓", path: [[770, 260]], size: 90, wobble: true, from: 1.2 },
          { kind: "sprite", icon: "✏️", path: [[1030, 600]], size: 100, from: 2.5 },
          { kind: "text", at: [600, 800], text: "想一个明天的问题", from: 3 }
        ]
      }
    ]
  },
  {
    question: "kanji-abroad",
    scenes: [
      {
        turn: 0, title: "汉字去了日本", duration: 12,
        cues: [
          { kind: "sprite", icon: "🍘", path: [[260, 420]], size: 180, from: 0.4, to: 5.5 },
          { kind: "glyph", char: "抹", script: "song", at: [620, 420], size: 180, from: 1.2, to: 5.5 },
          { kind: "glyph", char: "茶", script: "song", at: [840, 420], size: 180, from: 1.6, to: 5.5 },
          { kind: "text", at: [600, 110], text: "一千多年前传到日本", from: 3 },
          { kind: "count", at: [600, 450], label: "常用汉字表", start: 0, end: 2136, unit: "个字", from: 6.2 },
          { kind: "sprite", icon: "🎒", path: [[950, 680]], size: 100, from: 9 }
        ]
      },
      {
        turn: 1, title: "假名从汉字来", duration: 14,
        cues: [
          { kind: "text", at: [600, 110], text: "假名：像字母的符号", from: 0.3, to: 4.6 },
          { kind: "glyph", char: "安", script: "kai", at: [340, 360], size: 220, from: 1 },
          { kind: "arrow", path: [[340, 490], [340, 570]], text: "草书", from: 2.6 },
          { kind: "glyph", char: "あ", script: "song", at: [340, 680], size: 170, caption: "安的草书变的", from: 3.2 },
          { kind: "glyph", char: "加", script: "kai", at: [860, 360], size: 220, from: 5 },
          { kind: "highlight", at: [805, 360], size: [120, 210], color: "#ff9f43", from: 6.5, to: 8.4 },
          { kind: "arrow", path: [[860, 490], [860, 570]], text: "取左边", from: 8 },
          { kind: "glyph", char: "カ", script: "song", at: [860, 680], size: 170, caption: "取了左边的力", from: 8.6 }
        ]
      },
      {
        turn: 2, title: "汉字加假名", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "日本话和中国话不一样", from: 0.3, to: 5 },
          { kind: "sprite", icon: "🗣️", path: [[600, 420]], size: 150, from: 0.8, to: 5 },
          { kind: "glyph", char: "食", script: "song", at: [380, 430], size: 200, from: 5.2 },
          { kind: "glyph", char: "べ", script: "song", at: [600, 430], size: 200, color: "#b48cff", from: 5.8 },
          { kind: "glyph", char: "る", script: "song", at: [820, 430], size: 200, color: "#b48cff", from: 6.2 },
          { kind: "label", at: [380, 430], text: "汉字", side: "bottom", from: 7 },
          { kind: "label", at: [710, 430], text: "假名", side: "bottom", from: 7.6 },
          { kind: "text", at: [600, 800], text: "汉字和假名混着写", from: 9 }
        ]
      },
      {
        turn: 3, title: "汉字文化圈", duration: 13,
        cues: [
          { kind: "text", at: [600, 110], text: "汉字文化圈", from: 0.3 },
          { kind: "glyph", char: "汉", script: "kai", at: [500, 330], size: 170, from: 0.6, to: 7 },
          { kind: "glyph", char: "字", script: "kai", at: [700, 330], size: 170, from: 0.9, to: 7 },
          { kind: "shape", shape: "pill", at: [260, 560], size: [240, 80], color: "#ffc75a", text: "朝鲜半岛", from: 1.8, to: 7 },
          { kind: "shape", shape: "pill", at: [600, 640], size: [200, 80], color: "#6fd39a", text: "越南", from: 2.4, to: 7 },
          { kind: "shape", shape: "pill", at: [940, 560], size: [200, 80], color: "#ff9f43", text: "日本", from: 3, to: 7 },
          { kind: "count", at: [330, 460], label: "韩国中学学", start: 0, end: 1800, unit: "个汉字", from: 7.2 },
          { kind: "sprite", icon: "🔤", path: [[870, 420]], size: 140, from: 9.5 },
          { kind: "label", at: [870, 420], text: "越南：拉丁字母", side: "bottom", from: 10 }
        ]
      },
      {
        turn: 4, title: "用笔来聊天", duration: 13,
        cues: [
          { kind: "sprite", icon: "🧑", path: [[200, 420]], size: 150, from: 0.3 },
          { kind: "sprite", icon: "🧔", path: [[1000, 420]], size: 150, from: 0.6 },
          { kind: "sprite", icon: "❓", path: [[600, 300]], size: 110, wobble: true, from: 1.5, to: 5 },
          { kind: "text", at: [600, 110], text: "说的话不一样", from: 1.5, to: 5 },
          { kind: "glyph", char: "茶", script: "kai", at: [600, 430], size: 240, from: 5.2 },
          { kind: "label", at: [600, 330], text: "读音不同，意思一样", pos: [600, 200], from: 6.2 },
          { kind: "sprite", icon: "🖌️", path: [[380, 640], [820, 640]], size: 80, travel: 2, from: 7.5 },
          { kind: "text", at: [600, 800], text: "笔谈：写字来聊天", from: 9 }
        ]
      },
      {
        turn: 5, title: "写法一样意思不同", duration: 12,
        cues: [
          { kind: "glyph", char: "手", script: "song", at: [500, 330], size: 200, from: 0.4 },
          { kind: "glyph", char: "紙", script: "song", at: [720, 330], size: 200, from: 0.8 },
          { kind: "label", at: [610, 250], text: "日本人写的手纸", side: "top", from: 1.6 },
          { kind: "sprite", icon: "🧻", path: [[300, 560]], size: 120, from: 3 },
          { kind: "sprite", icon: "✉️", path: [[920, 560]], size: 120, from: 4.5 },
          { kind: "myth", wrong: "日本的手纸是卫生纸", right: "日本的手纸是一封信", from: 5.5 }
        ]
      }
    ]
  },
  {
    question: "decode-oracle",
    scenes: [
      {
        turn: 0, title: "倒着往回比长相", duration: 12,
        cues: [
          { kind: "text", at: [600, 100], text: "第一步：倒着往回找", from: 0.3 },
          { kind: "glyph", char: "车", script: "kai", at: [940, 390], size: 200, caption: "今天的车", from: 0.6 },
          { kind: "arrow", path: [[820, 390], [700, 390]], from: 1.6, to: 7 },
          { kind: "glyph", char: "車", script: "seal", at: [580, 390], size: 210, caption: "秦朝小篆", from: 2.2 },
          { kind: "arrow", path: [[460, 390], [340, 390]], from: 3.4, to: 7 },
          { kind: "glyph", char: "車", script: "oracle", at: [220, 390], size: 220, caption: "商朝甲骨文", from: 4 },
          { kind: "sprite", icon: "🔍", path: [[660, 600], [330, 320]], size: 100, travel: 1.8, from: 7.2 },
          { kind: "text", at: [600, 800], text: "1904 年 · 孙诒让", from: 8.6 }
        ]
      },
      {
        turn: 1, title: "放进占卜句子里", view: "shell", duration: 12,
        cues: [
          { kind: "sprite", icon: "⛏️", path: [[170, 340]], size: 100, from: 0.3, to: 4.6 },
          { kind: "text", at: [600, 110], text: "河南安阳 · 殷墟", from: 0.5, to: 4.6 },
          { kind: "glyph", char: "王", script: "oracle", at: [560, 250], size: 140, from: 1.4 },
          { kind: "glyph", char: "卜", script: "oracle", at: [560, 420], size: 140, from: 2.2 },
          { kind: "glyph", char: "馬", script: "oracle", at: [560, 590], size: 140, from: 3 },
          { kind: "highlight", at: [560, 420], size: [180, 500], color: "#ff9f43", from: 4.8, to: 8.6 },
          { kind: "label", at: [640, 420], text: "放进整句话里核对", side: "right", from: 5.2, to: 8.6 },
          { kind: "text", at: [600, 810], text: "罗振玉：读通了占卜句子", from: 8.8 }
        ]
      },
      {
        turn: 2, title: "拼起碎骨对《史记》", duration: 13,
        cues: [
          { kind: "shape", shape: "rect", at: [420, 425], size: [230, 400], color: "none", outline: true, from: 2.4 },
          { kind: "glyph", char: "王", script: "oracle", at: [240, 240], size: 160, path: [[420, 320]], travel: 1.8, from: 0.4 },
          { kind: "glyph", char: "亥", script: "oracle", at: [240, 630], size: 160, path: [[420, 530]], travel: 1.8, from: 0.6 },
          { kind: "line", path: [[305, 425], [420, 412], [535, 428]], color: crack, width: 5, draw: 0.5, from: 2.4 },
          { kind: "label", at: [535, 425], text: "缀合：碎骨拼回一块", side: "right", from: 2.8, to: 6.4 },
          { kind: "arrow", path: [[560, 425], [750, 425]], text: "名字对上了", from: 6.6, to: 9.2 },
          { kind: "glyph", char: "史", script: "seal", at: [890, 425], size: 220, caption: "《史记》排班表", from: 6.8 },
          { kind: "text", at: [600, 110], text: "1917 年：王国维缀合", from: 9.2 }
        ]
      },
      {
        turn: 3, title: "为什么不能看图乱猜", duration: 12,
        cues: [
          { kind: "count", at: [360, 340], label: "找到的甲骨", start: 0, end: 150000, unit: "片", from: 0.4, to: 5.4 },
          { kind: "sprite", icon: "❓", path: [[820, 340]], size: 130, wobble: true, from: 1.6, to: 5.4 },
          { kind: "label", at: [820, 420], text: "消失的人名和地名", side: "bottom", from: 2.2, to: 5.4 },
          { kind: "glyph", char: "上", script: "oracle", at: [360, 340], size: 180, from: 5.6 },
          { kind: "glyph", char: "甲", script: "oracle", at: [600, 340], size: 180, from: 6 },
          { kind: "sprite", icon: "🔍", path: [[840, 340]], size: 120, from: 6.4 },
          { kind: "myth", wrong: "认甲骨文靠看图猜一猜就行", right: "字形、句子和古书全对上才算数", from: 6.8 },
          { kind: "text", at: [600, 110], text: "线索太少，不能硬猜", from: 7.4 }
        ]
      },
      {
        turn: 4, title: "电脑帮着拼甲骨", view: "shell", duration: 12,
        cues: [
          { kind: "sprite", icon: "💻", path: [[170, 440]], size: 120, from: 0.4 },
          { kind: "glyph", char: "馬", script: "oracle", at: [480, 330], size: 170, from: 1 },
          { kind: "glyph", char: "車", script: "oracle", at: [700, 530], size: 170, from: 1.6 },
          { kind: "line", path: [[370, 430], [580, 415], [810, 440]], color: "#ff9f43", width: 6, draw: 1, from: 2.4 },
          { kind: "pulse", at: [580, 415], color: "#ff7a2f", radius: 130, from: 3.6, to: 7.8 },
          { kind: "label", at: [580, 415], text: "比对裂缝和字迹", side: "top", from: 4, to: 7.8 },
          { kind: "sprite", icon: "🧩", path: [[1030, 440]], size: 110, from: 8 },
          { kind: "text", at: [600, 810], text: "电脑帮忙找新线索", from: 8.4 }
        ]
      }
    ]
  }
];
