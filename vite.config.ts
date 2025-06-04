import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // 关键：添加路径别名配置
    alias: [
      {
        find: '@packages',  // 可选：通用别名
        replacement: path.resolve(__dirname, 'packages')
      }
    ]
  },
  build: {
    chunkSizeWarningLimit: 200, // 调整警告阈值
    rollupOptions: {
      output: {
        // 核心分包策略
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 将 React 和 React-DOM 分别拆分
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('react')) {
              return 'vendor-react';
            }
            // 将其他依赖合并为通用vendor包
            return 'vendor';
          }
          // 按功能划分src中的模块 (需实际代码结构配合)
          if (id.includes('src/assets')) {
            return 'assets-chunk';
          }
        },
        
        // 自动拆分公共依赖
        chunkFileNames: 'chunks/[name]-[hash].js',
        
        // CSS分包规则（自动生效）
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
});