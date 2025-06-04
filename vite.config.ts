import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "stats.html",
    }),
  ],
  resolve: {
    // 关键：添加路径别名配置
    alias: [
      {
        find: "@packages", // 可选：通用别名
        replacement: path.resolve(__dirname, "packages"),
      },
    ],
  },
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 200, // 调整警告阈值
    rollupOptions: {
      output: {
        // 核心分包策略
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("antd")) {
              return "vendor-antd";
            }
            if (id.includes("@ant-design/icons")) {
              return "vendor-antd-icons";
            }
            if (id.includes("@emotion")) {
              return "@vendor-emotion";
            }
            if (id.includes("react-dom")) {
              return "vendor-react-dom";
            }
            if (id.includes("react")) {
              return "vendor-react";
            }
            // 将其他依赖合并为通用vendor包
            return "vendor";
          }
          // 对 @packages 目录下的包进行单独分包
          if (id.includes("packages/")) {
            // 获取包名作为 chunk 名
            const packageName = id.match(/packages\/([^/]+)/)?.[1];
            if (packageName) {
              return `package-${packageName}`;
            }
          }
          if (id.includes("src")) {
            // 按功能划分src中的模块 (需实际代码结构配合)
            if (id.includes("/assets")) {
              return "assets-chunk";
            }
            if (id.includes("/utils")) {
              return "utils-chunk";
            }
            if (id.includes("/layouts")) {
              return "layouts-chunk";
            }
            return "src-chunk"; // 默认 src 分包
          }
        },

        // 自动拆分公共依赖
        chunkFileNames: "chunks/[name]-[hash].js",

        // CSS分包规则（自动生效）
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    terserOptions: {
      compress: {
        unused: true,
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        conditionals: true,
        comparisons: true,
        booleans: true,
        loops: true,
        passes: 3,
        keep_fargs: false,
        join_vars: true
      },
      mangle: {
        toplevel: true  // 混淆顶级变量名
      }
    },
  },
});
