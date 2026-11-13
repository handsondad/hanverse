import type { Film } from "./types";

const red = "#d9453a";
const meaning = "#2f7d32";

export const films: readonly Film[] = [
  {
    question: "rest-tree",
    scenes: [
      {
        turn: 0, title: "人靠着树歇一歇", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌳", path: [[520, 430]], size: 220, from: 0.3 },
          { kind: "sprite", icon: "🚶", path: [[140, 520], [380, 520]], size: 130, travel: 2, from: 0.8 },
          { kind: "label", at: [380, 520], text: "歇一歇", side: "bottom", from: 3 },
          { kind: "glyph", char: "休", script: "oracle", at: [920, 430], size: 280, caption: "甲骨文的休", from: 4 },
          { kind: "text", at: [600, 110], text: "人 + 木 = 休", size: "l", from: 6.4 },
          { kind: "text", at: [600, 800], text: "休息的「休」", from: 8.4 }
        ]
      },
      {
        turn: 1, title: "像拼积木", duration: 11,
        cues: [
          { kind: "glyph", char: "人", at: [250, 420], color: meaning, path: [[520, 420]], travel: 1.5, from: 0.5, to: 4.5 },
          { kind: "glyph", char: "木", at: [950, 420], color: meaning, path: [[680, 420]], travel: 1.5, from: 0.8, to: 4.5 },
          { kind: "glyph", char: "休", at: [600, 420], size: 320, motion: "pulse", from: 4.5 },
          { kind: "sprite", icon: "🧩", path: [[1020, 680]], size: 90, from: 5.4 },
          { kind: "text", at: [600, 800], text: "这种字叫会意字", from: 6.4 }
        ]
      },
      {
        turn: 2, title: "木、林、森", duration: 12,
        cues: [
          { kind: "glyph", char: "木", script: "oracle", at: [260, 420], size: 200, caption: "一棵：木", from: 0.5 },
          { kind: "glyph", char: "林", script: "oracle", at: [600, 420], size: 220, caption: "两棵：林", from: 2.4 },
          { kind: "glyph", char: "森", script: "oracle", at: [940, 420], size: 220, caption: "三棵：森", from: 4.4 },
          { kind: "text", at: [600, 110], text: "从一棵树到好多树", from: 6.4 },
          { kind: "text", at: [600, 800], text: "同一块积木多放几块", from: 8.4 }
        ]
      },
      {
        turn: 3, title: "人多了：从、众", duration: 13,
        cues: [
          { kind: "sprite", icon: "🚶", path: [[80, 730], [280, 730]], size: 90, travel: 2.4, from: 0.5, to: 6 },
          { kind: "sprite", icon: "🚶", path: [[220, 730], [420, 730]], size: 90, travel: 2.4, from: 0.5, to: 6 },
          { kind: "glyph", char: "从", script: "oracle", at: [330, 380], size: 260, caption: "从：跟着走", from: 1.5 },
          { kind: "glyph", char: "眾", script: "oracle", at: [870, 380], size: 280, caption: "众：好多人", from: 5 },
          { kind: "highlight", at: [870, 290], size: [150, 110], color: red, from: 8.6 },
          { kind: "label", at: [870, 290], text: "像个太阳？", side: "right", from: 9 },
          { kind: "text", at: [600, 800], text: "人多了，也能拼字", from: 10.6 }
        ]
      },
      {
        turn: 4, title: "自己拼一个字", duration: 13,
        cues: [
          { kind: "glyph", char: "小", at: [300, 240], size: 180, path: [[600, 300]], travel: 1.2, from: 0.4, to: 3.8 },
          { kind: "glyph", char: "大", at: [900, 640], size: 180, path: [[600, 560]], travel: 1.2, from: 0.7, to: 3.8 },
          { kind: "glyph", char: "尖", at: [600, 430], size: 300, from: 3.8, to: 7.4 },
          { kind: "sprite", icon: "✏️", path: [[900, 430]], size: 100, from: 4.6, to: 7.4 },
          { kind: "glyph", char: "小", at: [250, 430], size: 200, path: [[480, 430]], travel: 1.2, from: 7.6, to: 10 },
          { kind: "glyph", char: "土", at: [950, 430], size: 200, path: [[720, 430]], travel: 1.2, from: 7.8, to: 10 },
          { kind: "glyph", char: "尘", at: [600, 430], size: 300, from: 10 },
          { kind: "text", at: [600, 800], text: "拆成积木，再合起来想", from: 11 }
        ]
      }
    ]
  },
  {
    question: "pig-home",
    scenes: [
      {
        turn: 0, title: "屋顶下的一头猪", duration: 12,
        cues: [
          { kind: "glyph", char: "宀", script: "oracle", at: [600, 300], size: 320, from: 0.4, to: 5.4 },
          { kind: "label", at: [700, 220], text: "像屋顶", side: "right", from: 1.2, to: 5.4 },
          { kind: "sprite", icon: "🐷", path: [[1050, 560], [600, 480]], size: 120, travel: 1.8, from: 2.2, to: 5.4 },
          { kind: "glyph", char: "家", script: "oracle", at: [600, 420], size: 340, caption: "甲骨文的家", from: 5.4 },
          { kind: "text", at: [600, 100], text: "屋顶 + 猪 = 家", from: 7.6 }
        ]
      },
      {
        turn: 1, title: "猪怎么站起来了", view: "slips", duration: 12,
        cues: [
          { kind: "sprite", icon: "🐖", path: [[300, 450]], size: 160, from: 0.3 },
          { kind: "glyph", char: "豕", script: "oracle", at: [789, 440], size: 320, rotate: -90, turnTo: 0, over: 1.5, from: 2 },
          { kind: "label", at: [800, 300], text: "头朝上", side: "right", from: 4.2 },
          { kind: "text", at: [600, 820], text: "有人猜：竹简太窄了", from: 5.6 }
        ]
      },
      {
        turn: 2, title: "猪是要紧的家当", duration: 12,
        cues: [
          { kind: "sprite", icon: "🏠", path: [[380, 400]], size: 220, from: 0.3 },
          { kind: "sprite", icon: "🐷", path: [[300, 620]], size: 90, from: 1.6 },
          { kind: "sprite", icon: "🐷", path: [[450, 640]], size: 90, from: 2.2 },
          { kind: "label", at: [380, 330], text: "有猪就有人住", side: "top", from: 3 },
          { kind: "glyph", char: "家", at: [880, 400], size: 280, motion: "pulse", from: 5.4 },
          { kind: "text", at: [600, 800], text: "猪多，日子就好", from: 7.6 }
        ]
      },
      {
        turn: 3, title: "两种说法", duration: 12,
        cues: [
          { kind: "glyph", char: "家", script: "oracle", at: [320, 380], size: 260, caption: "甲骨文：屋里有猪", from: 0.4 },
          { kind: "glyph", char: "家", script: "seal", at: [880, 380], size: 260, caption: "《说文》的小篆", from: 3 },
          { kind: "highlight", at: [880, 440], size: [150, 140], color: red, from: 4.4 },
          { kind: "label", at: [860, 440], text: "提示读音？", pos: [620, 560], from: 4.8 },
          { kind: "text", at: [600, 110], text: "有的这样说，有的那样说", from: 7.4 }
        ]
      },
      {
        turn: 4, title: "宝盖头就是屋顶", duration: 12,
        cues: [
          { kind: "glyph", char: "安", at: [330, 420], size: 260, caption: "屋里有女子", from: 0.5 },
          { kind: "highlight", at: [330, 330], size: [220, 90], color: red, from: 1.4, to: 4 },
          { kind: "glyph", char: "宝", at: [870, 420], size: 260, caption: "屋里藏着玉", from: 3.2 },
          { kind: "highlight", at: [870, 330], size: [220, 90], color: red, from: 4, to: 6.5 },
          { kind: "text", at: [600, 110], text: "宝盖头 = 屋顶", from: 6.2 },
          { kind: "text", at: [600, 800], text: "屋里装了什么？", from: 8.4 }
        ]
      }
    ]
  },
  {
    question: "bright",
    scenes: [
      {
        turn: 0, title: "太阳 + 月亮？", duration: 12,
        cues: [
          { kind: "sprite", icon: "☀️", path: [[260, 420]], size: 140, from: 0.3, to: 3 },
          { kind: "sprite", icon: "🌙", path: [[940, 420]], size: 140, from: 0.8, to: 3 },
          { kind: "glyph", char: "日", script: "oracle", at: [260, 420], path: [[490, 420]], travel: 1.5, from: 3, to: 7.4 },
          { kind: "glyph", char: "月", script: "oracle", at: [940, 420], path: [[710, 420]], travel: 1.5, from: 3.2, to: 7.4 },
          { kind: "glyph", char: "明", script: "oracle", at: [600, 420], size: 320, caption: "甲骨文的明", from: 7.4 },
          { kind: "text", at: [600, 110], text: "日 + 月 = 明", size: "l", from: 8.4 }
        ]
      },
      {
        turn: 1, title: "月光照进窗户", duration: 12,
        cues: [
          { kind: "glyph", char: "囧", script: "oracle", at: [330, 420], size: 260, caption: "窗户：囧", from: 0.4, to: 7 },
          { kind: "sprite", icon: "🌙", path: [[960, 180]], size: 110, from: 1.8, to: 7 },
          { kind: "flow", path: [[900, 230], [440, 400]], icon: "✨", count: 4, from: 2.8, to: 7 },
          { kind: "text", at: [600, 800], text: "月光照进窗户", from: 4, to: 7 },
          { kind: "glyph", char: "朙", script: "oracle", at: [600, 420], size: 320, caption: "另一个明", from: 7.2 },
          { kind: "text", at: [600, 110], text: "窗 + 月 = 明", size: "l", from: 9 }
        ]
      },
      {
        turn: 2, title: "老字新玩法", duration: 11,
        cues: [
          { kind: "glyph", char: "囧", script: "seal", at: [280, 400], size: 240, caption: "小篆的囧", from: 0.4 },
          { kind: "glyph", char: "囧", script: "song", at: [620, 400], size: 240, caption: "今天的囧", from: 1.6 },
          { kind: "sprite", icon: "😖", path: [[940, 400]], size: 140, from: 3 },
          { kind: "label", at: [940, 400], text: "网上的表情", side: "bottom", from: 3.6 },
          { kind: "myth", wrong: "囧本来是发愁的脸", right: "囧本来是透亮的窗户", from: 5.4 }
        ]
      },
      {
        turn: 3, title: "两种都是真的", duration: 13,
        cues: [
          { kind: "glyph", char: "明", script: "oracle", at: [250, 280], size: 190, caption: "日 + 月", from: 0.4 },
          { kind: "glyph", char: "朙", script: "oracle", at: [250, 570], size: 190, caption: "窗 + 月", from: 1.4 },
          { kind: "text", at: [600, 110], text: "商朝：两种都写", from: 2.4 },
          { kind: "arrow", path: [[420, 460], [600, 430]], from: 4.4 },
          { kind: "evolve", at: [830, 400], size: 280, every: 2.4, from: 5, forms: [{ script: "seal", char: "朙", label: "说文小篆" }, { script: "kai", char: "明" }] },
          { kind: "text", at: [600, 820], text: "后来写成「日」加「月」", from: 9.6 }
        ]
      },
      {
        turn: 4, title: "左边小，右边高", view: "grid", duration: 12,
        cues: [
          { kind: "write", char: "明", at: [600, 450], size: 640, stroke: 0.8, mark: [0, 1, 2, 3], from: 0.5 },
          { kind: "label", at: [430, 380], text: "日：小一点", side: "left", from: 7.4 },
          { kind: "label", at: [720, 450], text: "月：瘦又高", side: "right", from: 8 },
          { kind: "text", at: [600, 830], text: "从左到右写", from: 9 }
        ]
      }
    ]
  },
  {
    question: "hand-eye",
    scenes: [
      {
        turn: 0, title: "手搭在眼睛上", duration: 12,
        cues: [
          { kind: "sprite", icon: "👁️", path: [[330, 480]], size: 150, from: 0.3 },
          { kind: "sprite", icon: "✋", path: [[330, 160], [330, 360]], size: 140, rotate: -90, travel: 1.2, from: 1.2 },
          { kind: "label", at: [330, 360], text: "手在眼睛上面", side: "right", pos: [600, 250], from: 2.6, to: 5 },
          { kind: "glyph", char: "看", script: "seal", at: [870, 420], size: 300, caption: "小篆的看", from: 4.4 },
          { kind: "text", at: [600, 110], text: "手搭在眼睛上面", from: 6.4 },
          { kind: "text", at: [600, 800], text: "手 + 目 = 看", size: "l", from: 8.4 }
        ]
      },
      {
        turn: 1, title: "手搭凉棚", duration: 12,
        cues: [
          { kind: "sprite", icon: "☀️", path: [[1000, 200]], size: 130, from: 0.3 },
          { kind: "flow", path: [[940, 240], [620, 420]], icon: "✨", count: 3, from: 1, to: 4.4 },
          { kind: "sprite", icon: "😣", path: [[560, 470]], size: 170, from: 0.6, to: 4.4 },
          { kind: "sprite", icon: "✋", path: [[560, 760], [560, 360]], size: 130, rotate: -90, travel: 1.4, from: 3 },
          { kind: "sprite", icon: "😊", path: [[560, 470]], size: 170, from: 4.4 },
          { kind: "label", at: [560, 360], text: "小凉棚", side: "left", from: 5.4 },
          { kind: "text", at: [600, 800], text: "手搭凉棚，望得远", from: 8 }
        ]
      },
      {
        turn: 2, title: "甲骨文里没找到", duration: 11,
        cues: [
          { kind: "sprite", icon: "🔍", path: [[200, 300], [460, 520], [260, 680]], size: 110, travel: 3, wobble: true, from: 0.4, to: 4.6 },
          { kind: "text", at: [600, 110], text: "甲骨文里还没找到", from: 1.6 },
          { kind: "glyph", char: "看", script: "seal", at: [760, 420], size: 300, caption: "老样子：小篆", from: 3.6 },
          { kind: "text", at: [600, 800], text: "要说看见，用「见」", from: 7 }
        ]
      },
      {
        turn: 3, title: "顶着大眼睛的人", duration: 12,
        cues: [
          { kind: "glyph", char: "見", script: "oracle", at: [600, 400], size: 320, caption: "甲骨文的见", from: 0.4, to: 6.4 },
          { kind: "label", at: [600, 310], text: "大大的眼睛", side: "right", from: 1.6, to: 6.4 },
          { kind: "label", at: [600, 500], text: "跪坐的人", side: "left", from: 2.8, to: 6.4 },
          { kind: "evolve", at: [600, 400], size: 300, every: 1.8, from: 6.4, forms: [{ script: "seal", char: "見" }, { script: "kai", char: "见" }] },
          { kind: "text", at: [600, 110], text: "目 + 人 = 見", size: "l", from: 9.2 }
        ]
      },
      {
        turn: 4, title: "手的最后一笔是撇", view: "grid", duration: 12,
        cues: [
          { kind: "write", char: "看", at: [600, 450], size: 640, stroke: 0.8, mark: [0, 1, 2, 3], from: 0.4 },
          { kind: "label", at: [445, 450], text: "一大撇罩住目", side: "left", from: 4 },
          { kind: "text", at: [600, 830], text: "一共九笔", from: 8.4 },
          { kind: "text", at: [600, 100], text: "先写手，再写目", from: 9.6 }
        ]
      }
    ]
  },
  {
    question: "dog-nose",
    scenes: [
      {
        turn: 0, title: "鼻子 + 狗", duration: 12,
        cues: [
          { kind: "sprite", icon: "🐕", path: [[120, 700], [420, 700]], size: 120, travel: 2, from: 0.3, to: 6 },
          { kind: "glyph", char: "自", script: "oracle", at: [300, 300], size: 200, color: meaning, path: [[600, 280]], travel: 1.4, from: 2.4, to: 6 },
          { kind: "glyph", char: "犬", script: "oracle", at: [900, 560], size: 220, color: meaning, path: [[600, 540]], travel: 1.4, from: 2.8, to: 6 },
          { kind: "glyph", char: "臭", script: "oracle", at: [600, 420], size: 340, caption: "甲骨文的臭", from: 6 },
          { kind: "text", at: [600, 800], text: "鼻子 + 狗 = 闻", from: 8 }
        ]
      },
      {
        turn: 1, title: "「自」本来是鼻子", duration: 12,
        cues: [
          { kind: "evolve", at: [600, 380], size: 300, every: 1.8, from: 0.4, forms: [{ icon: "👃" }, { script: "oracle", char: "自" }, { script: "seal", char: "自" }, { script: "kai", char: "自" }] },
          { kind: "label", at: [640, 300], text: "借去当「自己」", side: "right", from: 7 },
          { kind: "glyph", char: "鼻", at: [1000, 600], size: 160, caption: "另造的鼻", from: 9 },
          { kind: "text", at: [600, 800], text: "鼻子另造了「鼻」", from: 9.8 }
        ]
      },
      {
        turn: 2, title: "跟着气味找脚印", duration: 12,
        cues: [
          { kind: "flow", path: [[200, 700], [1000, 520]], icon: "🐾", count: 4, speed: 0.4, from: 0.4, to: 7 },
          { kind: "sprite", icon: "🦌", path: [[1020, 440]], size: 140, from: 0.8 },
          { kind: "sprite", icon: "🐕", path: [[150, 720], [700, 600]], size: 120, travel: 3, wobble: true, from: 1.2 },
          { kind: "text", at: [600, 110], text: "犬：闻着找脚印", from: 4 },
          { kind: "label", at: [700, 600], text: "鼻子特别灵", side: "top", from: 4.6 },
          { kind: "text", at: [600, 800], text: "狗 + 鼻子 = 闻气味", from: 8 }
        ]
      },
      {
        turn: 3, title: "从闻到难闻", duration: 13,
        cues: [
          { kind: "glyph", char: "臭", at: [320, 380], size: 240, caption: "本来：闻", from: 0.4, to: 7.4 },
          { kind: "sprite", icon: "👃", path: [[320, 650]], size: 100, from: 1.2, to: 7.4 },
          { kind: "arrow", path: [[470, 380], [700, 380]], text: "交给", from: 2.6 },
          { kind: "glyph", char: "嗅", at: [880, 380], size: 240, caption: "后来管闻", from: 3.2 },
          { kind: "highlight", at: [810, 390], size: [100, 130], color: red, from: 4.4, to: 7 },
          { kind: "glyph", char: "臭", at: [320, 380], size: 240, caption: "改说难闻", from: 7.4 },
          { kind: "sprite", icon: "🤢", path: [[320, 650]], size: 100, from: 8 },
          { kind: "text", at: [600, 800], text: "从闻，变成难闻", from: 9.6 }
        ]
      },
      {
        turn: 4, title: "鼻子 + 心 = 息", duration: 12,
        cues: [
          { kind: "glyph", char: "自", script: "oracle", at: [300, 280], size: 200, color: meaning, path: [[600, 290]], travel: 1.4, from: 0.4, to: 4.6 },
          { kind: "glyph", char: "心", script: "oracle", at: [900, 600], size: 200, color: meaning, path: [[600, 560]], travel: 1.4, from: 0.8, to: 4.6 },
          { kind: "glyph", char: "息", script: "oracle", at: [600, 420], size: 320, caption: "甲骨文的息", from: 4.6 },
          { kind: "flow", path: [[760, 320], [1000, 250]], icon: "💨", count: 3, from: 6 },
          { kind: "text", at: [600, 110], text: "喘气、呼吸", from: 7 },
          { kind: "text", at: [600, 800], text: "自 + 心 = 息", size: "l", from: 8.6 }
        ]
      },
      {
        turn: 5, title: "下面是「犬」不是「大」", view: "grid", duration: 12,
        cues: [
          { kind: "write", char: "臭", at: [600, 345], size: 460, stroke: 0.7, mark: [9], from: 0.4 },
          { kind: "label", at: [745, 341], text: "别丢了这一点", side: "right", from: 7.8 },
          { kind: "myth", wrong: "臭下面是个大", right: "下面是犬，右上有一点", from: 8.4 }
        ]
      }
    ]
  },
  {
    question: "hand-elephant",
    scenes: [
      {
        turn: 0, title: "一只手牵着大象", duration: 12,
        cues: [
          { kind: "sprite", icon: "🐘", path: [[280, 420]], size: 170, from: 0.3, to: 3.6 },
          { kind: "glyph", char: "象", script: "oracle", at: [760, 420], size: 240, rotate: -90, turnTo: 0, over: 1.4, caption: "甲骨文的象", from: 0.8, to: 3.6 },
          { kind: "glyph", char: "又", script: "oracle", at: [300, 260], size: 180, color: meaning, path: [[550, 290]], travel: 1.5, caption: "手：又", from: 3.8, to: 7.4 },
          { kind: "glyph", char: "象", script: "oracle", at: [880, 500], size: 220, color: meaning, path: [[630, 500]], travel: 1.5, from: 4, to: 7.4 },
          { kind: "glyph", char: "爲", script: "oracle", at: [600, 410], size: 320, caption: "甲骨文的为", from: 7.4 },
          { kind: "text", at: [600, 110], text: "手 + 象 = 牵象干活", from: 8.2 },
          { kind: "text", at: [600, 800], text: "事在人为的「为」", from: 9.4 }
        ]
      },
      {
        turn: 1, title: "三千年前的中原大象", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌴", path: [[220, 380]], size: 140, from: 0.3, to: 6.4 },
          { kind: "sprite", icon: "🐘", path: [[480, 420]], size: 190, from: 0.6, to: 6.4 },
          { kind: "sprite", icon: "🔔", path: [[570, 470]], size: 75, wobble: true, from: 1.8, to: 6.4 },
          { kind: "label", at: [570, 510], text: "殷墟小象戴着铜铃", side: "bottom", from: 2.2, to: 6.4 },
          { kind: "text", at: [600, 110], text: "商朝黄河边暖和湿润", from: 2.8 },
          { kind: "glyph", char: "豫", script: "kai", at: [600, 420], size: 300, caption: "河南简称：豫", from: 6.6 },
          { kind: "highlight", at: [675, 420], size: [155, 250], color: red, from: 7.6 },
          { kind: "label", at: [755, 420], text: "里面藏着一头象", side: "right", from: 8 },
          { kind: "text", at: [600, 800], text: "商王还打猎抓过大象", from: 9.4 }
        ]
      },
      {
        turn: 2, title: "大象被误当成母猴", duration: 12,
        cues: [
          { kind: "glyph", char: "爲", script: "seal", at: [340, 350], size: 240, caption: "变了形的小篆", from: 0.4 },
          { kind: "sprite", icon: "🐒", path: [[820, 350]], size: 150, wobble: true, from: 1.4, to: 5.6 },
          { kind: "label", at: [820, 430], text: "许慎猜成了母猴", side: "bottom", from: 2, to: 5.6 },
          { kind: "glyph", char: "爲", script: "oracle", at: [820, 350], size: 240, caption: "罗振玉认出大象", from: 5.8 },
          { kind: "myth", wrong: "「为」本来画的是一只母猴", right: "甲骨文是一只手牵着大象干活", from: 6.4 },
          { kind: "text", at: [600, 105], text: "甲骨文帮大象平了反", from: 7.2 }
        ]
      },
      {
        turn: 3, title: "从大象变成四画", duration: 12,
        cues: [
          { kind: "evolve", at: [600, 390], size: 300, every: 2.2, from: 0.4, forms: [{ script: "oracle", char: "爲" }, { script: "seal", char: "爲" }, { script: "song", char: "爲", label: "繁体" }, { script: "kai", char: "为", label: "简体" }] },
          { kind: "text", at: [600, 110], text: "繁体笔画多，写起来慢", from: 2.6, to: 6.8 },
          { kind: "sprite", icon: "🖌️", path: [[220, 320], [260, 500], [200, 600]], size: 90, travel: 1.6, from: 7, to: 9.2 },
          { kind: "text", at: [600, 110], text: "草书连笔快写，定成简体", from: 7.2 },
          { kind: "text", at: [600, 800], text: "一共只有四画", from: 9.4 }
        ]
      },
      {
        turn: 4, title: "四画小字装大象", duration: 10,
        cues: [
          { kind: "glyph", char: "为", script: "kai", at: [600, 380], size: 280, from: 0.4 },
          { kind: "shape", shape: "pill", at: [260, 360], size: [250, 76], color: "#ff9f43", text: "事在人为", from: 1.4 },
          { kind: "label", at: [260, 410], text: "靠人去做", side: "bottom", from: 2, to: 6.2 },
          { kind: "shape", shape: "pill", at: [940, 360], size: [230, 76], color: "#ffc75a", text: "为什么", from: 3.4 },
          { kind: "label", at: [940, 410], text: "为了什么缘故", side: "bottom", from: 4, to: 6.2 },
          { kind: "sprite", icon: "🐘", path: [[600, 640]], size: 110, wobble: true, from: 6.4 },
          { kind: "text", at: [600, 800], text: "四画小字里藏着大象", from: 7 }
        ]
      },
      {
        turn: 5, title: "四笔写出「为」", view: "grid", duration: 10,
        cues: [
          { kind: "write", char: "为", at: [600, 450], size: 640, stroke: 1.1, mark: [0], from: 0.5 },
          { kind: "label", at: [520, 250], text: "第一笔点：牵象的手", side: "left", from: 1.6, to: 5.2 },
          { kind: "label", at: [740, 560], text: "弯钩像象身和长鼻", side: "right", from: 5.4 },
          { kind: "text", at: [600, 830], text: "点·撇·横折钩·点", size: "s", from: 6.4 }
        ]
      }
    ]
  }
];
