import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.tsx", // lib 入口文件
      name: "react-lib",
      formats: ["es"],
      fileName: (format) => `react-lib.${format}.js`, // 打包后的文件名
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [react()],
});
