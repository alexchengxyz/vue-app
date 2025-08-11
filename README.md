# vue-app

vue 3 + bun + vite + typescript + eslint + prettier + pinia + vue-router 初始專案

## 專案配置說明

### tsconfig.app.json 設定說明

- **exclude 設定**
  - `src/**/__tests__/*` - 排除測試資料夾
  - `**/*.spec.ts` - 排除單元測試檔案

- **compilerOptions 設定**
  - `tsBuildInfoFile` - 統一快取目錄
  - `module: "ESNext"` - 為 Vite / Bun / ESM 架構設計
  - `moduleResolution: "Bundler"` - 相容 Vite/Bun 的解析方式
  - `paths` - 支援 `@` 作為 `src` 目錄的別名
  - `target: "ES2022"` - 與 Node.js 22 / Bun 相容（可視需求微調）
  - `strict: true` - 開啟嚴格模式，提升安全性與錯誤提示（如需放寬可調）
  - `types: ["node"]` - 支援 node 類型（必要）

### tsconfig.node.json 設定說明

- **extends**: "@tsconfig/node22/tsconfig.json" - 繼承 Node.js 22 的預設配置
- **noEmit**: true - 不輸出編譯後的檔案
- **tsBuildInfoFile**: "./node_modules/.tmp/tsconfig.config.tsbuildinfo" - 指定類型檢查快取檔案位置
- **module**: "ESNext" - 支援 Bun 與 ESM 模組系統
- **moduleResolution**: "Bundler" - 為 Vite / Bun 設計的模組解析策略
- **types**: ["node"] - 包含 Node.js 全域型別定義
- **include**: 包含以下設定檔：
  - vite.config.\*
  - vitest.config.\*
  - cypress.config.\*
  - nightwatch.conf.\*
  - playwright.config.\*
  - eslint.config.\*

### tsconfig.vitest.json 設定說明

- **extends**: "./tsconfig.app.json" - 繼承應用程式的主要 TypeScript 配置

- **include**: 包含以下檔案：
  - `src/**/__tests__/*` - 包含所有測試目錄
  - `env.d.ts` - 全域型別定義

- **compilerOptions**:
  - `tsBuildInfoFile`: "./node_modules/.tmp/tsconfig.vitest.tsbuildinfo" - 獨立的類型檢查快取檔案
  - `module`: "ESNext" - 與 Vite 一致的 ESM 模組系統
  - `moduleResolution`: "Bundler" - 為 Bun / Vite 設計的模組解析策略
  - `types`: ["node", "jsdom"] - 為 Vitest 測試環境提供必要的型別定義
  - `lib`: ["DOM", "ESNext"] - 為測試提供 DOM 與最新 JavaScript 語法支援

## 專案指令說明

### 開發相關

- `npm run dev` - 啟動開發伺服器
- `npm run preview` - 預覽生產環境建置結果
- `npm run type-check` - 執行 TypeScript 類型檢查
- `npm run lint` - 檢查程式碼風格
- `npm run lint:fix` - 自動修正常見的程式碼風格問題
- `npm run format` - 使用 Prettier 格式化程式碼

### 建置與測試

- `npm run build` - 執行類型檢查後建置專案
- `npm run build-only` - 僅執行建置，不進行類型檢查
- `npm test:unit` - 執行單元測試

### 專案設置與驗證

- `npm run reinstall` - 重新安裝所有依賴套件
- `npm run check:node` - 使用 Node.js 環境執行完整建置與測試流程
- `npm run check:bun` - 使用 Bun 環境執行完整建置與測試流程

## 專案套件說明

### 主要依賴

- **Vue 3** - 現代化的前端框架
- **Vue Router** - 官方路由管理
- **Pinia** - Vue 官方狀態管理庫
- **TypeScript** - 型別安全的 JavaScript 超集

### 開發工具

- **Vite** - 下一代前端建置工具
- **Bun** - 快速的 JavaScript 運行時和套件管理員
- **ESLint** - 代碼質量檢查
- **Prettier** - 代碼格式化工具
- **Vitest** - 單元測試框架
- **Vue Test Utils** - Vue 組件測試工具

### 代碼規範

- **@commitlint** - Git commit 訊息規範
- **husky** - Git hooks 工具
- **lint-staged** - 對暫存區檔案執行檢查
- **prettier-plugin-packagejson** - 自動格式化 package.json

### 類型定義

- **@types/node** - Node.js 類型定義
- **@vue/tsconfig** - Vue 專用的 TypeScript 配置
- **@types/jsdom** - JSDOM 類型定義

### 構建工具

- **@vitejs/plugin-vue** - Vite 的 Vue 插件
- **vite-plugin-checker** - 在開發時進行類型檢查
- **vite-plugin-vue-devtools** - Vue DevTools 整合
- **unplugin-auto-import** - 自動導入 API
- **unplugin-vue-components** - 自動導入組件

### 測試相關

- **@testing-library/vue** - Vue 測試工具庫
- **jsdom** - Node.js 的 DOM 實現
- **@vitest/eslint-plugin** - Vitest 的 ESLint 插件

### 其他工具

- **npm-run-all2** - 並行執行多個 npm scripts
- **jiti** - 即時轉譯的 require 替代方案
