import type { Film } from "./types";

const red = "#d9453a";
const ink = "#4a3b2a";

export const films: readonly Film[] = [
  {
    question: "ben-mo",
    scenes: [
      {
        turn: 0, title: "一棵树就是「木」", duration: 11,
        cues: [
          { kind: "text", at: [600, 100], text: "「木」是一棵树", from: 0.3 },
          { kind: "evolve", at: [600, 400], size: 300, every: 1.6, from: 0.6, forms: [{ icon: "🌳" }, { script: "oracle", char: "木" }, { script: "seal", char: "木" }, { script: "kai", char: "木" }] },
          { kind: "label", at: [640, 290], text: "上面是树梢", side: "right", from: 6.4 },
          { kind: "label", at: [620, 520], text: "下面是树根", side: "right", from: 7.2 },
          { kind: "text", at: [600, 800], text: "本和末都从「木」来", from: 8.4 }
        ]
      },
      {
        turn: 0, title: "根上一横，梢上一横", duration: 13,
        cues: [
          { kind: "glyph", char: "木", at: [300, 430], size: 280, from: 0.3 },
          { kind: "line", path: [[240, 520], [360, 520]], color: red, width: 14, draw: 0.6, from: 1.2, to: 6.4 },
          { kind: "label", at: [300, 520], text: "树根", side: "bottom", from: 1.8, to: 6.4 },
          { kind: "arrow", path: [[480, 430], [660, 430]], from: 2.6 },
          { kind: "glyph", char: "本", script: "seal", at: [880, 430], size: 280, caption: "小篆的本", from: 3, to: 6.4 },
          { kind: "line", path: [[200, 312], [400, 312]], color: red, width: 14, draw: 0.6, from: 6.8 },
          { kind: "label", at: [300, 312], text: "树梢", side: "top", from: 7.4 },
          { kind: "glyph", char: "末", script: "seal", at: [880, 430], size: 280, caption: "小篆的末", from: 8.4 },
          { kind: "text", at: [600, 820], text: "一横像手指，指着地方", from: 10 }
        ]
      },
      {
        turn: 1, title: "插一面小旗子", duration: 11,
        cues: [
          { kind: "sprite", icon: "🗺️", path: [[320, 430]], size: 230, from: 0.3 },
          { kind: "sprite", icon: "🚩", path: [[320, 160], [350, 380]], size: 90, travel: 1.2, from: 1.2 },
          { kind: "label", at: [350, 380], text: "就在这儿！", side: "right", from: 2.6 },
          { kind: "glyph", char: "本", script: "seal", at: [860, 400], size: 300, from: 4 },
          { kind: "highlight", at: [860, 470], size: [200, 110], color: red, from: 5.2 },
          { kind: "text", at: [600, 800], text: "加记号的字：指事字", from: 7 }
        ]
      },
      {
        turn: 2, title: "根本、本来；末尾", duration: 12,
        cues: [
          { kind: "glyph", char: "本", at: [300, 330], size: 240, from: 0.4 },
          { kind: "sprite", icon: "🌱", path: [[300, 620]], size: 110, from: 1.2 },
          { kind: "text", at: [300, 760], text: "根本 · 本来", size: "s", from: 2.2 },
          { kind: "glyph", char: "末", at: [900, 330], size: 240, from: 5 },
          { kind: "sprite", icon: "📅", path: [[900, 620]], size: 110, from: 6 },
          { kind: "text", at: [900, 760], text: "末尾 · 周末", size: "s", from: 7 },
          { kind: "text", at: [600, 100], text: "根：最开始 · 梢：最后", from: 9 }
        ]
      },
      {
        turn: 3, title: "刀口一点就是「刃」", duration: 12,
        camera: [{ t: 0, at: [600, 450], zoom: 1 }, { t: 5, at: [600, 450], zoom: 1 }, { t: 6.5, at: [860, 420], zoom: 1.8 }, { t: 9.5, at: [860, 420], zoom: 1.8 }, { t: 11, at: [600, 450], zoom: 1 }],
        cues: [
          { kind: "glyph", char: "刀", script: "oracle", at: [330, 420], size: 300, caption: "甲骨文的刀", from: 0.4 },
          { kind: "arrow", path: [[500, 420], [680, 420]], from: 2.4 },
          { kind: "glyph", char: "刃", script: "oracle", at: [860, 420], size: 300, caption: "甲骨文的刃", from: 3 },
          { kind: "highlight", at: [820, 400], size: [110, 160], color: red, from: 6.6, to: 10 },
          { kind: "label", at: [820, 400], text: "最锋利", side: "left", from: 7, to: 10 },
          { kind: "text", at: [600, 820], text: "刀口点一点 = 刃", from: 10.4 }
        ]
      },
      {
        turn: 4, title: "「末」和「未」别写混", view: "grid", duration: 12,
        cues: [
          { kind: "write", char: "末", at: [600, 345], size: 460, stroke: 0.9, mark: [0], from: 0.4 },
          { kind: "label", at: [600, 200], text: "上面一横伸得远", side: "right", from: 1.6 },
          { kind: "myth", wrong: "末和未一样写", right: "末：上横宽；未：上横短", from: 6 }
        ]
      }
    ]
  },
  {
    question: "up-down",
    scenes: [
      {
        turn: 0, title: "画一个位置", duration: 12,
        cues: [
          { kind: "line", path: [[260, 460], [940, 460]], color: ink, width: 12, draw: 1, from: 0.3 },
          { kind: "label", at: [900, 460], text: "这道线是地面", side: "bottom", from: 1.4 },
          { kind: "line", path: [[540, 340], [660, 340]], color: red, width: 14, draw: 0.5, from: 2.8, to: 6.6 },
          { kind: "text", at: [600, 110], text: "记号在上面：上", from: 3.4, to: 6.6 },
          { kind: "line", path: [[540, 580], [660, 580]], color: red, width: 14, draw: 0.5, from: 6.8 },
          { kind: "text", at: [600, 800], text: "记号在下面：下", from: 7.4 },
          { kind: "text", at: [600, 110], text: "这种字叫指事字", from: 9.6 }
        ]
      },
      {
        turn: 1, title: "甲骨文的上和下", duration: 11,
        cues: [
          { kind: "glyph", char: "上", script: "oracle", at: [330, 400], size: 320, caption: "甲骨文的上", from: 0.4 },
          { kind: "sprite", icon: "🥣", path: [[120, 420]], size: 90, from: 1.8 },
          { kind: "highlight", at: [330, 380], size: [150, 90], color: red, from: 2.6, to: 5.4 },
          { kind: "glyph", char: "下", script: "oracle", at: [870, 400], size: 320, caption: "甲骨文的下", from: 4.6 },
          { kind: "highlight", at: [870, 420], size: [150, 90], color: red, from: 5.8, to: 8.4 },
          { kind: "text", at: [600, 110], text: "短的一笔在哪边，就是哪边", from: 8.4 }
        ]
      },
      {
        turn: 2, title: "小心和「二」看混", duration: 12,
        cues: [
          { kind: "glyph", char: "上", script: "oracle", at: [330, 380], size: 280, caption: "一短一长", from: 0.4, to: 5.8 },
          { kind: "glyph", char: "二", script: "oracle", at: [870, 380], size: 280, caption: "两道一样", from: 1.4, to: 5.8 },
          { kind: "sprite", icon: "🤔", path: [[600, 400]], size: 100, wobble: true, from: 2.6, to: 5.8 },
          { kind: "text", at: [600, 800], text: "刻快了就容易看混", from: 3.4, to: 5.8 },
          { kind: "evolve", at: [600, 400], size: 300, every: 1.8, from: 6, forms: [{ script: "oracle", char: "上" }, { script: "seal", char: "上" }, { script: "kai", char: "上" }] },
          { kind: "label", at: [600, 330], text: "加了一竖", side: "right", from: 8 },
          { kind: "text", at: [600, 110], text: "加一竖，就不会弄混", from: 9 }
        ]
      },
      {
        turn: 3, title: "数着画：一二三", duration: 11,
        cues: [
          { kind: "glyph", char: "一", script: "oracle", at: [280, 400], size: 220, caption: "画一道", from: 0.5 },
          { kind: "glyph", char: "二", script: "oracle", at: [600, 400], size: 220, caption: "画两道", from: 2 },
          { kind: "glyph", char: "三", script: "oracle", at: [920, 400], size: 220, caption: "画三道", from: 3.5 },
          { kind: "sprite", icon: "✋", path: [[600, 680]], size: 100, wobble: true, from: 5 },
          { kind: "text", at: [600, 110], text: "数目画不出，就用记号", from: 6.5 }
        ]
      },
      {
        turn: 4, title: "竖往上伸，竖往下垂", duration: 12,
        cues: [
          { kind: "write", char: "上", at: [330, 440], size: 400, stroke: 0.9, mark: [0], grid: true, from: 0.4 },
          { kind: "write", char: "下", at: [870, 440], size: 400, stroke: 0.9, mark: [1], grid: true, from: 4.4 },
          { kind: "text", at: [600, 100], text: "最长那一横是地面", from: 8.4 },
          { kind: "text", at: [600, 800], text: "上：往上伸 · 下：往下垂", from: 9.4 }
        ]
      }
    ]
  },
  {
    question: "four-lines",
    scenes: [
      {
        turn: 0, title: "四道横线的「四」", duration: 12,
        cues: [
          { kind: "line", path: [[200, 300], [460, 300]], color: ink, width: 14, draw: 0.4, from: 0.4, to: 7.4 },
          { kind: "line", path: [[200, 380], [460, 380]], color: ink, width: 14, draw: 0.4, from: 0.9, to: 7.4 },
          { kind: "line", path: [[200, 460], [460, 460]], color: ink, width: 14, draw: 0.4, from: 1.4, to: 7.4 },
          { kind: "line", path: [[200, 540], [460, 540]], color: ink, width: 14, draw: 0.4, from: 1.9, to: 7.4 },
          { kind: "glyph", char: "四", script: "oracle", at: [860, 420], size: 300, caption: "甲骨文的四", from: 3.4 },
          { kind: "text", at: [600, 110], text: "古人真这么写过！", from: 4.6 },
          { kind: "glyph", char: "四", at: [330, 420], size: 280, caption: "今天的四", from: 8 },
          { kind: "text", at: [600, 800], text: "后来换了样子", from: 8.8 }
        ]
      },
      {
        turn: 1, title: "横线一多就难认", duration: 12,
        cues: [
          { kind: "glyph", char: "三", script: "oracle", at: [330, 400], size: 280, caption: "三道", from: 0.4 },
          { kind: "glyph", char: "四", script: "oracle", at: [870, 400], size: 280, caption: "四道", from: 1.6 },
          { kind: "text", at: [600, 110], text: "一眼看不清有几道", from: 3.4 },
          { kind: "label", at: [870, 400], text: "要一道道数", pos: [610, 270], from: 5 },
          { kind: "sprite", icon: "🤔", path: [[600, 640]], size: 100, wobble: true, from: 6.4 },
          { kind: "text", at: [600, 800], text: "还容易和「三」看混", from: 8 }
        ]
      },
      {
        turn: 2, title: "借来一个字", duration: 12,
        cues: [
          { kind: "sprite", icon: "👄", path: [[300, 420]], size: 150, from: 0.4 },
          { kind: "flow", path: [[390, 400], [560, 340]], icon: "💨", count: 3, speed: 0.6, from: 1.2, to: 6 },
          { kind: "label", at: [300, 420], text: "有学者说：像呼气", side: "bottom", from: 2 },
          { kind: "glyph", char: "四", script: "seal", at: [880, 400], size: 300, caption: "小篆的四", from: 3.6 },
          { kind: "arrow", path: [[480, 640], [740, 640]], text: "借来当「四」", from: 6 },
          { kind: "text", at: [600, 110], text: "读音很像，借来用", from: 7.4 }
        ]
      },
      {
        turn: 3, title: "字也能借：假借", duration: 12,
        cues: [
          { kind: "evolve", at: [340, 400], size: 280, every: 1.8, from: 0.4, forms: [{ icon: "🧺", label: "簸箕" }, { script: "oracle", char: "其" }, { script: "kai", char: "其" }] },
          { kind: "arrow", path: [[540, 400], [720, 400]], text: "借去用", from: 5.4 },
          { kind: "text", at: [930, 400], text: "他的、那个", from: 6.4 },
          { kind: "text", at: [600, 110], text: "读音一样就借来：假借", from: 8 },
          { kind: "text", at: [600, 800], text: "「四」也是借来的", from: 9.6 }
        ]
      },
      {
        turn: 4, title: "先里头，后封口", view: "grid", duration: 12,
        cues: [
          { kind: "write", char: "四", at: [600, 450], size: 640, stroke: 1.1, mark: [4], from: 0.4 },
          { kind: "label", at: [600, 700], text: "最后封口", side: "right", from: 6.4 },
          { kind: "text", at: [600, 830], text: "一共五笔", from: 7.6 }
        ]
      }
    ]
  },
  {
    question: "sweet-mouth",
    scenes: [
      {
        turn: 0, title: "嘴里含着一颗糖", duration: 12,
        cues: [
          { kind: "sprite", icon: "👄", path: [[300, 440]], size: 190, from: 0.3 },
          { kind: "sprite", icon: "🍬", path: [[300, 180], [300, 430]], size: 80, travel: 1.2, from: 1.2 },
          { kind: "label", at: [300, 440], text: "含着好东西", side: "bottom", from: 2.6 },
          { kind: "evolve", at: [820, 400], size: 300, every: 1.8, from: 4, forms: [{ script: "oracle", char: "甘" }, { script: "seal", char: "甘" }, { script: "kai", char: "甘" }] },
          { kind: "text", at: [600, 800], text: "口里含一，就是「甘」", from: 9.6 }
        ]
      },
      {
        turn: 1, title: "只画一横当记号", duration: 12,
        camera: [{ t: 0, at: [600, 450], zoom: 1 }, { t: 5.4, at: [600, 450], zoom: 1 }, { t: 6.8, at: [600, 440], zoom: 1.5 }, { t: 9.4, at: [600, 440], zoom: 1.5 }, { t: 10.6, at: [600, 450], zoom: 1 }],
        cues: [
          { kind: "sprite", icon: "🍬", path: [[300, 420]], size: 110, from: 0.4, to: 5 },
          { kind: "sprite", icon: "🍯", path: [[600, 420]], size: 110, from: 0.9, to: 5 },
          { kind: "sprite", icon: "🍑", path: [[900, 420]], size: 110, from: 1.4, to: 5 },
          { kind: "text", at: [600, 800], text: "画哪一样都说不全", from: 2.4, to: 5 },
          { kind: "glyph", char: "甘", script: "oracle", at: [600, 440], size: 340, from: 5.2 },
          { kind: "highlight", at: [600, 450], size: [170, 110], color: red, from: 6.8, to: 10 },
          { kind: "label", at: [600, 450], text: "记号：好味道", side: "right", from: 7.2, to: 10 },
          { kind: "text", at: [600, 800], text: "加记号的字：指事字", from: 10.4 }
        ]
      },
      {
        turn: 2, title: "甘，美也", duration: 12,
        cues: [
          { kind: "glyph", char: "甘", at: [600, 400], size: 280, from: 0.4, to: 5.6 },
          { kind: "text", at: [600, 110], text: "《说文》：甘，美也", from: 1.4, to: 5.6 },
          { kind: "text", at: [600, 680], text: "甘甜 · 甘蔗", size: "s", from: 3, to: 5.6 },
          { kind: "glyph", char: "甘", at: [330, 400], size: 240, caption: "甜甜的", from: 5.8 },
          { kind: "glyph", char: "苦", at: [870, 400], size: 240, caption: "苦苦的", from: 6.6 },
          { kind: "sprite", icon: "🤝", path: [[600, 400]], size: 110, from: 7.6 },
          { kind: "text", at: [600, 800], text: "同甘共苦", size: "l", from: 8.6 }
        ]
      },
      {
        turn: 3, title: "舌头 + 甘 = 甜", duration: 12,
        cues: [
          { kind: "sprite", icon: "👅", path: [[250, 640]], size: 110, from: 0.3, to: 4.6 },
          { kind: "glyph", char: "舌", at: [250, 420], size: 200, color: "#2f7d32", path: [[490, 420]], travel: 1.5, from: 0.8, to: 4.6 },
          { kind: "glyph", char: "甘", at: [950, 420], size: 200, color: "#2f7d32", path: [[710, 420]], travel: 1.5, from: 1.4, to: 4.6 },
          { kind: "glyph", char: "甜", at: [600, 420], size: 320, motion: "pulse", from: 4.6 },
          { kind: "glyph", char: "甜", script: "seal", at: [980, 420], size: 180, caption: "小篆的甜", from: 6 },
          { kind: "text", at: [600, 800], text: "舌头尝到好味道", from: 8 }
        ]
      },
      {
        turn: 4, title: "嘴里那一横别丢", view: "grid", duration: 12,
        cues: [
          { kind: "write", char: "甘", at: [600, 450], size: 640, stroke: 1, mark: [3], from: 0.4 },
          { kind: "label", at: [620, 475], text: "嘴里的糖", side: "right", from: 4.8 },
          { kind: "text", at: [600, 830], text: "一共五笔", from: 6.6 },
          { kind: "text", at: [600, 100], text: "中间短横是记号", from: 8.4 }
        ]
      }
    ]
  },
  {
    question: "sunrise-dan",
    scenes: [
      {
        turn: 0, title: "太阳升起就是「旦」", duration: 12,
        cues: [
          { kind: "line", path: [[180, 520], [540, 520]], color: ink, width: 12, draw: 0.7, from: 0.3, to: 5.6 },
          { kind: "sprite", icon: "☀️", path: [[360, 620], [360, 390]], size: 150, travel: 1.8, from: 0.8, to: 5.6 },
          { kind: "label", at: [480, 520], text: "一横代表大地", side: "bottom", from: 2.6, to: 5.6 },
          { kind: "evolve", at: [860, 390], size: 280, every: 1.8, from: 3.6, forms: [{ script: "oracle", char: "旦" }, { script: "seal", char: "旦" }, { script: "kai", char: "旦" }] },
          { kind: "glyph", char: "元", script: "oracle", at: [240, 390], size: 180, caption: "元：第一", from: 6 },
          { kind: "glyph", char: "旦", script: "kai", at: [480, 390], size: 180, caption: "旦：早晨", from: 6.6 },
          { kind: "text", at: [600, 800], text: "元旦：一年的第一个早晨", from: 8.4 }
        ]
      },
      {
        turn: 1, title: "甲骨文的「旦」什么样", duration: 12,
        cues: [
          { kind: "glyph", char: "旦", script: "oracle", at: [340, 400], size: 280, caption: "甲骨文的旦", from: 0.4 },
          { kind: "highlight", at: [340, 470], size: [160, 120], color: red, from: 1.6, to: 6.2 },
          { kind: "label", at: [420, 470], text: "大地、云气？还是丁？", side: "right", from: 2.2, to: 6.2 },
          { kind: "text", at: [600, 110], text: "学者们的解释不一样", from: 3.6 },
          { kind: "arrow", path: [[520, 400], [680, 400]], text: "秦朝小篆", from: 6.4 },
          { kind: "glyph", char: "旦", script: "seal", at: [860, 400], size: 280, caption: "统一写成一横", from: 7 },
          { kind: "text", at: [600, 800], text: "小篆写成干净的一横", from: 9 }
        ]
      },
      {
        turn: 2, title: "人站在地上就是「立」", duration: 12,
        cues: [
          { kind: "glyph", char: "大", script: "oracle", at: [260, 390], size: 240, caption: "大：正面的人", from: 0.4 },
          { kind: "line", path: [[160, 500], [360, 500]], color: red, width: 12, draw: 0.6, from: 1.8, to: 5.2 },
          { kind: "glyph", char: "立", script: "oracle", at: [600, 390], size: 250, caption: "甲骨文的立", from: 3.8 },
          { kind: "glyph", char: "立", script: "kai", at: [940, 390], size: 250, caption: "今天的立", from: 6.6 },
          { kind: "highlight", at: [940, 485], size: [220, 70], color: red, from: 7.4 },
          { kind: "text", at: [600, 800], text: "人稳稳站在地面上 = 立", from: 8.6 }
        ]
      },
      {
        turn: 3, title: "一横搬家：立、天、夫", duration: 13,
        cues: [
          { kind: "glyph", char: "立", script: "oracle", at: [260, 410], size: 220, caption: "脚踩地面", from: 0.4, to: 5.4 },
          { kind: "glyph", char: "天", script: "oracle", at: [600, 410], size: 220, caption: "头顶大脑袋", from: 1.4, to: 5.4 },
          { kind: "glyph", char: "夫", script: "oracle", at: [940, 410], size: 220, caption: "成年插发簪", from: 2.4, to: 5.4 },
          { kind: "text", at: [600, 110], text: "甲骨文里的三兄弟", from: 3.2, to: 5.4 },
          { kind: "glyph", char: "立", script: "kai", at: [260, 410], size: 240, caption: "脚下一横", from: 5.6 },
          { kind: "highlight", at: [260, 500], size: [210, 60], color: red, from: 5.8 },
          { kind: "glyph", char: "天", script: "kai", at: [600, 410], size: 240, caption: "头顶一横", from: 7 },
          { kind: "highlight", at: [600, 315], size: [190, 60], color: red, from: 7.2 },
          { kind: "glyph", char: "夫", script: "kai", at: [940, 410], size: 240, caption: "插根发簪", from: 8.4 },
          { kind: "highlight", at: [940, 355], size: [190, 60], color: red, from: 8.6 },
          { kind: "text", at: [600, 800], text: "一横挪位置，变出三个字", from: 9.8 }
        ]
      },
      {
        turn: 4, title: "瘦长「日」和扁宽「曰」", duration: 12,
        cues: [
          { kind: "glyph", char: "口", script: "oracle", at: [340, 460], size: 200, caption: "嘴巴：口", from: 0.4, to: 5.4 },
          { kind: "line", path: [[290, 330], [340, 305], [390, 330]], color: red, width: 10, draw: 0.6, from: 1.2, to: 5.4 },
          { kind: "flow", path: [[340, 300], [340, 180]], icon: "💨", count: 3, from: 1.8, to: 5.4 },
          { kind: "glyph", char: "曰", script: "oracle", at: [800, 420], size: 250, caption: "甲骨文的曰", from: 2.6, to: 5.4 },
          { kind: "glyph", char: "日", script: "kai", at: [360, 380], size: 250, caption: "日：瘦瘦长长", from: 5.6 },
          { kind: "glyph", char: "曰", script: "kai", at: [840, 380], size: 250, caption: "曰：扁扁宽宽", from: 6.2 },
          { kind: "myth", wrong: "「日」和「曰」写得差不多", right: "太阳「日」瘦长，说话「曰」扁宽", from: 7.2 },
          { kind: "text", at: [600, 110], text: "子曰 = 夫子说", from: 7.8 }
        ]
      }
    ]
  },
  {
    question: "inch-pulse",
    scenes: [
      {
        turn: 0, title: "一只手，一个点", duration: 12,
        cues: [
          { kind: "glyph", char: "又", script: "oracle", at: [330, 420], size: 280, caption: "甲骨文的又", from: 0.4 },
          { kind: "label", at: [330, 340], text: "一只手", side: "right", pos: [560, 230], from: 1.4, to: 4 },
          { kind: "arrow", path: [[500, 420], [680, 420]], from: 3 },
          { kind: "glyph", char: "寸", script: "seal", at: [870, 420], size: 300, caption: "小篆的寸", from: 3.6 },
          { kind: "highlight", at: [870, 500], size: [220, 140], color: red, from: 5.4, to: 9 },
          { kind: "label", at: [870, 500], text: "手腕上的一点", side: "bottom", pos: [870, 700], from: 5.8, to: 9 },
          { kind: "text", at: [600, 800], text: "那一点指着手腕", from: 9.4 }
        ]
      },
      {
        turn: 1, title: "摸一摸脉搏", duration: 12,
        cues: [
          { kind: "sprite", icon: "✋", path: [[420, 420]], size: 260, from: 0.3 },
          { kind: "sprite", icon: "👉", path: [[150, 700], [300, 570]], size: 90, travel: 1.4, from: 1.4 },
          { kind: "pulse", at: [420, 560], color: red, radius: 70, from: 3 },
          { kind: "label", at: [420, 560], text: "一下一下在跳", side: "right", from: 3.6 },
          { kind: "sprite", icon: "❤️", path: [[900, 300]], size: 110, wobble: true, from: 5.4 },
          { kind: "text", at: [600, 800], text: "这儿叫「寸口」", size: "l", from: 7.6 }
        ]
      },
      {
        turn: 2, title: "手上点一点", view: "grid", duration: 12,
        cues: [
          { kind: "write", char: "寸", at: [600, 450], size: 640, stroke: 1, mark: [2], from: 0.4 },
          { kind: "label", at: [510, 470], text: "记号：寸口", side: "left", from: 3.8 },
          { kind: "text", at: [600, 100], text: "手 + 一点 = 寸", from: 5.4 },
          { kind: "text", at: [600, 830], text: "和「刃」一样：指事字", from: 7.6 }
        ]
      },
      {
        turn: 3, title: "很短的一小段", duration: 11,
        cues: [
          { kind: "glyph", char: "寸", at: [330, 400], size: 260, caption: "很短很短", from: 0.4 },
          { kind: "text", at: [600, 110], text: "「寸」也表示长短", from: 1.6 },
          { kind: "sprite", icon: "🦶", path: [[870, 380]], size: 130, wobble: true, from: 3.4 },
          { kind: "text", at: [870, 580], text: "寸步难行", from: 4.2 },
          { kind: "text", at: [600, 800], text: "连一小步都难走", from: 6.6 }
        ]
      },
      {
        turn: 4, title: "带「寸」的字", duration: 12,
        cues: [
          { kind: "glyph", char: "射", script: "oracle", at: [300, 380], size: 240, caption: "甲骨文：拉弓", from: 0.4, to: 6.8 },
          { kind: "glyph", char: "射", at: [700, 380], size: 260, from: 2 },
          { kind: "highlight", at: [760, 380], size: [130, 230], color: red, from: 3.2, to: 6.8 },
          { kind: "label", at: [760, 380], text: "拉弓的手", side: "right", from: 3.6, to: 6.8 },
          { kind: "glyph", char: "守", at: [340, 660], size: 150, from: 7 },
          { kind: "glyph", char: "封", at: [600, 660], size: 150, from: 7.4 },
          { kind: "glyph", char: "对", at: [860, 660], size: 150, from: 7.8 },
          { kind: "text", at: [600, 110], text: "这只手在干什么？", from: 9 }
        ]
      },
      {
        turn: 5, title: "两点指着胳肢窝", duration: 13,
        cues: [
          { kind: "glyph", char: "大", script: "oracle", at: [600, 400], size: 320, caption: "大：一个人", from: 0.4, to: 4.2 },
          { kind: "glyph", char: "亦", script: "oracle", at: [600, 400], size: 320, caption: "甲骨文的亦", from: 4.2 },
          { kind: "highlight", at: [510, 420], size: [120, 120], color: red, from: 5.2, to: 8.2 },
          { kind: "highlight", at: [690, 420], size: [120, 120], color: red, from: 5.2, to: 8.2 },
          { kind: "label", at: [690, 420], text: "胳肢窝", side: "right", from: 5.6, to: 8.2 },
          { kind: "text", at: [600, 110], text: "后来借去当「也」", from: 8.6 },
          { kind: "glyph", char: "腋", at: [980, 420], size: 190, caption: "另造：腋", from: 10 }
        ]
      }
    ]
  }
];
