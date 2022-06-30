import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

export enum MatrixComponent {
  /**
   * 脚手架创建的 React 页面
   */
  ReactApp = "ReactApp",
  /**
   * 未找到该组件
   */
  NoSuchComponent = "NoSuchComponent",
}

let reactRoot: ReactDOM.Root | null = null;

/**
 * 渲染 Matrix 组件
 * @param component 要渲染的组件
 * @param elSelector 元素选择器，仅第一次生效
 */
function renderMatrixComponent(
  component: MatrixComponent,
  elSelector?: string
) {
  if (!reactRoot && elSelector) {
    const el = document.querySelector(elSelector);
    if (!el) {
      return console.warn(`[Matrix] 找不到对应的 dom: ${elSelector}`);
    }
    reactRoot = ReactDOM.createRoot(el);
  }
  if (!reactRoot) {
    return console.warn(`[Matrix] 组件容器尚未初始化`);
  }

  /**
   * 根据传入的组件类型执行渲染逻辑
   */
  reactRoot.render(
    MatrixComponent.ReactApp === component ? (
      <App />
    ) : (
      <div style={{ height: "100%" }}>未找到对应的组件</div>
    )
  );
}

/**
 * 导出一个渲染函数和一个 React 组件
 */
export { renderMatrixComponent, App as ReactApp };
