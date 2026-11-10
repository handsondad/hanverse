// 字形能不能显示出来：甲骨文、小篆字体里有没有这个字，笔顺数据和小篆子集是不是最新的。
import { readFileSync } from "node:fs";
import { lookupZi } from "../src/lib/zi.ts";

const read = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
export const ziData = read("../public/zi/zi-data.json");
export const strokes = read("../src/data/strokes.json");
export const sealSubset = new Set([...read("../src/data/seal-subset.json").chars]);

const scripts = new Set(["oracle", "seal", "kai", "song"]);
const oneChar = (char) => typeof char === "string" && [...char].length === 1;

/** 这种字体能不能写这个字；不能的话说明怎么改 */
export function glyphProblem(script, char) {
  if (!scripts.has(script)) return `没有字体 ${script}，只能用 oracle、seal、kai、song`;
  if (!oneChar(char)) return `「${char}」要正好一个字`;
  if (script === "oracle" && !ziData.oracle.includes(char)) {
    const better = lookupZi(ziData, char).oracleChar;
    return better && better !== char ? `甲骨文字体是按繁体编的，「${char}」要写成「${better}」` : `甲骨文里没有「${char}」，换一个字或者用小篆`;
  }
  if (script === "seal") {
    if (!ziData.seal.includes(char)) {
      const better = lookupZi(ziData, char).sealChar;
      return better && better !== char ? `小篆字体里没有「${char}」，写成「${better}」` : `小篆字体里没有「${char}」`;
    }
    const traditional = lookupZi(ziData, char).traditional;
    if (traditional !== char && ziData.seal.includes(traditional)) return `小篆要按繁体写：「${char}」写成「${traditional}」`;
    if (!sealSubset.has(char)) return `小篆「${char}」不在动画用的字体子集里，跑一下 npm run fonts`;
  }
  return undefined;
}

export function formProblem(form) {
  if ("icon" in form) return typeof form.icon === "string" && form.icon ? undefined : "图画要写 icon";
  return glyphProblem(form.script, form.char);
}

export function writeProblem(char) {
  if (!oneChar(char)) return `「${char}」要正好一个字`;
  return strokes[char] ? undefined : `「${char}」还没有笔顺数据，跑一下 npm run strokes`;
}
