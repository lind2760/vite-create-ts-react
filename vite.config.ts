import { defineConfig } from 'vite'
import reactRefresh from "@vitejs/plugin-react";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // 路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname,"src")
    }
  },
  server: {
    port: 3000,
    // 代理 生产环境无效
    // proxy: {
    //   '/api': {
    //     target: "/代理地址",
    //     changeOrigin: true,
    //     cookieDomainRewrite: "",
    //     secure: false
    //   }
    // }
  }
})
