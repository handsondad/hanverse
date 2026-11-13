import type { Film } from "./types";

const red = "#d9453a";
const orange = "#ff7a2f";

export const films: readonly Film[] = [
  {
    question: "triple-stack",
    scenes: [
      {
        turn: 0, title: "三个火叠起来", duration: 11,
        cues: [
          { kind: "glyph", char: "火", at: [180, 280], size: 170, color: red, path: [[600, 290]], travel: 1.4, from: 0.5, to: 4.6 },
          { kind: "glyph", char: "火", at: [180, 660], size: 170, color: red, path: [[505, 465]], travel: 1.4, from: 1.2, to: 4.6 },
          { kind: "glyph", char: "火", at: [1020, 660], size: 170, color: red, path: [[695, 465]], travel: 1.4, from: 1.9, to: 4.6 },
          { kind: "evolve", at: [600, 380], size: 280, every: 1.6, from: 4.6, forms: [{ script: "oracle", char: "焱" }, { script: "seal", char: "焱" }, { script: "kai", char: "焱" }] },
          { kind: "sprite", icon: "🔥", path: [[960, 380]], size: 120, wobble: true, from: 6 },
          { kind: "text", at: [600, 800], text: "焱：读火焰的「焰」", from: 8 }
        ]
      },
      {
        turn: 1, title: "品、晶、森", duration: 12,
        cues: [
          { kind: "glyph", char: "品", script: "oracle", at: [260, 400], size: 210, caption: "三个口：品", from: 0.5 },
          { kind: "glyph", char: "晶", script: "oracle", at: [600, 400], size: 210, caption: "三个日：晶", from: 2.5 },
          { kind: "glyph", char: "森", script: "oracle", at: [940, 400], size: 210, caption: "三棵树：森", from: 4.5 },
          { kind: "text", at: [600, 800], text: "《说文解字》里就有", from: 7 }
        ]
      },
      {
        turn: 2, title: "更难认的叠字", duration: 13,
        cues: [
          { kind: "glyph", char: "淼", script: "seal", at: [210, 380], size: 190, caption: "淼：大水", from: 0.5 },
          { kind: "glyph", char: "羴", script: "seal", at: [470, 380], size: 190, caption: "羴：羊膻味", from: 2.8 },
          { kind: "glyph", char: "驫", script: "seal", at: [730, 380], size: 190, caption: "驫：一群马", from: 5.1 },
          { kind: "glyph", char: "鱻", script: "seal", at: [990, 380], size: 190, caption: "鱻：鲜", from: 7.4 },
          { kind: "text", at: [600, 800], text: "读：秒、山、标、先", from: 9.6 }
        ]
      },
      {
        turn: 3, title: "三个就是很多", duration: 12,
        cues: [
          { kind: "glyph", char: "眾", script: "oracle", at: [320, 420], size: 260, caption: "众：好多人", from: 0.5 },
          { kind: "highlight", at: [320, 490], size: [250, 130], color: red, from: 2, to: 4.5 },
          { kind: "glyph", char: "磊", script: "seal", at: [880, 420], size: 260, caption: "磊：一堆石头", from: 4.5 },
          { kind: "text", at: [600, 110], text: "三个 = 很多", from: 7 },
          { kind: "text", at: [600, 800], text: "古人常用「三」表示多", from: 9 }
        ]
      },
      {
        turn: 4, title: "鑫和犇是后来的", duration: 12,
        cues: [
          { kind: "glyph", char: "鑫", at: [330, 380], size: 240, caption: "三个金", from: 0.4 },
          { kind: "glyph", char: "犇", script: "song", at: [870, 380], size: 240, caption: "三头牛", from: 1.8 },
          { kind: "sprite", icon: "📖", path: [[600, 340]], size: 110, from: 3.4 },
          { kind: "label", at: [600, 340], text: "《说文》里没有", side: "top", from: 3.8 },
          { kind: "myth", wrong: "叠起来的字都是老字", right: "鑫、犇是后来才有的字", from: 6.5 }
        ]
      }
    ]
  },
  {
    question: "biang",
    scenes: [
      {
        turn: 0, title: "面馆招牌上的字", duration: 11,
        cues: [
          { kind: "sprite", icon: "🍜", path: [[240, 440]], size: 220, from: 0.3 },
          { kind: "text", at: [780, 360], text: "繁体写法：58 画", size: "l", from: 2 },
          { kind: "text", at: [780, 520], text: "简体写法：四十多画", size: "l", from: 5.2 },
          { kind: "text", at: [600, 800], text: "biáng biáng 面", from: 8 }
        ]
      },
      {
        turn: 1, title: "面条拍案板", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [700, 610], size: [620, 70], color: "#c99b63", from: 0.3 },
          { kind: "sprite", icon: "👨‍🍳", path: [[240, 450]], size: 160, from: 0.6 },
          { kind: "sprite", icon: "〰️", path: [[700, 360], [700, 560]], size: 200, travel: 0.5, wobble: true, from: 2 },
          { kind: "pulse", at: [700, 600], color: "#ff9f43", radius: 140, from: 2.5 },
          { kind: "text", at: [600, 200], text: "biáng！biáng！", size: "l", from: 2.8 },
          { kind: "text", at: [600, 800], text: "面条拍在案板上的声音", from: 6 }
        ]
      },
      {
        turn: 2, title: "先拼中间两排", duration: 12,
        cues: [
          { kind: "glyph", char: "言", script: "song", at: [600, 330], size: 170, from: 0.5 },
          { kind: "glyph", char: "幺", script: "song", at: [180, 330], size: 150, color: orange, path: [[430, 330]], travel: 1.2, from: 1.6 },
          { kind: "glyph", char: "幺", script: "song", at: [1020, 330], size: 150, color: orange, path: [[770, 330]], travel: 1.2, from: 1.9 },
          { kind: "glyph", char: "馬", script: "song", at: [600, 530], size: 170, from: 4.5 },
          { kind: "glyph", char: "長", script: "song", at: [180, 530], size: 150, color: orange, path: [[430, 530]], travel: 1.2, from: 5.6 },
          { kind: "glyph", char: "長", script: "song", at: [1020, 530], size: 150, color: orange, path: [[770, 530]], travel: 1.2, from: 5.9 },
          { kind: "text", at: [600, 800], text: "左右各一个", from: 8.4 }
        ]
      },
      {
        turn: 3, title: "外面再围两圈", duration: 14,
        cues: [
          { kind: "glyph", char: "幺", script: "song", at: [603, 350], size: 80, color: orange, from: 0, to: 2.2 },
          { kind: "glyph", char: "言", script: "song", at: [683, 350], size: 80, from: 0, to: 2.2 },
          { kind: "glyph", char: "幺", script: "song", at: [763, 350], size: 80, color: orange, from: 0, to: 2.2 },
          { kind: "glyph", char: "長", script: "song", at: [603, 470], size: 80, color: orange, from: 0, to: 2.2 },
          { kind: "glyph", char: "馬", script: "song", at: [683, 470], size: 80, from: 0, to: 2.2 },
          { kind: "glyph", char: "長", script: "song", at: [763, 470], size: 80, color: orange, from: 0, to: 2.2 },
          { kind: "shape", shape: "rect", at: [683, 410], size: [250, 250], color: "none", outline: true, text: "刚拼好的", from: 1.4 },
          { kind: "glyph", char: "月", script: "song", at: [180, 410], size: 110, path: [[495, 410]], travel: 1.2, from: 2.6 },
          { kind: "glyph", char: "刂", script: "song", at: [1100, 410], size: 110, path: [[870, 410]], travel: 1.2, from: 3.6 },
          { kind: "glyph", char: "心", script: "song", at: [683, 860], size: 110, path: [[683, 610]], travel: 1.2, from: 4.6 },
          { kind: "glyph", char: "穴", script: "song", at: [683, -60], size: 120, color: red, path: [[683, 190]], travel: 1.2, from: 6.6 },
          { kind: "glyph", char: "辶", script: "song", at: [560, 450], size: 820, color: red, from: 8.6 },
          { kind: "label", at: [820, 800], text: "走之旁兜一圈", pos: [1000, 700], from: 10.2 }
        ]
      },
      {
        turn: 4, title: "电脑打不出来", duration: 12,
        cues: [
          { kind: "sprite", icon: "💻", path: [[330, 400]], size: 200, from: 0.3 },
          { kind: "label", at: [330, 330], text: "打不出来", side: "top", from: 1.2 },
          { kind: "text", at: [820, 330], text: "2020 年才收进去", from: 4 },
          { kind: "sprite", icon: "📖", path: [[820, 540]], size: 140, from: 7 },
          { kind: "label", at: [820, 540], text: "《康熙字典》：没有", side: "bottom", from: 7.8 }
        ]
      },
      {
        turn: 5, title: "零件都是老字", duration: 13,
        cues: [
          { kind: "sprite", icon: "📝", path: [[220, 300]], size: 120, from: 0.3 },
          { kind: "label", at: [220, 300], text: "顺口溜", side: "bottom", from: 1 },
          { kind: "evolve", at: [600, 360], size: 240, every: 1.8, from: 3, forms: [{ script: "oracle", char: "馬" }, { script: "seal", char: "馬" }, { script: "song", char: "馬", label: "繁体" }, { script: "kai", char: "马", label: "简体" }] },
          { kind: "glyph", char: "心", script: "oracle", at: [970, 360], size: 200, caption: "甲骨文的心", from: 6.5 },
          { kind: "text", at: [600, 800], text: "中间、第一圈、外一圈", from: 9.6 }
        ]
      }
    ]
  },
  {
    question: "riddles",
    scenes: [
      {
        turn: 0, title: "一口咬掉牛尾巴", duration: 13,
        cues: [
          { kind: "text", at: [600, 110], text: "一口咬掉牛尾巴", from: 0.3 },
          { kind: "glyph", char: "牛", at: [330, 420], size: 260, caption: "牛", from: 0.8 },
          { kind: "sprite", icon: "✂️", path: [[450, 500]], size: 80, from: 2.2, to: 4.4 },
          { kind: "line", path: [[270, 500], [390, 500]], color: red, width: 8, from: 2.6 },
          { kind: "write", char: "告", at: [850, 440], size: 380, stroke: 0.6, mark: [0, 1, 2, 3], from: 4.5 },
          { kind: "text", at: [600, 800], text: "谜底：告", size: "l", from: 9.6 }
        ]
      },
      {
        turn: 1, title: "拆成零件编句话", duration: 13,
        cues: [
          { kind: "text", at: [600, 150], text: "一人一张口，口下长出一只手", from: 0.3 },
          { kind: "glyph", char: "人", at: [150, 330], size: 150, path: [[380, 330]], travel: 1.2, from: 0.8, to: 4.6 },
          { kind: "glyph", char: "一", at: [510, 720], size: 150, path: [[510, 330]], travel: 1.2, from: 1.3, to: 4.6 },
          { kind: "glyph", char: "口", at: [1050, 330], size: 150, path: [[640, 330]], travel: 1.2, from: 1.8, to: 4.6 },
          { kind: "glyph", char: "合", at: [510, 330], size: 220, from: 4.6, to: 9 },
          { kind: "glyph", char: "手", at: [510, 860], size: 180, color: orange, path: [[510, 560]], travel: 1.2, from: 6, to: 9 },
          { kind: "glyph", char: "拿", at: [600, 450], size: 320, motion: "pulse", from: 9 },
          { kind: "text", at: [600, 800], text: "谜底：拿", size: "l", from: 10.4 }
        ]
      },
      {
        turn: 2, title: "两个月亮做朋友", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "两个月亮做朋友", from: 0.3 },
          { kind: "sprite", icon: "🌙", path: [[300, 400]], size: 140, from: 0.8, to: 4.5 },
          { kind: "sprite", icon: "🌙", path: [[900, 400]], size: 140, from: 1.2, to: 4.5 },
          { kind: "glyph", char: "月", at: [300, 400], size: 200, path: [[520, 400]], travel: 1.4, from: 4.5, to: 7.5 },
          { kind: "glyph", char: "月", at: [900, 400], size: 200, path: [[680, 400]], travel: 1.4, from: 4.6, to: 7.5 },
          { kind: "glyph", char: "朋", at: [600, 400], size: 300, motion: "pulse", from: 7.5 },
          { kind: "text", at: [600, 800], text: "谜底：朋", size: "l", from: 8.6 }
        ]
      },
      {
        turn: 3, title: "朋：两串贝壳", duration: 13,
        cues: [
          { kind: "flow", path: [[230, 170], [230, 570]], icon: "🐚", count: 5, speed: 0, size: 18, from: 0.5 },
          { kind: "flow", path: [[340, 170], [340, 570]], icon: "🐚", count: 5, speed: 0, size: 18, from: 0.9 },
          { kind: "label", at: [285, 560], text: "一串串贝壳", side: "bottom", from: 1.8, to: 8.8 },
          { kind: "evolve", at: [820, 370], size: 260, every: 2, from: 3.5, forms: [{ script: "oracle", char: "朋" }, { script: "seal", char: "朋" }, { script: "kai", char: "朋" }] },
          { kind: "myth", wrong: "朋是两个月亮拼成的", right: "朋本来像两串贝壳", from: 9 }
        ]
      },
      {
        turn: 4, title: "告：正好对得上", duration: 12,
        cues: [
          { kind: "glyph", char: "告", script: "oracle", at: [280, 400], size: 240, caption: "甲骨文的告", from: 0.4 },
          { kind: "glyph", char: "告", script: "seal", at: [620, 400], size: 240, caption: "小篆的告", from: 1.8 },
          { kind: "sprite", icon: "✅", path: [[940, 340]], size: 120, from: 4 },
          { kind: "label", at: [940, 340], text: "零件对得上", side: "bottom", from: 4.6 },
          { kind: "text", at: [600, 800], text: "猜着玩，别当来历", from: 7 }
        ]
      },
      {
        turn: 5, title: "自己编一个", duration: 12,
        cues: [
          { kind: "shape", shape: "pill", at: [230, 420], size: [280, 110], color: "#ffe2c4", text: "挑一个字", from: 0.5 },
          { kind: "arrow", path: [[385, 420], [445, 420]], from: 2 },
          { kind: "shape", shape: "pill", at: [600, 420], size: [280, 110], color: "#ffe2c4", text: "拆成零件", from: 2.5 },
          { kind: "arrow", path: [[755, 420], [815, 420]], from: 4 },
          { kind: "shape", shape: "pill", at: [970, 420], size: [280, 110], color: "#ffe2c4", text: "编成一句话", from: 4.5 },
          { kind: "text", at: [600, 800], text: "编好了，自己先猜一遍", from: 7.5 }
        ]
      },
      {
        turn: 6, title: "小念的字谜", duration: 10,
        cues: [
          { kind: "text", at: [600, 110], text: "一个人靠着一棵树", from: 0.3 },
          { kind: "glyph", char: "人", at: [200, 430], size: 200, path: [[500, 430]], travel: 1.4, from: 1, to: 4.6 },
          { kind: "glyph", char: "木", at: [1000, 430], size: 200, path: [[700, 430]], travel: 1.4, from: 1.3, to: 4.6 },
          { kind: "glyph", char: "休", script: "oracle", at: [600, 430], size: 300, caption: "甲骨文的休", from: 4.6, to: 7 },
          { kind: "glyph", char: "休", at: [600, 430], size: 300, motion: "pulse", from: 7 },
          { kind: "text", at: [600, 800], text: "谜底：休", size: "l", from: 7.6 }
        ]
      }
    ]
  },
  {
    question: "big-numbers",
    scenes: [
      {
        turn: 0, title: "一横太好改", duration: 12,
        cues: [
          { kind: "write", char: "三", at: [330, 420], size: 380, stroke: 1.2, mark: [1, 2], from: 0.5 },
          { kind: "sprite", icon: "🕵️", path: [[600, 260]], size: 110, wobble: true, from: 1.4, to: 5.6 },
          { kind: "label", at: [600, 260], text: "偷偷加一笔", side: "right", from: 1.8, to: 5.6 },
          { kind: "glyph", char: "壹", at: [870, 420], size: 260, caption: "改不了", from: 6 },
          { kind: "sprite", icon: "🔒", path: [[1050, 270]], size: 90, from: 7.2 },
          { kind: "text", at: [600, 800], text: "支票上写「壹」", from: 8.6 }
        ]
      },
      {
        turn: 1, title: "一二三都好改", duration: 13,
        cues: [
          { kind: "glyph", char: "一", script: "oracle", at: [230, 380], size: 200, caption: "甲骨文的一", from: 0.4 },
          { kind: "glyph", char: "二", script: "oracle", at: [480, 380], size: 200, caption: "甲骨文的二", from: 1.4 },
          { kind: "glyph", char: "三", script: "oracle", at: [730, 380], size: 200, caption: "甲骨文的三", from: 2.4 },
          { kind: "glyph", char: "十", at: [990, 380], size: 200, color: red, caption: "一加一竖", from: 4.4 },
          { kind: "text", at: [600, 800], text: "壹 贰 叁 …… 拾", size: "l", from: 7.6 }
        ]
      },
      {
        turn: 2, title: "不是朱元璋发明的", duration: 13,
        cues: [
          { kind: "sprite", icon: "🎋", path: [[230, 340]], size: 150, from: 0.5 },
          { kind: "label", at: [230, 340], text: "战国：零星有", side: "bottom", from: 1 },
          { kind: "sprite", icon: "📒", path: [[600, 340]], size: 150, from: 3 },
          { kind: "label", at: [600, 340], text: "唐朝：很常见", side: "bottom", from: 3.5 },
          { kind: "sprite", icon: "👑", path: [[970, 340]], size: 150, from: 5.5 },
          { kind: "label", at: [970, 340], text: "明朝：下令要用", side: "bottom", from: 6 },
          { kind: "myth", wrong: "大写数字是朱元璋发明的", right: "朱元璋是推广，不是发明", from: 8.5 }
        ]
      },
      {
        turn: 3, title: "借来的字", duration: 13,
        cues: [
          { kind: "glyph", char: "拾", script: "seal", at: [250, 380], size: 220, caption: "拾：捡起来", from: 0.5 },
          { kind: "glyph", char: "陸", script: "seal", at: [600, 380], size: 220, caption: "陆：陆地", from: 3.5 },
          { kind: "glyph", char: "玖", script: "seal", at: [950, 380], size: 220, caption: "玖：黑石头", from: 6.5 },
          { kind: "text", at: [600, 800], text: "读音一样，借来用", from: 9 }
        ]
      },
      {
        turn: 4, title: "写钱数才用", duration: 12,
        cues: [
          { kind: "sprite", icon: "📓", path: [[320, 380]], size: 160, from: 0.5 },
          { kind: "label", at: [320, 380], text: "写作业：一二三", side: "bottom", from: 1 },
          { kind: "sprite", icon: "🧾", path: [[880, 380]], size: 160, from: 3 },
          { kind: "label", at: [880, 380], text: "写钱数：壹贰叁", side: "bottom", from: 3.6 },
          { kind: "text", at: [600, 800], text: "防的是偷偷添笔画", from: 7 }
        ]
      }
    ]
  },
  {
    question: "lookalike-twins",
    scenes: [
      {
        turn: 0, title: "像四胞胎的四个字", duration: 11,
        cues: [
          { kind: "glyph", char: "戊", at: [180, 420], size: 190, caption: "戊：读物", motion: "wiggle", from: 0.4 },
          { kind: "glyph", char: "戌", at: [460, 420], size: 190, caption: "戌：读须", motion: "wiggle", from: 1.2 },
          { kind: "glyph", char: "戍", at: [740, 420], size: 190, caption: "戍：读树", motion: "wiggle", from: 2 },
          { kind: "glyph", char: "戎", at: [1020, 420], size: 190, caption: "戎：读荣", motion: "wiggle", from: 2.8 },
          { kind: "sprite", icon: "❓", path: [[600, 165]], size: 110, wobble: true, from: 3.8 },
          { kind: "text", at: [600, 800], text: "外框都像「戈」，古文字却不同", from: 6.4 }
        ]
      },
      {
        turn: 1, title: "戊和戌：两把大斧钺", duration: 12,
        cues: [
          { kind: "sprite", icon: "🪓", path: [[600, 180]], size: 110, from: 0.4 },
          { kind: "glyph", char: "戊", script: "oracle", at: [320, 420], size: 250, caption: "甲骨文的戊", from: 1 },
          { kind: "label", at: [320, 290], text: "弯弧平刃的大斧", side: "left", from: 2.4 },
          { kind: "glyph", char: "戌", script: "oracle", at: [880, 420], size: 250, caption: "甲骨文的戌", from: 4 },
          { kind: "label", at: [880, 290], text: "刃口外鼓的大钺", side: "right", from: 5.4 },
          { kind: "text", at: [600, 800], text: "后来借去记日子", from: 8.2 }
        ]
      },
      {
        turn: 2, title: "戍：人扛着戈守边", duration: 13,
        cues: [
          { kind: "glyph", char: "人", script: "oracle", at: [240, 420], size: 200, color: red, caption: "人", path: [[490, 420]], travel: 1.4, from: 0.4, to: 4.2 },
          { kind: "glyph", char: "戈", script: "oracle", at: [960, 420], size: 200, caption: "戈", path: [[710, 420]], travel: 1.4, from: 0.8, to: 4.2 },
          { kind: "evolve", at: [340, 390], size: 250, every: 1.6, from: 4.2, forms: [{ script: "oracle", char: "戍" }, { script: "seal", char: "戍" }] },
          { kind: "write", char: "戍", at: [820, 410], size: 360, grid: true, stroke: 0.5, mark: [2], from: 6.4 },
          { kind: "label", at: [775, 455], text: "人缩成了一点", pos: [820, 185], from: 8.4 },
          { kind: "text", at: [600, 810], text: "人持戈：守卫边疆", from: 10 }
        ]
      },
      {
        turn: 3, title: "戎：有攻又有防", duration: 13,
        cues: [
          { kind: "sprite", icon: "🛡️", path: [[250, 200]], size: 100, from: 0.4, to: 4.6 },
          { kind: "glyph", char: "十", script: "oracle", at: [250, 430], size: 200, color: "#2f7d32", caption: "盾牌铠甲", path: [[490, 430]], travel: 1.4, from: 0.6, to: 4.6 },
          { kind: "glyph", char: "戈", script: "oracle", at: [950, 430], size: 200, color: red, caption: "长戈进攻", path: [[710, 430]], travel: 1.4, from: 1, to: 4.6 },
          { kind: "evolve", at: [400, 390], size: 260, every: 1.8, from: 4.6, forms: [{ script: "oracle", char: "戎" }, { script: "seal", char: "戎" }, { script: "kai", char: "戎" }] },
          { kind: "glyph", char: "甲", script: "seal", at: [860, 390], size: 210, color: "#2f7d32", caption: "小篆写成甲", from: 6.4 },
          { kind: "text", at: [600, 800], text: "兵器和军装：投笔从戎", from: 9.4 }
        ]
      },
      {
        turn: 4, title: "拉直外框，撞脸啦", duration: 12,
        cues: [
          { kind: "evolve", at: [180, 380], size: 195, every: 2.2, from: 0.4, forms: [{ script: "oracle", char: "戊" }, { script: "seal", char: "戊" }, { script: "kai", char: "戊" }] },
          { kind: "evolve", at: [460, 380], size: 195, every: 2.2, from: 0.8, forms: [{ script: "oracle", char: "戌" }, { script: "seal", char: "戌" }, { script: "kai", char: "戌" }] },
          { kind: "evolve", at: [740, 380], size: 195, every: 2.2, from: 1.2, forms: [{ script: "oracle", char: "戍" }, { script: "seal", char: "戍" }, { script: "kai", char: "戍" }] },
          { kind: "evolve", at: [1020, 380], size: 195, every: 2.2, from: 1.6, forms: [{ script: "oracle", char: "戎" }, { script: "seal", char: "戎" }, { script: "kai", char: "戎" }] },
          { kind: "text", at: [600, 115], text: "外框统一拉直成「戈」", from: 5.2 },
          { kind: "myth", wrong: "四个字本来就长一样", right: "本来画四样军备，后来撞脸", from: 7.4 }
        ]
      },
      {
        turn: 5, title: "口诀记清四胞胎", duration: 11,
        cues: [
          { kind: "glyph", char: "戊", at: [180, 410], size: 200, caption: "戊：中空", from: 0.4 },
          { kind: "glyph", char: "戌", at: [460, 410], size: 200, color: red, caption: "戌：一横", from: 1.5 },
          { kind: "glyph", char: "戍", at: [740, 410], size: 200, color: orange, caption: "戍：一点(人)", from: 2.6 },
          { kind: "glyph", char: "戎", at: [1020, 410], size: 200, color: "#2f7d32", caption: "戎：十字(甲)", from: 3.7 },
          { kind: "text", at: [600, 120], text: "横戌点戍戊中空", size: "l", from: 5.4 },
          { kind: "text", at: [600, 790], text: "十字交叉就念戎", size: "l", from: 7.2 }
        ]
      }
    ]
  },
  {
    question: "palindrome-words",
    scenes: [
      {
        turn: 0, title: "正念倒念都一样", duration: 12,
        cues: [
          { kind: "text", at: [600, 115], text: "上海自来水来自海上", size: "l", from: 0.3 },
          { kind: "glyph", char: "水", at: [600, 410], size: 210, color: "#4fb6ff", caption: "正中间", from: 0.8 },
          { kind: "glyph", char: "上", at: [160, 410], size: 160, color: red, from: 1.4, to: 5.8 },
          { kind: "glyph", char: "海", at: [370, 410], size: 160, color: orange, from: 1.8, to: 5.8 },
          { kind: "glyph", char: "海", at: [830, 410], size: 160, color: orange, from: 2.2, to: 5.8 },
          { kind: "glyph", char: "上", at: [1040, 410], size: 160, color: red, from: 2.6, to: 5.8 },
          { kind: "glyph", char: "自", at: [160, 410], size: 160, color: "#2f7d32", from: 5.8 },
          { kind: "glyph", char: "来", at: [370, 410], size: 160, color: "#b48cff", from: 6.1 },
          { kind: "glyph", char: "来", at: [830, 410], size: 160, color: "#b48cff", from: 6.4 },
          { kind: "glyph", char: "自", at: [1040, 410], size: 160, color: "#2f7d32", from: 6.7 },
          { kind: "text", at: [600, 800], text: "回文：像小积木换顺序", from: 8.4 }
        ]
      },
      {
        turn: 1, title: "换个顺序意思全变", duration: 13,
        cues: [
          { kind: "glyph", char: "蜜", at: [420, 410], size: 200, color: orange, from: 0.4, to: 2.2 },
          { kind: "glyph", char: "蜂", at: [740, 410], size: 200, from: 0.4, to: 2.2 },
          { kind: "sprite", icon: "🐝", path: [[1010, 410]], size: 130, wobble: true, from: 0.6, to: 2.2 },
          { kind: "glyph", char: "蜜", at: [420, 410], size: 200, color: orange, path: [[580, 230], [740, 410]], travel: 1.4, from: 2.2, to: 6.4 },
          { kind: "glyph", char: "蜂", at: [740, 410], size: 200, path: [[580, 590], [420, 410]], travel: 1.4, from: 2.2, to: 6.4 },
          { kind: "sprite", icon: "🍯", path: [[1010, 410]], size: 130, from: 3.7, to: 6.4 },
          { kind: "glyph", char: "刷", at: [420, 410], size: 200, color: "#4fb6ff", from: 6.6, to: 8.4 },
          { kind: "glyph", char: "牙", at: [740, 410], size: 200, from: 6.6, to: 8.4 },
          { kind: "label", at: [580, 240], text: "刷牙：动作", side: "top", from: 6.8, to: 8.4 },
          { kind: "glyph", char: "刷", at: [420, 410], size: 200, color: "#4fb6ff", path: [[580, 230], [740, 410]], travel: 1.4, from: 8.4 },
          { kind: "glyph", char: "牙", at: [740, 410], size: 200, path: [[580, 590], [420, 410]], travel: 1.4, from: 8.4 },
          { kind: "sprite", icon: "🪥", path: [[1010, 410]], size: 130, from: 9.9 },
          { kind: "text", at: [600, 800], text: "故事 ↔ 事故：差远啦", from: 10.2 }
        ]
      },
      {
        turn: 2, title: "客上天然居", duration: 12,
        cues: [
          { kind: "glyph", char: "客", at: [180, 360], size: 155, from: 0.4 },
          { kind: "glyph", char: "上", at: [390, 360], size: 155, from: 0.7 },
          { kind: "glyph", char: "天", at: [600, 360], size: 155, color: red, from: 1 },
          { kind: "glyph", char: "然", at: [810, 360], size: 155, from: 1.3 },
          { kind: "glyph", char: "居", at: [1020, 360], size: 155, from: 1.6 },
          { kind: "arrow", path: [[180, 200], [1020, 200]], color: "#2f7d32", text: "正读：客上天然居", from: 2.4, to: 8.2 },
          { kind: "arrow", path: [[1020, 530], [180, 530]], color: orange, text: "倒读：居然天上客", from: 5, to: 8.2 },
          { kind: "myth", wrong: "乾隆和纪晓岚对句是真事", right: "对对子的故事是民间传说", from: 8.4 }
        ]
      },
      {
        turn: 3, title: "841 字的《璇玑图》", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [360, 430], size: [380, 380], color: "#ffe2c4", outline: true, from: 0.4 },
          { kind: "glyph", char: "心", script: "seal", at: [360, 430], size: 170, color: red, caption: "大方阵", from: 1 },
          { kind: "label", at: [360, 235], text: "横竖各 29 个字", side: "top", from: 2 },
          { kind: "count", at: [860, 360], label: "《璇玑图》", start: 0, end: 841, unit: "个字", from: 3.2 },
          { kind: "arrow", path: [[190, 270], [530, 590]], color: orange, text: "横竖斜都能读", from: 6.2 },
          { kind: "text", at: [600, 800], text: "苏蕙织锦：读出几千首诗", from: 8.4 }
        ]
      },
      {
        turn: 4, title: "茶壶上的五字环", duration: 13,
        cues: [
          { kind: "sprite", icon: "🫖", path: [[600, 430]], size: 130, from: 0.4 },
          { kind: "glyph", char: "可", script: "seal", at: [600, 175], size: 145, caption: "可", from: 0.8 },
          { kind: "glyph", char: "以", script: "seal", at: [842, 351], size: 145, caption: "以", from: 1.2 },
          { kind: "glyph", char: "清", script: "seal", at: [750, 636], size: 145, caption: "清", from: 1.6 },
          { kind: "glyph", char: "心", script: "seal", at: [450, 636], size: 145, caption: "心", from: 2 },
          { kind: "glyph", char: "也", script: "seal", at: [358, 351], size: 145, caption: "也", from: 2.4 },
          { kind: "flow", path: [[600, 175], [842, 351], [750, 636], [450, 636], [358, 351], [600, 175]], color: orange, count: 8, from: 3 },
          { kind: "text", at: [600, 835], text: "可以清心也 · 以清心也可", from: 4, to: 8.2 },
          { kind: "text", at: [600, 835], text: "清心也可以 · 心也可以清", from: 8.4 }
        ]
      }
    ]
  }
];
