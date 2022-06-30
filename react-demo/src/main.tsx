import React from "react";
import ReactDOM from "react-dom/client";
import { renderMatrixComponent, ReactApp, MatrixComponent } from "react-lib";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 1. 直接使用导出的组件 */}
    <ReactApp />
  </React.StrictMode>
);

// 2. 也可以调用函数
// renderMatrixComponent(MatrixComponent.ReactApp, "#root");
