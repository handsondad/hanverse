import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { Avatar } from "../components/Avatar";
import { questionsAbout } from "../data/questions";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { fullSealFamily, scriptFamily } from "../lib/scripts";
import { firstHan, lookupZi, type ZiData, type ZiLookup } from "../lib/zi";
import "./Questions.css";

let dataPromise: Promise<ZiData> | undefined;
function loadZiData(): Promise<ZiData> {
  dataPromise ??= fetch(`${import.meta.env.BASE_URL}zi/zi-data.json`).then((response) => {
    if (!response.ok) throw new Error(`字典数据加载失败：HTTP ${response.status}`);
    return response.json() as Promise<ZiData>;
  });
  dataPromise.catch(() => { dataPromise = undefined; });
  return dataPromise;
}

const quick = ["马", "日", "月", "山", "水", "人", "休", "家", "明", "鱼", "鸟", "车", "龟", "雨", "为", "字"];

type Stage = { key: string; name: string; era: string; char?: string; family: string; missing: string };

function stagesOf(zi: ZiLookup): Stage[] {
  return [
    { key: "oracle", name: "甲骨文", era: "商朝 · 三千多年前，刻在龟甲和牛骨上", char: zi.oracleChar, family: scriptFamily.oracle, missing: "甲骨文里还没找到它" },
    { key: "seal", name: "小篆", era: "秦朝 · 两千两百多年前，秦始皇统一文字", char: zi.sealChar, family: fullSealFamily, missing: "小篆字体里没有它" },
    { key: "kai", name: "楷书", era: "汉朝末年起 · 一直写到今天", char: zi.char, family: scriptFamily.kai, missing: "" }
  ];
}

type Props = {
  char?: string;
  onZi: (char: string) => void;
  onOpen: (id: string) => void;
  onBack: () => void;
  backLabel: string;
};

