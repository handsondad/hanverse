// 「一个字的一生」的数据：public/zi/zi-data.json，由 tools/zi/import-yigezi.mjs 从 yigezi 导入。
// 查一个字时，先把简体换成繁体（甲骨文、小篆字体和《说文》都是按繁体编的），再找它的各个样子。

export type ShuowenEntry = {
  /** 《说文》释文 */
  readonly e: string;
  /** 今音 */
  readonly p?: string;
  /** 部首 */
  readonly r?: string;
  /** 卷 */
  readonly v?: string;
  /** 反切 */
  readonly f?: string;
  /** 重文（古文、籀文等异体） */
  readonly w?: string;
  /** 中古音（Baxter 转写）、中古音韵地位、上古音（Baxter-Sagart 2014 构拟） */
  readonly mc?: string;
  readonly pos?: string;
  readonly oc?: string;
};

export type ZiData = {
  readonly oracle: string;
  readonly seal: string;
  readonly shuowen: Readonly<Record<string, ShuowenEntry>>;
  readonly toTraditional: Readonly<Record<string, string>>;
  /** 声符 → 用它做声旁的字 */
  readonly series: Readonly<Record<string, readonly string[]>>;
  /** 字 → 它的声符 */
  readonly seriesOf: Readonly<Record<string, string>>;
  /** 《说文》被甲骨文、金文纠正过的地方 */
  readonly corrections: Readonly<Record<string, { readonly t: string }>>;
};

export type ZiLookup = {
  /** 查的那个字 */
  readonly char: string;
  /** 对应的繁体（简繁相同时就是它自己） */
  readonly traditional: string;
  readonly oracleChar?: string;
  readonly sealChar?: string;
  readonly shuowen?: ShuowenEntry;
  /** 同一个声符的一家字，第一个是声符本身 */
  readonly family?: readonly string[];
  readonly correction?: string;
};

export const isHan = (char: string) => /^[\u3400-\u9fff\u{20000}-\u{3134f}]$/u.test(char);

/** 取输入里的第一个汉字 */
export function firstHan(raw: string): string | undefined {
  return [...raw].find(isHan);
}

/** 和 yigezi 一样：繁体候选里先挑《说文》收了或甲骨文里有的那个 */
export function lookupZi(data: ZiData, char: string): ZiLookup {
  const candidates = [...(data.toTraditional[char] ?? "")];
  const traditional = candidates.find((item) => data.shuowen[item] || data.oracle.includes(item)) ?? candidates[0] ?? char;
  const pick = (set: string) => (set.includes(traditional) ? traditional : set.includes(char) ? char : undefined);
  const sound = data.seriesOf[char] ?? data.seriesOf[traditional];
  const members = sound ? data.series[sound] : undefined;
  return {
    char,
    traditional,
    oracleChar: pick(data.oracle),
    sealChar: pick(data.seal),
    shuowen: data.shuowen[traditional] ?? data.shuowen[char],
    family: sound && members ? [sound, ...members] : undefined,
    correction: (data.corrections[char] ?? data.corrections[traditional])?.t
  };
}
