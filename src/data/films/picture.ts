import type { Film } from "./types";

const crack = "#3b2a1a";
const water = "#4fb6ff";
const red = "#d9453a";

export const films: readonly Film[] = [
  {
    question: "sun-square",
    scenes: [
      {
        turn: 0, title: "太阳变成「日」", duration: 10,
        cues: [
          { kind: "sprite", icon: "☀️", path: [[320, 400]], size: 240, from: 0.4 },
          { kind: "arrow", path: [[500, 400], [660, 400]], from: 2.5 },
          { kind: "glyph", char: "日", script: "oracle", at: [860, 400], size: 300, caption: "甲骨文的日", from: 3 },
          { kind: "text", at: [600, 800], text: "象形字：照着样子画", from: 5.5 }
        ]
      },
      {
        turn: 1, title: "刀刻圆圈好难", view: "shell", duration: 12,
        cues: [
          { kind: "sprite", icon: "🔪", path: [[560, 400], [460, 300], [360, 400], [460, 500], [540, 460]], size: 70, travel: 2.5, from: 0.6, to: 3.4 },
          { kind: "line", path: [[550, 400], [530, 335], [465, 305], [395, 330], [365, 405], [395, 475], [470, 500], [520, 470], [575, 430]], color: crack, width: 8, draw: 2.5, from: 0.6 },
          { kind: "label", at: [460, 300], text: "圆圈：刀一滑就歪", side: "top", from: 3.4 },
          { kind: "line", path: [[660, 320], [820, 320], [820, 480], [660, 480], [660, 320]], color: crack, width: 8, draw: 1.5, from: 5.5 },
          { kind: "line", path: [[710, 400], [770, 400]], color: crack, width: 8, draw: 0.4, from: 7.2 },
          { kind: "label", at: [740, 480], text: "直线：好刻", side: "bottom", from: 7.6 },
          { kind: "text", at: [600, 800], text: "圆圈难刻，刻成方框", from: 9 }
        ]
      },
      {
        turn: 2, title: "中间的小记号", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "有一种说法", from: 0.3 },
          { kind: "shape", shape: "rect", at: [260, 400], size: [180, 180], color: "none", outline: true, from: 0.5 },
          { kind: "label", at: [260, 490], text: "空空的框", side: "bottom", from: 1, to: 5 },
          { kind: "glyph", char: "口", script: "oracle", at: [600, 400], size: 220, caption: "嘴巴的口", from: 2.5 },
          { kind: "glyph", char: "日", script: "oracle", at: [940, 400], size: 240, caption: "加了记号：太阳", from: 5 },
          { kind: "highlight", at: [940, 400], size: [100, 90], color: "#ff9f43", from: 6, to: 9 },
          { kind: "pulse", at: [940, 400], color: "#ff7a2f", radius: 140, from: 9 },
          { kind: "text", at: [600, 800], text: "也有人说：满满、亮亮", from: 9.5 }
        ]
      },
      {
        turn: 3, title: "弯线拉直", duration: 11,
        cues: [
          { kind: "evolve", at: [600, 380], size: 300, every: 2.6, from: 0.5, forms: [{ script: "oracle", char: "日" }, { script: "seal", char: "日" }, { script: "kai", char: "日" }] },
          { kind: "text", at: [600, 110], text: "秦朝小篆：圆圆匀匀", from: 2.8, to: 6.5 },
          { kind: "text", at: [600, 110], text: "弯线拉直，圆转变方", from: 6.6 }
        ]
      },
      {
        turn: 4, title: "弯弯的月牙", duration: 13,
        cues: [
          { kind: "evolve", at: [600, 380], size: 280, every: 1.6, from: 0.4, to: 6.5, forms: [{ icon: "🌙" }, { script: "oracle", char: "月" }, { script: "seal", char: "月" }, { script: "kai", char: "月" }] },
          { kind: "sprite", icon: "🌒", path: [[300, 350]], size: 90, from: 6.6, to: 9.6 },
          { kind: "sprite", icon: "🌓", path: [[500, 350]], size: 90, from: 6.9, to: 9.6 },
          { kind: "sprite", icon: "🌔", path: [[700, 350]], size: 90, from: 7.2, to: 9.6 },
          { kind: "sprite", icon: "🌕", path: [[900, 350]], size: 90, from: 7.5, to: 9.6 },
          { kind: "label", at: [900, 400], text: "圆的只有几天", side: "bottom", from: 7.8, to: 9.6 },
          { kind: "glyph", char: "日", script: "oracle", at: [400, 400], size: 240, from: 9.7 },
          { kind: "glyph", char: "月", script: "oracle", at: [800, 400], size: 240, from: 10 },
          { kind: "text", at: [600, 800], text: "一个方框，一个月牙", from: 10.6 }
        ]
      },
      {
        turn: 5, title: "画出来的字", duration: 12,
        cues: [
          { kind: "sprite", icon: "⛰️", path: [[250, 260]], size: 120, from: 0.4, to: 8.4 },
          { kind: "glyph", char: "山", script: "oracle", at: [250, 520], size: 200, from: 1.2 },
          { kind: "sprite", icon: "👁️", path: [[600, 260]], size: 120, from: 3, to: 8.4 },
          { kind: "glyph", char: "目", script: "oracle", at: [600, 520], size: 200, from: 3.8 },
          { kind: "sprite", icon: "🧍", path: [[950, 260]], size: 120, from: 5.6, to: 8.4 },
          { kind: "glyph", char: "人", script: "oracle", at: [950, 520], size: 200, from: 6.4 },
          { kind: "text", at: [600, 800], text: "先想想它像什么", from: 8.5 }
        ]
      },
      {
        turn: 6, title: "写一个「日」", view: "grid", duration: 8,
        cues: [
          { kind: "write", char: "日", at: [600, 450], size: 640, stroke: 1, from: 0.5 },
          { kind: "text", at: [600, 830], text: "最后一横封口", size: "s", from: 5 }
        ]
      }
    ]
  },
  {
    question: "horse-stands",
    scenes: [
      {
        turn: 0, title: "站起来的马", duration: 12,
        cues: [
          { kind: "sprite", icon: "🐎", path: [[280, 420]], size: 220, from: 0.4 },
          { kind: "glyph", char: "馬", script: "oracle", at: [820, 430], size: 340, from: 1.5, to: 8 },
          { kind: "label", at: [800, 300], text: "马头", side: "right", from: 3, to: 8 },
          { kind: "label", at: [700, 450], text: "马腿", side: "left", from: 4.5, to: 8 },
          { kind: "label", at: [820, 590], text: "尾巴", side: "bottom", from: 5.5, to: 8 },
          { kind: "glyph", char: "馬", script: "oracle", at: [820, 430], size: 340, turnTo: -90, over: 1.5, from: 8 },
          { kind: "text", at: [600, 800], text: "转过来：一匹在跑的马", from: 9 }
        ]
      },
      {
        turn: 1, title: "窄窄的竹简", view: "slips", duration: 13,
        cues: [
          { kind: "highlight", at: [663, 450], size: [130, 800], from: 0.5, to: 5 },
          { kind: "label", at: [700, 400], text: "半厘米到一厘米宽", side: "right", from: 1, to: 5 },
          { kind: "arrow", path: [[663, 160], [663, 700]], text: "从上往下", from: 2.5, to: 5 },
          { kind: "glyph", char: "馬", script: "oracle", at: [411, 450], size: 200, rotate: -90, from: 5.2, to: 8.4 },
          { kind: "text", at: [600, 800], text: "太宽了，塞不进去", from: 5.6, to: 8.4 },
          { kind: "glyph", char: "馬", script: "oracle", at: [411, 450], size: 200, rotate: -90, turnTo: 0, over: 1.5, from: 8.5 },
          { kind: "text", at: [600, 800], text: "站起来，正好放下", from: 10 }
        ]
      },
      {
        turn: 2, title: "「册」就是竹简书", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "商朝竹简：还没找到", from: 0.3 },
          { kind: "sprite", icon: "🎋", path: [[300, 400]], size: 160, wobble: true, from: 0.6, to: 3 },
          { kind: "glyph", char: "冊", script: "oracle", at: [650, 400], size: 300, caption: "甲骨文的册", from: 3 },
          { kind: "label", at: [610, 330], text: "竹片", side: "left", from: 5, to: 7.5 },
          { kind: "label", at: [700, 400], text: "绳子", side: "right", from: 6, to: 7.5 },
          { kind: "text", at: [600, 800], text: "那时已经有竹子做的书", from: 7.5 },
          { kind: "sprite", icon: "📜", path: [[1010, 600]], size: 110, from: 9.5 },
          { kind: "label", at: [1010, 560], text: "战国、秦汉的竹简", side: "top", pos: [960, 440], from: 10 }
        ]
      },
      {
        turn: 3, title: "都站起来了", view: "slips", duration: 13,
        cues: [
          { kind: "glyph", char: "虎", script: "oracle", at: [915, 430], size: 170, caption: "虎", from: 0.5 },
          { kind: "glyph", char: "象", script: "oracle", at: [789, 430], size: 170, caption: "象", from: 1.3 },
          { kind: "glyph", char: "犬", script: "oracle", at: [663, 430], size: 170, caption: "狗", from: 2.6 },
          { kind: "glyph", char: "豕", script: "oracle", at: [537, 430], size: 170, caption: "猪", from: 3.4 },
          { kind: "glyph", char: "龜", script: "oracle", at: [411, 430], size: 170, caption: "龟", from: 5.4 },
          { kind: "glyph", char: "魚", script: "oracle", at: [285, 430], size: 170, caption: "鱼", from: 6.4 },
          { kind: "glyph", char: "鹿", script: "oracle", at: [159, 430], size: 170, caption: "鹿", from: 8.4 }
        ]
      },
      {
        turn: 4, title: "马站到了今天", duration: 12,
        cues: [
          { kind: "evolve", at: [600, 380], size: 300, every: 2, from: 0.5, to: 8.4, forms: [{ script: "oracle", char: "馬" }, { script: "seal", char: "馬" }, { script: "song", char: "馬", label: "繁体" }, { script: "kai", char: "马", label: "简体" }] },
          { kind: "highlight", at: [600, 480], size: [220, 80], color: "#ff9f43", from: 4.6, to: 6.4 },
          { kind: "label", at: [700, 480], text: "马腿变的", side: "right", from: 4.8, to: 6.4 },
          { kind: "write", char: "马", at: [600, 420], size: 420, stroke: 0.9, from: 8.6 },
          { kind: "text", at: [600, 800], text: "简体只有三笔", from: 9 }
        ]
      },
      {
        turn: 5, title: "从右往左读", view: "slips", duration: 12,
        cues: [
          { kind: "sprite", icon: "🖌️", path: [[1041, 180], [1041, 640]], size: 70, travel: 2, from: 0.4, to: 3 },
          { kind: "glyph", char: "今", script: "oracle", at: [1041, 260], size: 110, from: 0.6 },
          { kind: "glyph", char: "日", script: "oracle", at: [1041, 400], size: 110, from: 1.1 },
          { kind: "glyph", char: "雨", script: "oracle", at: [1041, 540], size: 110, from: 1.6 },
          { kind: "sprite", icon: "🖌️", path: [[915, 180], [915, 560]], size: 70, travel: 2, from: 3.2, to: 5.8 },
          { kind: "glyph", char: "馬", script: "oracle", at: [915, 300], size: 130, from: 3.5 },
          { kind: "glyph", char: "虎", script: "oracle", at: [915, 470], size: 130, from: 4.3 },
          { kind: "arrow", path: [[1000, 800], [560, 800]], text: "从右往左", from: 6.5 },
          { kind: "text", at: [600, 100], text: "竖着写，从右往左读", from: 8 }
        ]
      },
      {
        turn: 6, title: "转过来猜一猜", duration: 10,
        cues: [
          { kind: "glyph", char: "虎", script: "oracle", at: [380, 400], size: 260, turnTo: -90, over: 1.6, from: 0.5 },
          { kind: "glyph", char: "象", script: "oracle", at: [820, 400], size: 260, turnTo: -90, over: 1.6, from: 2.5 },
          { kind: "text", at: [600, 110], text: "猜猜哪个是哪个", from: 4.5 },
          { kind: "sprite", icon: "🐯", path: [[380, 640]], size: 100, from: 7 },
          { kind: "sprite", icon: "🐘", path: [[820, 640]], size: 100, from: 7.6 }
        ]
      }
    ]
  },
  {
    question: "mountain-water",
    scenes: [
      {
        turn: 0, title: "三座山峰", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "象形字：照着样子画", from: 0.3 },
          { kind: "sprite", icon: "🏔️", path: [[300, 420]], size: 240, from: 2.5 },
          { kind: "arrow", path: [[480, 420], [640, 420]], from: 4 },
          { kind: "glyph", char: "山", script: "oracle", at: [860, 420], size: 300, from: 4.5 },
          { kind: "label", at: [860, 560], text: "下面一横像地面", side: "bottom", from: 7 }
        ]
      },
      {
        turn: 1, title: "流动的水", duration: 12,
        cues: [
          { kind: "flow", path: [[200, 150], [260, 350], [180, 550], [240, 750]], color: water, count: 8, from: 0.4 },
          { kind: "glyph", char: "水", script: "oracle", at: [700, 430], size: 320, from: 2 },
          { kind: "label", at: [720, 430], text: "弯弯的水流", pos: [1000, 260], from: 3.5 },
          { kind: "label", at: [640, 330], text: "溅起的水花", pos: [420, 250], from: 5.5 },
          { kind: "text", at: [600, 800], text: "竖着看：一条小河", from: 8 }
        ]
      },
      {
        turn: 2, title: "往上冒的火苗", duration: 11,
        cues: [
          { kind: "sprite", icon: "🔥", path: [[300, 420]], size: 240, wobble: true, from: 0.4 },
          { kind: "arrow", path: [[480, 420], [640, 420]], from: 2.5 },
          { kind: "glyph", char: "火", script: "oracle", at: [860, 420], size: 300, from: 3 },
          { kind: "label", at: [860, 290], text: "中间高，两边低", side: "top", from: 5.5 },
          { kind: "text", at: [600, 800], text: "火苗尖尖往上冒", from: 7.5 }
        ]
      },
      {
        turn: 3, title: "山和火像双胞胎", duration: 12,
        cues: [
          { kind: "glyph", char: "山", script: "oracle", at: [380, 400], size: 280, from: 0.4 },
          { kind: "glyph", char: "火", script: "oracle", at: [820, 400], size: 280, from: 0.8 },
          { kind: "text", at: [600, 110], text: "好像双胞胎", from: 1.6 },
          { kind: "highlight", at: [380, 525], size: [260, 70], color: "#ff9f43", from: 5 },
          { kind: "label", at: [380, 540], text: "底下平平：山", side: "bottom", from: 5.4 },
          { kind: "highlight", at: [820, 520], size: [220, 80], color: "#ff9f43", from: 7.5 },
          { kind: "label", at: [820, 540], text: "底下圆圆：火", side: "bottom", from: 7.9 }
        ]
      },
      {
        turn: 4, title: "住进别的字里", duration: 13,
        cues: [
          { kind: "glyph", char: "水", script: "oracle", at: [220, 260], size: 200, from: 0.3 },
          { kind: "write", char: "江", at: [600, 260], size: 300, stroke: 0.6, mark: [0, 1, 2], color: water, from: 1.2 },
          { kind: "label", at: [500, 260], text: "三点水", pos: [920, 200], from: 5.2 },
          { kind: "glyph", char: "火", script: "oracle", at: [220, 640], size: 200, from: 6.5 },
          { kind: "write", char: "热", at: [600, 640], size: 300, stroke: 0.5, mark: [6, 7, 8, 9], color: red, from: 7.4 },
          { kind: "label", at: [600, 750], text: "四点底", pos: [920, 720], from: 11.8 }
        ]
      },
      {
        turn: 5, title: "看零件猜意思", duration: 13,
        cues: [
          { kind: "text", at: [600, 110], text: "看零件，猜意思", from: 0.3, to: 8 },
          { kind: "glyph", char: "河", at: [300, 300], size: 170, from: 0.6, to: 8 },
          { kind: "glyph", char: "洗", at: [600, 300], size: 170, from: 0.9, to: 8 },
          { kind: "glyph", char: "汗", at: [900, 300], size: 170, from: 1.2, to: 8 },
          { kind: "glyph", char: "煮", at: [300, 560], size: 170, from: 3, to: 8 },
          { kind: "glyph", char: "照", at: [600, 560], size: 170, from: 3.3, to: 8 },
          { kind: "glyph", char: "点", at: [900, 560], size: 170, from: 3.6, to: 8 },
          { kind: "glyph", char: "馬", script: "song", at: [600, 380], size: 300, from: 8.1 },
          { kind: "highlight", at: [600, 480], size: [240, 80], color: "#ff9f43", from: 9 },
          { kind: "myth", wrong: "四个点都是火", right: "繁体马的四点是马腿", from: 9.2 }
        ]
      }
    ]
  },
  {
    question: "zodiac",
    scenes: [
      {
        turn: 0, title: "照着动物画", duration: 13,
        cues: [
          { kind: "sprite", icon: "🐂", path: [[280, 260]], size: 110, from: 0.4, to: 7 },
          { kind: "glyph", char: "牛", script: "oracle", at: [280, 540], size: 200, from: 1.2 },
          { kind: "sprite", icon: "🐑", path: [[600, 260]], size: 110, from: 2.4, to: 7 },
          { kind: "glyph", char: "羊", script: "oracle", at: [600, 540], size: 200, from: 3.2 },
          { kind: "sprite", icon: "🐯", path: [[920, 260]], size: 110, from: 4.4, to: 7 },
          { kind: "glyph", char: "虎", script: "oracle", at: [920, 540], size: 200, from: 5.2 },
          { kind: "label", at: [280, 540], text: "牛头和弯角", side: "top", from: 7.2 },
          { kind: "label", at: [600, 540], text: "一对弯羊角", side: "top", from: 8.6 },
          { kind: "label", at: [920, 540], text: "大嘴和花纹", side: "top", from: 10 }
        ]
      },
      {
        turn: 1, title: "想象出来的龙", duration: 12,
        cues: [
          { kind: "sprite", icon: "🐉", path: [[300, 420]], size: 200, from: 0.4 },
          { kind: "arrow", path: [[470, 420], [600, 420]], from: 2 },
          { kind: "glyph", char: "龍", script: "oracle", at: [820, 420], size: 300, from: 2.5 },
          { kind: "label", at: [820, 300], text: "大脑袋、大嘴巴", side: "top", from: 3.8 },
          { kind: "label", at: [860, 500], text: "身子长长地卷着", side: "right", from: 5.4 },
          { kind: "text", at: [600, 800], text: "照着心里的样子画", from: 7.5 }
        ]
      },
      {
        turn: 2, title: "蛇写成「它」", duration: 13,
        cues: [
          { kind: "sprite", icon: "🐍", path: [[280, 400]], size: 180, from: 0.4 },
          { kind: "glyph", char: "它", script: "oracle", at: [640, 400], size: 280, caption: "甲骨文的它", from: 1.5 },
          { kind: "text", at: [600, 110], text: "上古住在草丛里", from: 5 },
          { kind: "sprite", icon: "🌿", path: [[990, 420]], size: 130, from: 5.3 },
          { kind: "text", at: [600, 800], text: "见面问：没有蛇吧？", from: 6.5, to: 10 },
          { kind: "text", at: [600, 800], text: "后来：没别的事吧？", from: 10.2 }
        ]
      },
      {
        turn: 3, title: "找不到的猴子", duration: 13,
        cues: [
          { kind: "sprite", icon: "🐒", path: [[320, 400]], size: 180, from: 0.4, to: 6 },
          { kind: "sprite", icon: "❓", path: [[620, 400]], size: 140, wobble: true, from: 1.5, to: 6 },
          { kind: "text", at: [600, 110], text: "还没找到公认的猴字", from: 2 },
          { kind: "glyph", char: "雞", script: "oracle", at: [300, 450], size: 200, caption: "鸡", from: 6.3 },
          { kind: "glyph", char: "犬", script: "oracle", at: [600, 450], size: 200, caption: "狗", from: 7.2 },
          { kind: "glyph", char: "豕", script: "oracle", at: [900, 450], size: 200, caption: "猪", from: 8.1 },
          { kind: "text", at: [600, 800], text: "鸡、狗、猪都有", from: 9.5 }
        ]
      },
      {
        turn: 4, title: "记日子的地支", duration: 14,
        cues: [
          { kind: "text", at: [600, 110], text: "地支：记日子的十二个字", from: 0.3, to: 9.4 },
          { kind: "glyph", char: "子", script: "oracle", at: [300, 400], size: 160, from: 1, to: 9.4 },
          { kind: "glyph", char: "丑", script: "oracle", at: [500, 400], size: 160, from: 1.6, to: 9.4 },
          { kind: "glyph", char: "寅", script: "oracle", at: [700, 400], size: 160, from: 2.2, to: 9.4 },
          { kind: "glyph", char: "卯", script: "oracle", at: [900, 400], size: 160, from: 2.8, to: 9.4 },
          { kind: "text", at: [600, 800], text: "还没和动物配在一起", from: 5.6, to: 9.4 },
          { kind: "sprite", icon: "🎋", path: [[600, 400]], size: 170, from: 9.5 },
          { kind: "label", at: [600, 420], text: "睡虎地秦简", side: "bottom", from: 10 },
          { kind: "text", at: [600, 110], text: "最早配上动物：秦朝竹简", from: 10.5 }
        ]
      },
      {
        turn: 5, title: "秦简里的生肖", view: "slips", duration: 14,
        cues: [
          { kind: "sprite", icon: "🦹", path: [[1041, 300]], size: 100, from: 0.5, to: 5 },
          { kind: "label", at: [1041, 300], text: "猜小偷长什么样", side: "bottom", from: 1, to: 5 },
          { kind: "glyph", char: "午", script: "kai", at: [663, 300], size: 130, from: 5.2 },
          { kind: "sprite", icon: "🦌", path: [[663, 520]], size: 120, from: 6 },
          { kind: "myth", wrong: "午配的是马", right: "秦简里，午配的是鹿", from: 7, to: 11.4 },
          { kind: "text", at: [600, 110], text: "东汉王充：和今天一样", from: 11.5 }
        ]
      },
      {
        turn: 6, title: "找找你的生肖", duration: 10,
        cues: [
          { kind: "text", at: [600, 110], text: "找找你的生肖", from: 0.3 },
          { kind: "glyph", char: "鼠", script: "oracle", at: [270, 430], size: 180, from: 0.8 },
          { kind: "glyph", char: "兔", script: "oracle", at: [490, 430], size: 180, from: 1.3 },
          { kind: "glyph", char: "馬", script: "oracle", at: [710, 430], size: 180, from: 1.8 },
          { kind: "glyph", char: "龍", script: "oracle", at: [930, 430], size: 180, from: 2.3 },
          { kind: "sprite", icon: "🐒", path: [[600, 720]], size: 100, wobble: true, from: 4 }
        ]
      }
    ]
  },
  {
    question: "face-chars",
    scenes: [
      {
        turn: 0, title: "横着的眼睛", duration: 12,
        cues: [
          { kind: "sprite", icon: "👁️", path: [[300, 400]], size: 200, from: 0.4 },
          { kind: "arrow", path: [[460, 400], [600, 400]], from: 2 },
          { kind: "glyph", char: "目", script: "oracle", at: [830, 400], size: 300, from: 2.5 },
          { kind: "label", at: [830, 400], text: "圆圆的眼珠", pos: [830, 620], from: 4.5 },
          { kind: "text", at: [600, 800], text: "象形字：照着样子画", from: 7 }
        ]
      },
      {
        turn: 1, title: "眼睛站起来", duration: 14,
        cues: [
          { kind: "glyph", char: "目", script: "oracle", at: [600, 400], size: 280, from: 0.4, to: 4 },
          { kind: "text", at: [600, 110], text: "竖着写，眼睛站起来", from: 1.5 },
          { kind: "glyph", char: "目", script: "oracle", at: [600, 400], size: 280, turnTo: -90, over: 1.5, from: 4, to: 7.4 },
          { kind: "evolve", at: [600, 380], size: 280, every: 2.2, from: 7.5, forms: [{ script: "seal", char: "目" }, { script: "kai", char: "目" }] },
          { kind: "highlight", at: [600, 380], size: [130, 150], color: "#ff9f43", from: 10.4 },
          { kind: "label", at: [640, 380], text: "当年的眼珠", pos: [920, 280], from: 10.7 }
        ]
      },
      {
        turn: 2, title: "嘴巴和耳朵", duration: 13,
        cues: [
          { kind: "sprite", icon: "👄", path: [[330, 250]], size: 110, from: 0.4 },
          { kind: "glyph", char: "口", script: "oracle", at: [330, 520], size: 220, from: 1.2 },
          { kind: "label", at: [330, 520], text: "张开的嘴巴", side: "bottom", from: 2.5 },
          { kind: "sprite", icon: "👂", path: [[870, 250]], size: 110, from: 4 },
          { kind: "glyph", char: "耳", script: "oracle", at: [870, 520], size: 240, from: 4.8 },
          { kind: "text", at: [600, 800], text: "摸摸你的耳朵", from: 9 }
        ]
      },
      {
        turn: 3, title: "鼻子是「自」", duration: 13,
        cues: [
          { kind: "sprite", icon: "👃", path: [[300, 400]], size: 200, from: 0.4, to: 8.4 },
          { kind: "arrow", path: [[460, 400], [600, 400]], from: 2, to: 8.4 },
          { kind: "glyph", char: "自", script: "oracle", at: [820, 400], size: 300, from: 2.5 },
          { kind: "text", at: [600, 110], text: "《说文》：自，鼻也", from: 4 },
          { kind: "label", at: [820, 400], text: "正面看的鼻子", pos: [820, 640], from: 5.5, to: 8.4 },
          { kind: "glyph", char: "鼻", script: "kai", at: [360, 420], size: 240, caption: "后来造的鼻", from: 8.6 },
          { kind: "highlight", at: [360, 350], size: [150, 120], color: "#ff9f43", from: 10 },
          { kind: "label", at: [300, 350], text: "还留着自", side: "left", from: 10.3 }
        ]
      },
      {
        turn: 4, title: "指着鼻子说自己？", duration: 13,
        cues: [
          { kind: "sprite", icon: "🧒", path: [[320, 420]], size: 200, from: 0.4 },
          { kind: "sprite", icon: "👆", path: [[440, 420]], size: 80, from: 1.2, to: 6 },
          { kind: "label", at: [320, 340], text: "流传的说法", side: "top", from: 2, to: 6 },
          { kind: "text", at: [600, 800], text: "只是一种说法", from: 3.5, to: 7.8 },
          { kind: "text", at: [600, 110], text: "也有人说：读音差不多", from: 5, to: 7.8 },
          { kind: "glyph", char: "息", script: "kai", at: [800, 420], size: 280, caption: "呼吸的息", from: 8 },
          { kind: "highlight", at: [800, 345], size: [150, 130], color: "#ff9f43", from: 9.5 },
          { kind: "label", at: [860, 345], text: "自：鼻子", side: "right", from: 9.8 },
          { kind: "label", at: [860, 500], text: "心", side: "right", from: 10.8 }
        ]
      },
      {
        turn: 5, title: "眼睛上面的毛", duration: 12,
        cues: [
          { kind: "sprite", icon: "🤨", path: [[300, 400]], size: 180, from: 0.4 },
          { kind: "glyph", char: "眉", script: "oracle", at: [800, 400], size: 300, from: 2 },
          { kind: "highlight", at: [800, 300], size: [240, 110], color: "#ff9f43", from: 4, to: 6.4 },
          { kind: "label", at: [880, 300], text: "眉毛", side: "right", from: 4.3, to: 6.4 },
          { kind: "highlight", at: [800, 470], size: [240, 130], color: "#ff9f43", from: 6.5 },
          { kind: "label", at: [860, 520], text: "先画一只眼睛", pos: [1000, 640], from: 6.8 },
          { kind: "text", at: [600, 800], text: "带上眼睛，一看就懂", from: 8.5 }
        ]
      },
      {
        turn: 6, title: "指一指，说一说", duration: 11,
        cues: [
          { kind: "glyph", char: "目", script: "oracle", at: [200, 420], size: 150, caption: "眼睛", from: 0.4 },
          { kind: "glyph", char: "耳", script: "oracle", at: [400, 420], size: 150, caption: "耳朵", from: 0.9 },
          { kind: "glyph", char: "口", script: "oracle", at: [600, 420], size: 150, caption: "嘴巴", from: 1.4 },
          { kind: "glyph", char: "自", script: "oracle", at: [800, 420], size: 150, caption: "鼻子", from: 1.9 },
          { kind: "glyph", char: "眉", script: "oracle", at: [1000, 420], size: 150, caption: "眉毛", from: 2.4 },
          { kind: "text", at: [600, 800], text: "指一指，说出字", from: 4 }
        ]
      }
    ]
  }
];
