import { lazy, Suspense, useRef, useState, type CSSProperties } from "react";
import type { LensState, RunLabCue } from "../components/RunLab3D";
import { WebGLBoundary } from "../components/WebGLBoundary";
import { questionsIn, topics, type TopicId } from "../data/questions";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { canUseWebGL, createBodyState } from "../lib/run-lab";
import { scriptFamily } from "../lib/scripts";
import "../components/RunLab.css";
import "./Questions.css";

const RunLab3D = lazy(() => import("../components/RunLab3D"));

const chats: readonly (readonly [string, string])[] = [
  ["爸爸，汉字是谁发明的呀？", "这个问题可大了！我们从三千多年前刻在龟壳上的字讲起。"],
  ["“日”字为什么是方的？太阳明明是圆的！", "好眼力！每个字都有自己的故事，我们一个一个找。"],
  ["那我能看到一个字小时候的样子吗？", "能！点下面的「一个字的一生」，输入你想看的字。"]
];

/** 首页那一排「字的小时候」：甲骨文 → 楷书 */
const sampleForms: readonly (readonly [string, string])[] = [["日", "日"], ["月", "月"], ["馬", "马"], ["魚", "鱼"], ["人", "人"]];

/** 奇遇记系列的兄弟站点 */
const siblings: readonly (readonly [string, string])[] = [
  ["🚀 身体奇遇记", "https://handsondad.github.io/bodyverse/"],
  ["🧪 化学奇遇记", "https://handsondad.github.io/chemverse/"]
];

type Props = {
  heard: readonly string[];
  onTopic: (id: TopicId) => void;
  onZi: (char: string) => void;
};

export function HomePage({ heard, onTopic, onZi }: Props) {
  const [webgl] = useState(canUseWebGL);
  const reducedMotion = useReducedMotion();
  const [stageRef, inView] = useInView<HTMLDivElement>();
  const [chat, setChat] = useState(0);
  const bodyRef = useRef(createBodyState());
  const lensRef = useRef<LensState>({ on: false, follow: true, x: 0, y: 0, r: 80 });
  const cueRef = useRef<RunLabCue>({ id: 0, clip: "Jump" });

  function talk() {
    cueRef.current = { id: cueRef.current.id + 1, clip: cueRef.current.id % 2 ? "Victory" : "Jump" };
    setChat((chat + 1) % chats.length);
  }

  const [nianLine, dadLine] = chats[chat];
  const flat = <div className="home-planet-flat" aria-hidden="true">👨🧒</div>;

  return (
    <div className="home">
      <header className="home-title">
        <h1><span aria-hidden="true">📜</span> 汉字奇遇记</h1>
        <p>小念一问，爸爸一答，看一个字三千年怎么长大</p>
      </header>

      <section aria-labelledby="home-duo-title">
        <h2 id="home-duo-title" className="home-section-title">小念和爸爸探索汉字的奥秘</h2>
        <div ref={stageRef} className="home-planet">
          {webgl ? (
            <WebGLBoundary name="home-planet" fallback={flat}>
              <Suspense fallback={flat}>
                <RunLab3D character="nian" partner="dad" bodyRef={bodyRef} lensRef={lensRef} cueRef={cueRef}
                  reducedMotion={reducedMotion} active={inView} label="爸爸和小念站在小星球上，点他们会接着聊"
                  onCharacterTap={talk} onReady={() => undefined} />
              </Suspense>
            </WebGLBoundary>
          ) : flat}
          <button type="button" className="home-bubble is-nian" onClick={talk}><b>小念</b>{nianLine}</button>
          <button type="button" className="home-bubble is-dad" onClick={talk}><b>爸爸</b>{dadLine}</button>
        </div>
      </section>

      <section aria-labelledby="home-topics-title">
        <h2 id="home-topics-title" className="home-section-title">汉字的秘密</h2>
        <div className="home-systems">
          {topics.map((topic) => {
            const list = questionsIn(topic.id);
            const done = list.filter((question) => heard.includes(question.id)).length;
            return (
              <button key={topic.id} type="button" className="system-card" style={{ "--bubble": topic.color } as CSSProperties}
                onClick={() => onTopic(topic.id)}>
                <span className="system-emoji" aria-hidden="true">{topic.emoji}</span>
                <strong>{topic.title}</strong>
                <small>{topic.kidHook}</small>
                <span className="system-count">{list.length} 个问题{done > 0 && ` · ⭐ 看过 ${done}`} →</span>
              </button>
            );
          })}
          <button type="button" className="system-card home-zi" style={{ "--bubble": "#d9453a" } as CSSProperties} onClick={() => onZi("马")}>
            <span className="system-emoji" aria-hidden="true">🔍</span>
            <strong>一个字的一生</strong>
            <small>输入一个字，看它从甲骨文、小篆一路长成今天的样子。</small>
            <span className="home-zi-row" aria-hidden="true">
              {sampleForms.map(([old, now]) => (
                <span key={now}><i style={{ fontFamily: scriptFamily.oracle }}>{old}</i>{now}</span>
              ))}
            </span>
          </button>
        </div>
      </section>

      <footer className="home-footer">
        <span>奇遇记系列：</span>
        {siblings.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </footer>
    </div>
  );
}
