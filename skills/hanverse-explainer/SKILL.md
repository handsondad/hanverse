---
name: hanverse-explainer
description: >-
  Writes new 汉字奇遇记 content in the house style: a 小念 × 爸爸 question-and-answer dialogue
  about Chinese characters, a matching narrated explainer animation with oracle-bone, seal and
  regular-script glyphs, stroke-order writing and script evolution, the voice clips, and page UI
  that fits the warm, kid-friendly design. Use when adding or revising a character question,
  writing or fixing an explainer film (src/data/films), generating narration, adding a topic, or
  styling pages in the hanverse repo, or when the user mentions 小念, 爸爸, 讲解动画, 配音, 甲骨文,
  小篆, 笔顺, 一个字的一生 or 新问题.
---

# 汉字奇遇记：写问答、做讲解动画

目标只有一个：孩子从头听到尾，就真的弄懂了标题里的那个问题。问答负责把道理讲对、讲顺，动画负责让孩子"看见"字是怎么来的、怎么变的，配音让孩子不认字也能跟着听。三样东西讲同一件事，节奏一致。

## 先弄清楚

- 仓库结构、命令、硬性规矩见根目录 `AGENTS.md`。
- 问答怎么写：[dialogue.md](dialogue.md)
- 动画怎么做（数据格式、元素、配方、排版）：[film.md](film.md)
- 页面风格：[design.md](design.md)
- 讲汉字时可以直接用的事实和出处：[facts.md](facts.md)。**不在这里的说法，先查到可靠出处再写**。

## 做一个新问题

照这个清单走，每一步过了检查再走下一步：

```
- [ ] 1. 选题：小念真会遇到的一件事（认字、写字、看到招牌和古董），答案能落到几个具体的字上
- [ ] 2. 问答：写进 src/data/questions/<主题>.ts → node tests/dialogue-rules.mjs <文件> 通过
- [ ] 3. 核对事实：每个说法都站得住；学界有争议的写"有人认为""科学家还在争论"；不编数字
- [ ] 4. 分镜：每轮问答一场戏，先列出每场的底图、出现顺序和那一句台词
- [ ] 5. 动画：写进 src/data/films/<主题>.ts → node tests/film-rules.mjs <文件> 通过
- [ ] 6. 用到新的小篆字、新的 write 字：npm run fonts、npm run strokes
- [ ] 7. 配音：npm run voice -- <问题id>
- [ ] 8. npm run typecheck && npm test && npm run build
- [ ] 9. 浏览器里看：#/q/<问题id>，开声音从头听一遍，再看手机宽度；点一个字进 #/zi/<字> 看看
```

## 讲法（问答）

- **小念是男孩**，7 岁左右，刚上小学在学认字写字，好奇、爱追问。他说话像孩子："马怎么站起来了？"
- **爸爸**温和、具体、不说教。先拿孩子见过的东西打比方（画画、拼积木、贴标签、路标），再说出真名一次（"……这种字叫象形字"）。
- **从字出发**：每个道理都落到具体的字上，说出字，再说它像什么。比如说会意，就讲"人靠着树是休"，不要空讲定义。
- **一条追问链**：每个追问都接着爸爸上一句里的一个词往深里问。顺序一般是：这个字像什么 → 古人为什么这样造 → 后来怎么变了 → 常见误会 → 我能怎么用（认字、写字的小窍门）。
- **最后一轮**：小念说"我懂了！"，用自己的话串一遍；爸爸夸一句，再给一个能马上试的小游戏或小窍门。
- **诚实**：造字的说法很多是后人的解释，古文字学家经常意见不同。拿不准就说"有一种说法""学者们还在争论"。传说（仓颉造字）要说清楚是传说。

细则、长度限制和完整例子见 [dialogue.md](dialogue.md)。

## 画法（动画）

1. **一轮问答一场戏**，场次顺序和问答一致。最后的总结轮可以不配戏。
2. **字是主角**：每部动画都要有真的古文字（`glyph` 或 `evolve` 用 `oracle` / `seal`），让孩子亲眼看到字以前的样子；讲写字的问题用 `write` 一笔一笔写出来。
3. **底图跟着问题走**：讲甲骨文、占卜用 `shell`（龟甲）；讲竹简、书写方向用 `slips`（竹简）；讲笔画、笔顺、结构用 `grid`（田字格）；其他用默认的宣纸。
4. **逐步长出来**：先给图画或实物（emoji），再出古文字，再变成今天的字。说到哪个部件，哪个部件才出现；旧的元素用 `to` 收走，任何时刻不超过 6 个，检查器的上限是 8 个。
5. **拼字要真的拼**：会意字、形声字用两个 `glyph` 沿 `path` 挪到一起；指事字用 `line` 或 `highlight` 把记号标出来。
6. **误会要翻过来**：爸爸辟谣的那一轮放 `myth` 卡，先划掉错的，再亮出对的。
7. **字要少**：标签 ≤12 字，大字 ≤14 字，场次标题 ≤12 字。屏幕上的字是关键词，完整的话交给配音和旁边的对话。

数据格式、每种元素的用法、常用配方和配色见 [film.md](film.md)。

## 配音

- `npm run voice -- <问题id>` 用 edge-tts 生成每一句：小念是 `zh-CN-YunxiaNeural`，爸爸是 `zh-CN-YunxiNeural`（-5%）。只有新的或改过的句子会重新生成。
- 播放器打开声音时，按配音长度把每场戏等比例拉长（`src/lib/narration.ts`），所以写动画时只管按原始节奏排；元素出现的先后要和爸爸台词的先后一致。
- **多音字要听一遍**：单独拎出来说的字（"长"“行”“为”“乐”）配音可能读错。读错了就把字放进词里说（"长短的长"），或者换个说法。
- 问答改了字，配音就过期了，`npm test` 会报出来，重新跑 `npm run voice`。

## 验收

- 检查器全过：`node tests/dialogue-rules.mjs`、`node tests/film-rules.mjs`、`npm test`。
- 浏览器里开着声音从头看一遍，确认：
  - 古文字真的显示成古文字（字体没加载出来时是空白，不会冒出楷书）；
  - 爸爸说到某个字时，它正好出现；
  - 手机宽度下字看得清、不挤。
- 测完把有声动画暂停，或者离开问答页，别留着它和别的页面串音。
