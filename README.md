目标是导出：

1. React 组件（_可以在 React 项目中使用_）
2. 一个渲染函数，api 可能类似于 `renderMatrixComponent(componentName, dom)`，可以直接将我们定义好的组件渲染到指定的 dom（_可在各种项目中使用_）

先创建三个项目：

- `react-lib` 库。用于导出 组件 和 渲染函数
- `react-demo` 用于使用 `react-lib` 导出的 React 组件 和 渲染函数
- `vue-demo` 用于使用 `react-lib` 导出的渲染函数
