import type { Form, Script } from "../data/films/types";

// 四种字体在页面上用哪个字族。甲骨文、小篆字体放在 public/fonts，由 main.tsx 注册；
// 动画只加载小篆的子集（tools/fonts/subset.mjs 切出来），查字页才加载完整的小篆字体。

export const scriptFamily: Record<Script, string> = {
  oracle: '"HanOracle", serif',
  seal: '"HanSeal", serif',
  kai: '"Ma Shan Zheng", "KaiTi", "STKaiti", serif',
  song: '"Noto Serif SC", "Songti SC", "SimSun", serif'
};

/** 查字页什么字都可能查，用完整的小篆字体（8 MB 多，只在查字页加载） */
export const fullSealFamily = '"HanSealFull", serif';

export const scriptName: Record<Script, string> = {
  oracle: "甲骨文",
  seal: "小篆",
  kai: "楷书",
  song: "印刷体"
};

export const formLabel = (form: Form) => form.label ?? ("icon" in form ? "图画" : scriptName[form.script]);

export function registerScriptFonts(base: string) {
  const faces = [
    ["HanOracle", "fonts/oracle.woff2"],
    ["HanSeal", "fonts/seal-core.woff2"],
    ["HanSealFull", "fonts/seal-full.woff2"]
  ];
  const style = document.createElement("style");
  // block：字体没到之前宁可空着，也不要先露出楷书，让人以为甲骨文长那样
  style.textContent = faces
    .map(([family, file]) => `@font-face{font-family:"${family}";src:url("${base}${file}") format("woff2");font-display:block}`)
    .join("");
  document.head.append(style);
}