export default function ZiPage({ char = "马", onZi, onOpen, onBack, backLabel }: Props) {
  const [data, setData] = useState<ZiData>();
  const [error, setError] = useState<string>();
  const [input, setInput] = useState(char);
  const [step, setStep] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let live = true;
    loadZiData().then((loaded) => live && setData(loaded)).catch((reason: unknown) => live && setError(String(reason)));
    return () => { live = false; };
  }, []);

  useEffect(() => {
    setInput(char);
    setStep(null);
  }, [char]);

  useEffect(() => {
    if (step === null || step >= 2) return;
    const timer = window.setTimeout(() => setStep(step + 1), reducedMotion ? 400 : 1300);
    return () => window.clearTimeout(timer);
  }, [step, reducedMotion]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const found = firstHan(input);
    if (found) onZi(found);
  };

  const zi = data ? lookupZi(data, char) : undefined;
  const talked = questionsAbout(char);

  return (
    <div className="zi">
      <header className="page-top">
        <button type="button" className="page-back" onClick={onBack}>← {backLabel}</button>
        <div className="page-heading">
          <span>输入一个字，看它从古到今的样子</span>
          <h1>🔍 一个字的一生</h1>
        </div>
      </header>

      <form className="zi-search" onSubmit={submit}>
        <input value={input} onChange={(event) => setInput(event.target.value)} maxLength={4} aria-label="想查的字" placeholder="字" lang="zh-CN" />
        <button type="submit">看看</button>
        <div className="zi-quick" aria-label="常查的字">
          {quick.map((item) => (
            <button key={item} type="button" aria-current={item === char ? "true" : undefined} onClick={() => onZi(item)}>{item}</button>
          ))}
        </div>
      </form>

      {error && <p className="zi-loading">字典没打开：{error}。刷新一下再试试。</p>}
      {!zi && !error && <p className="zi-loading">📜 正在翻字典……</p>}
      {zi && (
        <>
          <section className="zi-life" aria-label={`「${char}」字的一生`}>
            <ol>
              {stagesOf(zi).map((stage, index) => (
                <li key={stage.key} className={step === null ? "" : index <= step ? "is-on" : "is-later"} style={{ "--i": index } as CSSProperties}>
                  <span className={stage.char ? "zi-glyph" : "zi-glyph is-missing"} style={{ fontFamily: stage.family }}>
                    {stage.char ?? "？"}
                  </span>
                  <strong>{stage.name}</strong>
                  <small>{stage.char ? stage.era : stage.missing}</small>
                </li>
              ))}
            </ol>
            <div className="zi-life-foot">
              {zi.traditional !== zi.char && (
                <p>繁体写作 <b style={{ fontFamily: scriptFamily.song }}>{zi.traditional}</b>，简化以后写作 <b>{zi.char}</b>。</p>
              )}
              <button type="button" className="zi-play" onClick={() => setStep(0)}>▶ 看它长大</button>
            </div>
          </section>

          {talked.length > 0 && (
            <section className="zi-talks">
              <h2><Avatar who="nian" /> 小念和爸爸聊过这个字</h2>
              {talked.map((question) => (
                <button key={question.id} type="button" onClick={() => onOpen(question.id)}>💬 {question.title}</button>
              ))}
            </section>
          )}

          {zi.family && (
            <section className="zi-family">
              <h2>🔊 同一个声旁的一家字</h2>
              <p>这些字都用「{zi.family[0]}」提示读音。古时候它们读起来很像，今天有的已经不像了。</p>
              <div>
                {zi.family.slice(0, 30).map((item) => (
                  <button key={item} type="button" className={item === zi.traditional || item === char ? "is-self" : ""} onClick={() => onZi(item)}>{item}</button>
                ))}
                {zi.family.length > 30 && <span>……一共 {zi.family.length} 个</span>}
              </div>
            </section>
          )}

          <details className="parent-tip zi-adult">
            <summary>👨‍👩‍👧 给大人：《说文解字》怎么说</summary>
            {zi.shuowen ? (
              <dl>
                <dt>释文</dt><dd>「{zi.traditional}」，{zi.shuowen.e}</dd>
                {zi.shuowen.p && <><dt>今音</dt><dd>{zi.shuowen.p}</dd></>}
                {zi.shuowen.r && <><dt>部首</dt><dd>{zi.shuowen.r}部{zi.shuowen.v && `（卷${Number(zi.shuowen.v)}）`}</dd></>}
                {zi.shuowen.f && <><dt>反切</dt><dd>{zi.shuowen.f}</dd></>}
                {zi.shuowen.w && <><dt>重文</dt><dd><span className="zi-variants" style={{ fontFamily: fullSealFamily }}>{zi.shuowen.w}</span>（古文、籀文等异体）</dd></>}
                {(zi.shuowen.mc || zi.shuowen.oc) && (
                  <><dt>古音</dt><dd>{zi.shuowen.pos && `${zi.shuowen.pos} · `}{zi.shuowen.mc && `中古 ${zi.shuowen.mc}`}{zi.shuowen.oc && ` · 上古 ${zi.shuowen.oc}`}<small>（学者的构拟，只是一种推测）</small></dd></>
                )}
              </dl>
            ) : <p>《说文》没有收这个字。很多字是东汉以后才造出来的，也有的是简化字。</p>}
            {zi.correction && <p className="zi-correction">🔎 <b>古文字的新发现：</b>{zi.correction}</p>}
            <p className="zi-source">
              字形和《说文》数据整理自开源项目「一个字的一生」（yigezi）：甲骨文用 Oracular 鏡原甲骨文字体，小篆用开元小篆，
              缺字由全字库说文解字补充（數位發展部，CNS11643中文標準交換碼全字庫網站，https://www.cns11643.gov.tw）；
              释文来自 shuowen.org，简繁对应来自 OpenCC，中古音来自 PHONO-ML，上古音来自 Baxter &amp; Sagart（2014）。
            </p>
          </details>
        </>
      )}
    </div>
  );
}
