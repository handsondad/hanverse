# 第三方声明

汉字奇遇记的代码是本项目自己写的；下面这些字体、数据和素材来自第三方，版权和许可如下。再分发网站（包括 `public/` 里的文件）时，请一并保留本文件和 `licenses/` 目录。

## 一个字的一生（yigezi，MIT）

「一个字的一生」查字页的数据（`public/zi/zi-data.json`）、甲骨文和小篆字体文件，以及"先换成繁体再查古文字"的做法，整理自开源项目 yigezi（<https://github.com/Ivan666jjj/yigezi>）。yigezi 的 MIT 声明见 `licenses/yigezi-MIT.txt`（Copyright (c) 2026 Ivan666jjj）和 `licenses/yigezi-MIT-2.txt`（Copyright (c) 2026 严毓焕 (Yan Yuhuan)）。数据和字体本身的许可按下面各项原始来源。

yigezi 里「古文字纠正」条目（`corrections` 字段）是 yigezi 作者据古文字字形自行撰写的。

## 字形

### 甲骨文：Oracular 鏡原甲骨文（SIL OFL 1.1）

- 文件：`public/fonts/oracle.woff2`（原样转发 yigezi 的 `orac.woff2`）
- 来源：<https://oracular.azurewebsites.net/>，作者 Peichao Qin（"镜原甲骨数字平台"），字库版权登记号 国作登字-2024-F-00223767
- 许可：SIL Open Font License 1.1，全文见 `licenses/OFL-1.1.txt`

### 小篆：开元小篆（SIL OFL 1.1）+ 全字库说文解字（OGDL-Taiwan-1.0）

- 文件：`public/fonts/seal-full.woff2`（原样转发 yigezi 合并后的 Shuowen Seal 字体）；`public/fonts/seal-core.woff2`（本项目用 `tools/fonts/subset.py` 从前者切出的子集，改名为 HanSeal Core）
- 开元小篆：<https://github.com/frankslin/kaiyuan-small-seal-font>，SIL OFL 1.1。按 OFL，衍生字体不得使用原保留字体名，所以子集另起了名字。
- 全字库说文解字：用于补充缺字。许可为《政府资料开放授权条款－第 1 版》（OGDL-Taiwan-1.0）。按该条款必须显名：

  > 數位發展部，CNS11643中文標準交換碼全字庫網站，https://www.cns11643.gov.tw

### 楷书：马善政毛笔楷书（SIL OFL 1.1）

页面正文和动画里的楷书用 Google Fonts 上的 Ma Shan Zheng，运行时从 Google Fonts 加载，不随网站发布。

### 笔顺：Make Me a Hanzi / hanzi-writer-data（Arphic Public License）

- 文件：`src/data/strokes.json`（由 `tools/strokes/fetch.mjs` 从 hanzi-writer-data 2.0.1 取得，只保留了 `strokes` 和 `medians` 两个字段）
- 来源：Make Me a Hanzi（<https://github.com/skishore/makemeahanzi>），字形源自文鼎科技的 AR PL KaitiM GB、AR PL UKai 字体；经 hanzi-writer-data（<https://github.com/chanind/hanzi-writer-data>）整理
- 许可：Arphic Public License，全文见 `licenses/ARPHICPL.TXT`。本项目对数据所做的修改只有上面说的删减字段，修改后的数据同样按 Arphic Public License 免费提供。

## 《说文解字》和音韵数据

| 数据 | 来源 | 许可 |
|---|---|---|
| 字头、《说文》释文、反切、拼音、部首、卷次、重文 | shuowen.org（数据仓库 `shuowenjiezi/shuowen`） | Apache License 2.0，见 `licenses/Apache-2.0.txt` |
| 简繁对应 | OpenCC（<https://github.com/BYVoid/OpenCC>） | Apache License 2.0 |
| 中古音转写、音韵地位 | PHONO-ML Database（<https://github.com/alxdrdelaporte/PHONO-ML_database>），CRLAO（CNRS UMR 8563），Guillaume Jacques 主持、Alexander Delaporte 开发，DOI 10.5281/zenodo.17349142 | CC BY 4.0 |
| 上古音构拟 | Baxter, W. H. & Sagart, L. (2014). *Old Chinese: A New Reconstruction*. Oxford University Press，官方补充材料 | CC BY 4.0 |

查字页"给大人"一栏里注明了这些来源。

## BodyVista（MIT）

`src/lib/motion.ts` 中的相位曲线（`bump`、`breath`、`pulseTravel` 等）和"相位驱动教学动画"的做法参考并改写自 BodyVista（经身体奇遇记）。

```
MIT License

Copyright (c) 2026 FreedomAI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## HyperFrames（Apache-2.0）

讲解动画的做法参考了 HyperFrames（heygen-com/hyperframes）的动效指南：画面是时间 t 的纯函数、可以拖动和暂停；到达用长尾 ease-out、退场比进场短；"一张图逐步长出来"。只借鉴了思路，没有复制代码。

## 碑帖、墨迹和照片（Wikimedia Commons）

`public/art/` 里的图片取自 Wikimedia Commons，本项目只做了裁切、缩小和重新压缩。古代书法作品本身早已进入公有领域，它们的平面翻拍、扫描在 Commons 上按公有领域（PD-Art）标注。

| 文件 | 作品 | Commons 原文件 | 许可 |
|---|---|---|---|
| `duobao.jpg` | 唐 颜真卿《多宝塔碑》拓本（局部） | `File:多寶塔碑.JPG` | 公有领域 |
| `xuanmi-tian.jpg`、`xuanmi-jia.jpg` | 唐 柳公权《玄秘塔碑》拓本里的「天」「家」 | `File:玄秘塔碑 天.jpg`、`File:玄秘塔碑 家.jpg` | 公有领域 |
| `jizhi.jpg` | 唐 颜真卿《祭侄文稿》卷首，台北故宫博物院藏 | `File:Jizhiwengao1.jpg` | 公有领域 |
| `huaisu.jpg` | 唐 怀素《自叙帖》卷尾（局部），台北故宫博物院藏 | `File:Huaisu - Autobiography.jpg` | 公有领域 |
| `zhiyong.jpg` | 隋 智永《真草千字文》墨迹本（局部） | `File:ZhiYong1000charcter.Color.jpg` | 公有领域 |
| `nongfang.jpg` | 宋 赵佶《秾芳诗帖》（局部），台北故宫博物院藏 | `File:NongfangShitie.jpg` | 公有领域 |
| `xizi-ting.jpg` | 台中石冈 土牛刘屋老伙房的惜字亭（照片） | `File:土牛劉屋老夥房惜字亭.jpg`，作者 Outlookxp | CC BY 4.0（<https://creativecommons.org/licenses/by/4.0/>），本项目缩小了尺寸 |

原文件页面：`https://commons.wikimedia.org/wiki/` 后接上表里的文件名。

## 配音（Microsoft Edge 在线语音）

`public/voice/` 里的小念和爸爸的配音由 [edge-tts](https://github.com/rany2/edge-tts)（GPL-3.0，只在生成时使用，不随网站发布）调用微软 Edge"大声朗读"的在线神经语音生成：小念 `zh-CN-YunxiaNeural`，爸爸 `zh-CN-YunxiNeural`。这项服务没有为批量生成音频单独给出授权条款，所以这些音频只按家庭和非商业用途考虑；公开发布或商用前，应改用有明确商用授权的语音服务（如 Azure AI Speech）重新生成。

## 3D 角色

3D 角色模型的来源见 `public/models/CREDITS.md`（Quaternius，CC0）。
