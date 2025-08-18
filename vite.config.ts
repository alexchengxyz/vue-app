import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import vueDevTools from 'vite-plugin-vue-devtools';

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
      dts: 'src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        // 正確寫法：key 應為 `filepath` 而非 `filePath`
        filepath: './.eslintrc-auto-import.json',
      },
    }),
    Components({
      dirs: ['src/components'],
      dts: 'src/types/components.d.ts',
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      // 支援 @ 為 src 快捷路徑
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0', // 允許外部訪問（所有 IP 皆可存取本機 server）
    port: 5174, // 設定開發伺服器執行在 5173 port
    strictPort: true, // 若 5173 被佔用，Vite 不會自動切換成其他 port，直接報錯
  },
  css: {
    devSourcemap: false,
  },
  build: {
    sourcemap: false,
  },
});
