import { Component, type ReactNode } from "react";

// 按需加载的页面没下载下来（断网，或者网站刚更新、旧文件已经没了），只换掉这一页，不要整站白屏。
// React.lazy 会记住失败，所以重试就是刷新整页。
export class PageBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error("页面加载失败", error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="zi-loading" role="alert">
        <p>😵 这一页没打开，可能是网络断了一下。</p>
        <button type="button" className="zi-play" onClick={() => window.location.reload()}>↻ 再试一次</button>
        {" "}<a href="#/">回到首页</a>
      </div>
    );
  }
}
