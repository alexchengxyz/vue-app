import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import checker from 'vite-plugin-checker'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  define: {
    // 禁用 Bun 全域變數，避免誤用 Bun 專屬 API（例如 Bun.file）
    Bun: 'undefined',
  },
  plugins: [
    vue(),
    vueDevTools(),
    checker({
      vueTsc: true,
      eslint: false, // 關閉 ESLint 檢查，避免與 Bun 開發環境衝突
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        // 正確寫法：key 應為 `filepath` 而非 `filePath`
        filepath: './.eslintrc-auto-import.json',
      },
    }),
    Components({
      dirs: ['src/components'],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      // 支援 @ 為 src 快捷路徑
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
