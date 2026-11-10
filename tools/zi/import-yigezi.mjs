// 从「一个字的一生」(yigezi) 导入字形字体和《说文》数据：
//   node tools/zi/import-yigezi.mjs <yigezi 目录>
// 写出 public/zi/zi-data.json（查字页按需加载）、public/fonts/oracle.woff2、public/fonts/seal-full.woff2，
// 以及 licenses/ 下的许可文件。导入后要跑 `npm run fonts` 重新切动画用的小篆子集。
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const source = process.argv[2];
if (!source || !existsSync(join(source, "index.html"))) {
  console.error("用法：node tools/zi/import-yigezi.mjs <yigezi 目录>（目录里要有 index.html、orac.woff2、seal.woff2）");
  process.exit(1);
}

const html = readFileSync(join(source, "index.html"), "utf8");
const start = html.indexOf("const SW=");
const end = html.indexOf("const THEMES=");
if (start < 0 || end < start) throw new Error("index.html 里找不到 SW … THEMES 之间的数据段，yigezi 的格式可能变了");
const data = vm.runInNewContext(`${html.slice(start, end)}\n({ SW, TS, XS, BELONG, HAS_SEAL, HAS_ORAC, XZ })`);

// 中古音、上古音是学术构拟，查字页只给大人看；字段原样保留
const out = {
  source: "yigezi (https://github.com/Ivan666jjj/yigezi)",
  oracle: data.HAS_ORAC,
  seal: data.HAS_SEAL,
  shuowen: data.SW,
  toTraditional: data.TS,
  series: data.XS,
  seriesOf: data.BELONG,
  corrections: data.XZ
};
mkdirSync(join(root, "public/zi"), { recursive: true });
writeFileSync(join(root, "public/zi/zi-data.json"), JSON.stringify(out));

mkdirSync(join(root, "public/fonts"), { recursive: true });
copyFileSync(join(source, "orac.woff2"), join(root, "public/fonts/oracle.woff2"));
copyFileSync(join(source, "seal.woff2"), join(root, "public/fonts/seal-full.woff2"));

mkdirSync(join(root, "licenses"), { recursive: true });
copyFileSync(join(source, "licenses/OFL-1.1.txt"), join(root, "licenses/OFL-1.1.txt"));
copyFileSync(join(source, "LICENSE"), join(root, "licenses/yigezi-MIT.txt"));

const count = (text) => [...text].length;
console.log(`甲骨文 ${count(data.HAS_ORAC)} 字，小篆 ${count(data.HAS_SEAL)} 字，《说文》${Object.keys(data.SW).length} 条，谐声 ${Object.keys(data.XS).length} 组`);
