import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { questionById, topicById, type TopicId } from "./data/questions";
import { useHeardQuestions } from "./hooks/useHeardQuestions";
import { HomePage } from "./pages/HomePage";
import { QuestionListPage } from "./pages/QuestionListPage";
import { QuestionPage } from "./pages/QuestionPage";

const ZiPage = lazy(() => import("./pages/ZiPage"));

type Route =
  | { page: "home" }
  | { page: "list"; topic: TopicId }
  | { page: "question"; id: string }
  | { page: "zi"; char?: string };

function parseRoute(hash: string): Route {
  const [, page, rawParam] = hash.replace(/^#/, "").split("/");
  const param = rawParam ? decodeURIComponent(rawParam) : undefined;
  if (page === "topic" && param && topicById(param)) return { page: "list", topic: param as TopicId };
  if (page === "q" && param && questionById(param)) return { page: "question", id: param };
  if (page === "zi") return { page: "zi", char: param ? [...param][0] : undefined };
  return { page: "home" };
}

const listHash = (topic: TopicId) => `#/topic/${topic}`;
export const ziHash = (char: string) => `#/zi/${encodeURIComponent(char)}`;

function App() {
  const { heard, markHeard } = useHeardQuestions();
  const [route, setRoute] = useState(() => parseRoute(window.location.hash));
  /** 从哪个列表、哪个问题进来的，返回时回到那里而不是一直跳回首页 */
  const lastList = useRef<TopicId | null>(null);
  const lastQuestion = useRef<string | null>(null);

  useEffect(() => {
    const onHash = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (route.page === "home") {
      lastList.current = null;
      lastQuestion.current = null;
    }
    if (route.page === "list") {
      lastList.current = route.topic;
      lastQuestion.current = null;
    }
    if (route.page === "question") lastQuestion.current = route.id;
    window.scrollTo(0, 0);
  }, [route]);

  const go = (hash: string) => { window.location.hash = hash; };
  const goHome = () => go("#/");
  const openQuestion = (id: string) => go(`#/q/${id}`);
  const openZi = (char: string) => go(ziHash(char));

  if (route.page === "question") {
    const question = questionById(route.id);
    if (question) {
      const back = lastList.current ?? question.topic;
      return (
        <QuestionPage key={question.id} question={question} heard={heard} onHeard={markHeard}
          onBack={() => go(listHash(back))} onOpen={openQuestion} onZi={openZi} />
      );
    }
  }
  if (route.page === "list") {
    return (
      <QuestionListPage key={route.topic} topic={route.topic} heard={heard}
        onBack={goHome} onOpen={openQuestion} onTopic={(id) => go(listHash(id))} />
    );
  }
  if (route.page === "zi") {
    const fromQuestion = lastQuestion.current ? questionById(lastQuestion.current) : undefined;
    return (
      <Suspense fallback={<p className="zi-loading">📜 正在翻字典……</p>}>
        <ZiPage char={route.char} onZi={openZi} onOpen={openQuestion}
          onBack={fromQuestion ? () => openQuestion(fromQuestion.id) : goHome}
          backLabel={fromQuestion ? "回到小念的问题" : "回到首页"} />
      </Suspense>
    );
  }
  return <HomePage heard={heard} onTopic={(id) => go(listHash(id))} onZi={openZi} />;
}

export default App;
