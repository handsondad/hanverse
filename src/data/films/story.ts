import type { Film } from "./types";

const red = "#d9453a";
const gold = "#ffe08a";
const green = "#2f7d32";
const water = "#4fb6ff";
const peach = "#ffe2c4";

export const films: readonly Film[] = [
  {
    question: "nian-harvest",
    scenes: [
      {
        turn: 0, title: "人背着谷子", duration: 12,
        cues: [
          { kind: "glyph", char: "禾", script: "oracle", at: [220, 290], size: 200, color: green, caption: "禾：谷子", path: [[600, 290]], travel: 1.4, from: 0.5, to: 5 },
          { kind: "glyph", char: "人", script: "oracle", at: [980, 560], size: 200, caption: "人", path: [[600, 530]], travel: 1.4, from: 2.4, to: 5 },
          { kind: "evolve", at: [600, 400], size: 300, every: 1.8, from: 5, forms: [{ script: "oracle", char: "年" }, { script: "seal", char: "年" }, { script: "kai", char: "年" }] },
          { kind: "sprite", icon: "🌾", path: [[960, 300]], size: 120, wobble: true, from: 6 },
          { kind: "text", at: [600, 800], text: "像人背着谷子回家", from: 9.4 }
        ]
      },
      {
        turn: 1, title: "谷子熟了", duration: 11,
        cues: [
          { kind: "sprite", icon: "🌾", path: [[300, 400]], size: 170, from: 0.4 },
          { kind: "sprite", icon: "🌾", path: [[600, 400]], size: 170, from: 0.8 },
          { kind: "sprite", icon: "🌾", path: [[900, 400]], size: 170, from: 1.2 },
          { kind: "text", at: [600, 130], text: "《说文》：年，谷子熟了", from: 2.5 },
          { kind: "text", at: [600, 780], text: "五谷都熟叫「有年」", from: 6 }
        ]
      },
      {
        turn: 2, title: "一年熟一次", duration: 13,
        cues: [
          { kind: "sprite", icon: "🌱", path: [[330, 260]], size: 110, from: 0.4, to: 8 },
          { kind: "sprite", icon: "☀️", path: [[870, 260]], size: 110, from: 1.2, to: 8 },
          { kind: "sprite", icon: "🌾", path: [[870, 620]], size: 110, from: 2, to: 8 },
          { kind: "sprite", icon: "❄️", path: [[330, 620]], size: 110, from: 2.8, to: 8 },
          { kind: "arrow", path: [[420, 230], [780, 230], [960, 440], [780, 660], [420, 660], [240, 440], [330, 330]], color: "#ff9f43", draw: 2.4, from: 3.4, to: 8 },
          { kind: "glyph", char: "年", at: [600, 440], size: 200, from: 4.8 },
          { kind: "text", at: [600, 800], text: "夏叫岁，商叫祀，周叫年", from: 8.4 }
        ]
      },
      {
        turn: 3, title: "年兽是新故事", duration: 13,
        cues: [
          { kind: "sprite", icon: "👹", path: [[600, 300]], size: 200, wobble: true, from: 0.4 },
          { kind: "sprite", icon: "📚", path: [[250, 330]], size: 140, from: 1.8 },
          { kind: "label", at: [250, 330], text: "古书里：没有", side: "bottom", from: 2.4 },
          { kind: "sprite", icon: "📰", path: [[950, 330]], size: 140, from: 4 },
          { kind: "label", at: [950, 330], text: "1933 年小报", side: "bottom", from: 4.6 },
          { kind: "myth", wrong: "过年是为了赶走年兽", right: "年兽是近一百年才有的故事", from: 8 }
        ]
      },
      {
        turn: 4, title: "爆竹和红纸", duration: 11,
        cues: [
          { kind: "sprite", icon: "🧨", path: [[280, 360]], size: 160, from: 0.4 },
          { kind: "label", at: [280, 360], text: "放爆竹：老风俗", side: "bottom", from: 1.2 },
          { kind: "sprite", icon: "🧧", path: [[920, 360]], size: 160, from: 2.4 },
          { kind: "label", at: [920, 360], text: "贴红纸：老风俗", side: "bottom", from: 3 },
          { kind: "glyph", char: "年", script: "oracle", at: [600, 380], size: 200, from: 5.6 },
          { kind: "text", at: [600, 800], text: "年：本来讲的是丰收", from: 7 }
        ]
      },
      {
        turn: 5, title: "人写成了千", duration: 12,
        cues: [
          { kind: "glyph", char: "年", script: "oracle", at: [250, 380], size: 220, caption: "甲骨文", from: 0.5 },
          { kind: "glyph", char: "年", script: "seal", at: [600, 380], size: 220, caption: "小篆", from: 2.5 },
          { kind: "glyph", char: "年", at: [950, 380], size: 220, caption: "楷书", from: 4.5 },
          { kind: "highlight", at: [250, 450], size: [190, 130], color: red, from: 6, to: 10 },
          { kind: "highlight", at: [600, 450], size: [190, 130], color: red, from: 6.6, to: 10 },
          { kind: "text", at: [600, 800], text: "下面的人写成了千", from: 7.6 }
        ]
      }
    ]
  },
  {
    question: "double-xi",
    scenes: [
      {
        turn: 0, title: "门上的双喜", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 400], size: [380, 380], color: red, from: 0.4 },
          { kind: "glyph", char: "囍", script: "song", at: [600, 400], size: 300, color: gold, from: 1 },
          { kind: "sprite", icon: "🎉", path: [[230, 300]], size: 110, wobble: true, from: 3 },
          { kind: "sprite", icon: "💑", path: [[970, 300]], size: 110, from: 4.4 },
          { kind: "text", at: [600, 800], text: "双喜：读欢喜的喜", from: 6.4 }
        ]
      },
      {
        turn: 1, title: "一面鼓加一张口", duration: 13,
        cues: [
          { kind: "sprite", icon: "🥁", path: [[220, 290]], size: 150, from: 0.4, to: 3 },
          { kind: "glyph", char: "壴", script: "oracle", at: [220, 290], size: 200, caption: "壴：鼓", path: [[600, 280]], travel: 1.4, from: 2.6, to: 7.6 },
          { kind: "glyph", char: "口", script: "oracle", at: [980, 620], size: 160, caption: "口", path: [[600, 540]], travel: 1.4, from: 4.6, to: 7.6 },
          { kind: "glyph", char: "喜", script: "oracle", at: [600, 400], size: 320, motion: "pulse", from: 7.6 },
          { kind: "text", at: [600, 800], text: "敲鼓、唱歌：高兴", from: 9.4 }
        ]
      },
      {
        turn: 2, title: "喜，就是快乐", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "《说文》：喜，就是快乐", from: 0.3 },
          { kind: "evolve", at: [600, 380], size: 280, every: 1.8, from: 1, forms: [{ script: "oracle", char: "喜" }, { script: "seal", char: "喜" }, { script: "kai", char: "喜" }] },
          { kind: "sprite", icon: "🥁", path: [[220, 380]], size: 120, from: 3 },
          { kind: "sprite", icon: "🎶", path: [[980, 380]], size: 120, wobble: true, from: 3.6 },
          { kind: "text", at: [600, 800], text: "拼出新意思：会意字", from: 7.6 }
        ]
      },
      {
        turn: 3, title: "老百姓的吉祥字", duration: 12,
        cues: [
          { kind: "glyph", char: "喜", at: [300, 400], size: 220, path: [[500, 400]], travel: 1.4, from: 0.5, to: 4.6 },
          { kind: "glyph", char: "喜", at: [900, 400], size: 220, path: [[700, 400]], travel: 1.4, from: 0.8, to: 4.6 },
          { kind: "glyph", char: "囍", script: "song", at: [600, 400], size: 320, color: red, motion: "pulse", from: 4.6 },
          { kind: "label", at: [600, 400], text: "横连在一起", pos: [600, 150], from: 6 },
          { kind: "text", at: [600, 800], text: "字典里很晚才收进去", from: 8 }
        ]
      },
      {
        turn: 4, title: "王安石的传说", duration: 12,
        cues: [
          { kind: "sprite", icon: "📜", path: [[300, 330]], size: 150, from: 0.4 },
          { kind: "label", at: [300, 330], text: "考中进士", side: "bottom", from: 1 },
          { kind: "sprite", icon: "👰", path: [[900, 330]], size: 150, from: 2.4 },
          { kind: "label", at: [900, 330], text: "娶新娘子", side: "bottom", from: 3 },
          { kind: "glyph", char: "囍", script: "song", at: [600, 330], size: 160, color: red, from: 4.4 },
          { kind: "myth", wrong: "囍是王安石写出来的", right: "王安石的故事只是传说", from: 7.4 }
        ]
      },
      {
        turn: 5, title: "故宫里的双喜", duration: 12,
        cues: [
          { kind: "sprite", icon: "🏯", path: [[320, 380]], size: 200, from: 0.4 },
          { kind: "label", at: [320, 380], text: "坤宁宫东暖阁", side: "bottom", from: 1.4 },
          { kind: "shape", shape: "rect", at: [880, 380], size: [280, 280], color: red, from: 3.4 },
          { kind: "glyph", char: "囍", script: "song", at: [880, 380], size: 220, color: gold, from: 3.8 },
          { kind: "text", at: [600, 800], text: "清朝皇帝大婚的洞房", from: 6.6 }
        ]
      }
    ]
  },
  {
    question: "spring-couplet",
    scenes: [
      {
        turn: 0, title: "从桃符说起", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 460], size: [300, 540], color: "#b0603d", from: 0.3 },
          { kind: "glyph", char: "門", script: "oracle", at: [600, 440], size: 220, color: gold, caption: "甲骨文的门", from: 1 },
          { kind: "shape", shape: "rect", at: [370, 460], size: [100, 400], color: "#f0c89a", text: "桃木", from: 3 },
          { kind: "shape", shape: "rect", at: [830, 460], size: [100, 400], color: "#f0c89a", text: "桃木", from: 3.4 },
          { kind: "sprite", icon: "💂", path: [[370, 330]], size: 80, from: 5 },
          { kind: "sprite", icon: "💂", path: [[830, 330]], size: 80, from: 5.3 },
          { kind: "text", at: [600, 820], text: "桃符：画着两位门神", from: 8 }
        ]
      },
      {
        turn: 1, title: "新桃换旧符", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "总把新桃换旧符", size: "l", from: 0.3 },
          { kind: "sprite", icon: "☀️", path: [[600, 280]], size: 120, from: 1.6 },
          { kind: "shape", shape: "rect", at: [330, 480], size: [120, 360], color: "#c9a37a", text: "旧符", from: 3, to: 8.4 },
          { kind: "arrow", path: [[430, 480], [770, 480]], text: "换", from: 4.4 },
          { kind: "shape", shape: "rect", at: [870, 480], size: [120, 360], color: "#f0c89a", text: "新桃", from: 5.6 },
          { kind: "text", at: [600, 800], text: "王安石《元日》", from: 8 }
        ]
      },
      {
        turn: 2, title: "孟昶的两句", duration: 13,
        cues: [
          { kind: "sprite", icon: "👑", path: [[170, 430]], size: 130, from: 0.4 },
          { kind: "label", at: [170, 430], text: "后蜀国君孟昶", pos: [250, 270], from: 1 },
          { kind: "text", at: [600, 120], text: "964 年前后", from: 2.2 },
          { kind: "shape", shape: "rect", at: [680, 360], size: [560, 110], color: peach, text: "新年纳余庆", from: 3.6 },
          { kind: "shape", shape: "rect", at: [680, 540], size: [560, 110], color: peach, text: "嘉节号长春", from: 5.4 },
          { kind: "text", at: [600, 800], text: "传统说法：最早的春联", from: 9 }
        ]
      },
      {
        turn: 3, title: "敦煌的吉祥话", duration: 12,
        cues: [
          { kind: "sprite", icon: "📜", path: [[600, 300]], size: 200, from: 0.4 },
          { kind: "label", at: [600, 300], text: "唐朝人抄的吉祥话", side: "bottom", from: 1.4 },
          { kind: "shape", shape: "pill", at: [290, 640], size: [340, 100], color: peach, text: "是春联", from: 4 },
          { kind: "shape", shape: "pill", at: [910, 640], size: [340, 100], color: peach, text: "只是吉祥话", from: 5.4 },
          { kind: "sprite", icon: "❓", path: [[600, 640]], size: 100, wobble: true, from: 6.8 },
          { kind: "text", at: [600, 110], text: "专家还在争论", from: 8.4 }
        ]
      },
      {
        turn: 4, title: "对仗：词对词", duration: 13,
        cues: [
          { kind: "text", at: [600, 110], text: "字数一样，词对着词", from: 0.3 },
          { kind: "shape", shape: "pill", at: [380, 290], size: [280, 110], color: peach, text: "天", from: 2 },
          { kind: "shape", shape: "pill", at: [820, 290], size: [280, 110], color: peach, text: "地", from: 2.6 },
          { kind: "shape", shape: "pill", at: [380, 470], size: [280, 110], color: peach, text: "新年", from: 4.6 },
          { kind: "shape", shape: "pill", at: [820, 470], size: [280, 110], color: peach, text: "嘉节", from: 5.2 },
          { kind: "shape", shape: "pill", at: [380, 650], size: [280, 110], color: peach, text: "余庆", from: 7.2 },
          { kind: "shape", shape: "pill", at: [820, 650], size: [280, 110], color: peach, text: "长春", from: 7.8 }
        ]
      },
      {
        turn: 5, title: "春联这个名字", duration: 11,
        cues: [
          { kind: "sprite", icon: "🏮", path: [[300, 360]], size: 150, from: 0.4 },
          { kind: "label", at: [300, 360], text: "明朝：叫开了", side: "bottom", from: 1 },
          { kind: "glyph", char: "聯", script: "seal", at: [600, 360], size: 200, caption: "小篆的联", from: 2.6 },
          { kind: "sprite", icon: "📖", path: [[900, 360]], size: 150, from: 4 },
          { kind: "label", at: [900, 360], text: "据说朱元璋爱看", side: "bottom", from: 4.6 },
          { kind: "text", at: [600, 800], text: "从挂桃符到贴春联", from: 7.4 }
        ]
      }
    ]
  },
  {
    question: "square-beauty",
    scenes: [
      {
        turn: 0, title: "一样大的方格", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [300, 400], size: [240, 240], color: "none", outline: true, from: 0.4 },
          { kind: "glyph", char: "口", at: [300, 400], size: 200, from: 1 },
          { kind: "shape", shape: "rect", at: [600, 400], size: [240, 240], color: "none", outline: true, from: 2 },
          { kind: "glyph", char: "鸣", at: [600, 400], size: 200, from: 2.6 },
          { kind: "shape", shape: "rect", at: [900, 400], size: [240, 240], color: "none", outline: true, from: 3.6 },
          { kind: "glyph", char: "方", at: [900, 400], size: 200, from: 4.2 },
          { kind: "text", at: [600, 800], text: "一个字，住一个方格", from: 6.4 }
        ]
      },
      {
        turn: 1, title: "越变越方", duration: 13,
        cues: [
          { kind: "glyph", char: "鳴", script: "seal", at: [250, 400], size: 240, caption: "小篆：长", from: 0.5 },
          { kind: "shape", shape: "rect", at: [250, 400], size: [170, 300], color: "none", outline: true, from: 1.6 },
          { kind: "shape", shape: "rect", at: [600, 400], size: [300, 170], color: peach, outline: true, text: "隶书：扁", from: 4 },
          { kind: "glyph", char: "鸣", at: [950, 400], size: 230, caption: "楷书：方", from: 7 },
          { kind: "shape", shape: "rect", at: [950, 400], size: [260, 260], color: "none", outline: true, from: 8 },
          { kind: "text", at: [600, 800], text: "长 → 扁 → 方", from: 10 }
        ]
      },
      {
        turn: 2, title: "口在左，口在右", duration: 13,
        cues: [
          { kind: "glyph", char: "鸣", at: [300, 380], size: 260, from: 0.5 },
          { kind: "highlight", at: [215, 350], size: [130, 150], color: red, from: 3 },
          { kind: "glyph", char: "和", at: [900, 380], size: 260, from: 5 },
          { kind: "highlight", at: [975, 420], size: [130, 150], color: red, from: 6.6 },
          { kind: "glyph", char: "呼", at: [300, 680], size: 150, from: 8.4 },
          { kind: "glyph", char: "扣", at: [900, 680], size: 150, from: 9 },
          { kind: "text", at: [600, 110], text: "口在左靠上，口在右靠下", from: 10 }
        ]
      },
      {
        turn: 3, title: "相让：好", view: "grid", duration: 12,
        cues: [
          { kind: "write", char: "好", at: [600, 450], size: 640, stroke: 0.7, mark: [0, 1, 2], color: red, from: 0.5 },
          { kind: "label", at: [440, 450], text: "女字旁收窄", side: "left", from: 5.4 },
          { kind: "label", at: [760, 450], text: "子站得开", side: "right", from: 7 },
          { kind: "text", at: [600, 830], text: "相让：谁也不挤谁", from: 8.6 }
        ]
      },
      {
        turn: 4, title: "避就：逢", view: "grid", duration: 13,
        cues: [
          { kind: "write", char: "逢", at: [600, 450], size: 640, stroke: 0.6, mark: [2, 9], color: red, from: 0.5 },
          { kind: "text", at: [600, 830], text: "上面写成点，长捺让给走之", from: 7.4 }
        ]
      },
      {
        turn: 5, title: "重心稳就好看", duration: 12,
        cues: [
          { kind: "glyph", char: "鸣", at: [320, 400], size: 240, from: 0.5 },
          { kind: "glyph", char: "好", at: [880, 400], size: 240, from: 1.4 },
          { kind: "line", path: [[320, 260], [320, 560]], color: red, width: 4, draw: 1, from: 3 },
          { kind: "line", path: [[880, 260], [880, 560]], color: red, width: 4, draw: 1, from: 3.4 },
          { kind: "text", at: [600, 110], text: "重心稳，不挤不散", from: 4.6 },
          { kind: "myth", wrong: "好看就是左右完全一样", right: "好看是重心稳、不挤不散", from: 7.6 }
        ]
      }
    ]
  },
  {
    question: "paper-respect",
    scenes: [
      {
        turn: 0, title: "红砖小塔", duration: 12,
        cues: [
          { kind: "image", src: "art/xizi-ting.jpg", at: [600, 400], size: [640, 480], caption: "台中石冈惜字亭", from: 0.3 },
          { kind: "glyph", char: "字", script: "oracle", at: [140, 400], size: 150, caption: "字", from: 2.6 },
          { kind: "glyph", char: "惜", script: "seal", at: [1060, 400], size: 150, caption: "惜：爱惜", from: 3.6 },
          { kind: "text", at: [600, 810], text: "惜字亭：烧字纸的小塔", from: 6.4 }
        ]
      },
      {
        turn: 1, title: "颜氏家训", duration: 12,
        cues: [
          { kind: "sprite", icon: "📖", path: [[300, 380]], size: 180, from: 0.4 },
          { kind: "label", at: [300, 380], text: "《颜氏家训》", side: "bottom", from: 1.2 },
          { kind: "text", at: [600, 110], text: "带字的旧纸，不敢乱用", from: 3.4 },
          { kind: "glyph", char: "紙", script: "seal", at: [880, 380], size: 240, caption: "小篆的纸", from: 5.4 },
          { kind: "text", at: [600, 800], text: "尊重字和写字的人", from: 8.4 }
        ]
      },
      {
        turn: 2, title: "敬惜字纸", duration: 12,
        cues: [
          { kind: "text", at: [600, 130], text: "敬惜字纸", size: "l", from: 0.3 },
          { kind: "shape", shape: "pill", at: [250, 420], size: [280, 110], color: peach, text: "惜字亭", from: 2 },
          { kind: "shape", shape: "pill", at: [600, 420], size: [280, 110], color: peach, text: "惜字塔", from: 3.2 },
          { kind: "shape", shape: "pill", at: [950, 420], size: [280, 110], color: peach, text: "字库塔", from: 4.4 },
          { kind: "flow", path: [[120, 640], [1080, 640]], icon: "📄", count: 5, size: 30, from: 6.4 },
          { kind: "text", at: [600, 800], text: "明朝、清朝特别流行", from: 7.6 }
        ]
      },
      {
        turn: 3, title: "纸灰送进河", duration: 13,
        cues: [
          { kind: "sprite", icon: "📄", path: [[220, 360]], size: 150, from: 0.4 },
          { kind: "arrow", path: [[330, 360], [480, 360]], from: 2 },
          { kind: "sprite", icon: "🔥", path: [[600, 360]], size: 150, from: 2.8 },
          { kind: "arrow", path: [[720, 360], [870, 360]], from: 4.4 },
          { kind: "sprite", icon: "🌊", path: [[980, 360]], size: 150, from: 5.2 },
          { kind: "flow", path: [[860, 540], [1120, 540]], color: water, count: 6, from: 6 },
          { kind: "text", at: [600, 800], text: "收纸 → 烧纸 → 送灰", from: 8 }
        ]
      },
      {
        turn: 4, title: "还留着的塔", duration: 13,
        cues: [
          { kind: "text", at: [880, 260], text: "重庆东阳字库塔", from: 0.4 },
          { kind: "text", at: [880, 380], text: "1668 年", size: "l", from: 2.4 },
          { kind: "image", src: "art/xizi-ting.jpg", at: [380, 430], size: [520, 390], caption: "台中石冈惜字亭", from: 5.6 },
          { kind: "text", at: [880, 560], text: "台湾：还有很多", from: 6.6 }
        ]
      },
      {
        turn: 5, title: "今天爱惜书本", duration: 12,
        cues: [
          { kind: "sprite", icon: "♻️", path: [[250, 370]], size: 150, from: 0.4 },
          { kind: "label", at: [250, 370], text: "用完的纸回收", side: "bottom", from: 1 },
          { kind: "sprite", icon: "📚", path: [[600, 370]], size: 150, from: 3.4 },
          { kind: "label", at: [600, 370], text: "书摆整齐", side: "bottom", from: 4 },
          { kind: "sprite", icon: "🎁", path: [[950, 370]], size: 150, from: 5.8 },
          { kind: "label", at: [950, 370], text: "旧书送人", side: "bottom", from: 6.4 },
          { kind: "text", at: [600, 800], text: "爱惜书本，爱惜字", from: 8.6 }
        ]
      }
    ]
  }
];
