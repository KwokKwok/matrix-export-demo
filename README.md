## 初始化

目标是导出：

1. React 组件（_可以在 React 项目中使用_）
1. 一个渲染函数，api 可能类似于 `renderMatrixComponent(componentName, dom)`，可以直接将我们定义好的组件渲染到指定的 dom（_可在各种项目中使用_）

先创建三个项目：

- `react-lib` 库。用于导出 组件 和 渲染函数
- `react-demo` 用于使用 `react-lib` 导出的 React 组件 和 渲染函数
- `vue-demo` 用于使用 `react-lib` 导出的渲染函数

## lib 开发

1. 进入 `react-lib`
1. `pnpm run build` 生成类型声明和库文件
1. `pnpm link --global` 等下可以直接在别的项目中用

## 使用

1. `pnpm link --global react-lib` 在当前项目中引入
1. `import { MatrixComponent, renderMatrixComponent } from "react-lib";`
