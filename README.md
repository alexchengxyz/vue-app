# Vue 3 現代化開發環境

[![Vue 3](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)

## 目錄

- [專案概述](#專案概述)
- [✨ 功能特點](#-功能特點)
- [🚀 快速開始](#-快速開始)
  - [前置需求](#前置需求)
  - [安裝與執行](#安裝與執行)
- [📁 專案結構](#-專案結構)
- [⚙️ 專案配置](#️-專案配置)
  - [TypeScript 配置](#typescript-配置)
  - [開發工具配置](#開發工具配置)
- [📦 專案套件](#-專案套件)
- [🛠️ 開發指令](#️-開發指令)
- [🧪 測試](#-測試)
- [🔧 代碼規範](#-代碼規範)
- [📝 提交規範](#-提交規範)

## 專案概述

這是一個基於 Vue 3 的現代化前端開發環境，整合了以下技術棧：

- **前端框架**：Vue 3
- **建置工具**：Vite + Bun
- **程式語言**：TypeScript
- **狀態管理**：Pinia
- **路由管理**：Vue Router
- **代碼規範**：ESLint + Prettier + Husky
- **測試框架**：Vitest + Vue Test Utils

## ✨ 功能特點

- ⚡ **極速開發**：使用 Vite 和 Bun 提供快速的開發體驗
- 🛡️ **類型安全**：完整的 TypeScript 支援
- 🎨 **統一代碼風格**：整合 ESLint 和 Prettier
- 🔧 **自動化**：Husky + lint-staged 自動化代碼檢查與格式化
- 🧪 **測試完善**：整合 Vitest 進行單元測試

## 🚀 快速開始

### 前置需求

- Node.js 22.18.0
- Bun 1.2.20

### 安裝與執行

1. 安裝依賴：

   ```bash
   # 使用 bun
   bun install

   # 或使用 npm
   npm install
   ```

2. 啟動開發伺服器：

   ```bash
   npm run dev
   ```

3. 建置生產版本：
   ```bash
   npm run build
   ```

## 📁 專案結構

```
src/
├── assets/          # 靜態資源
├── components/      # 共用組件
├── router/          # 路由配置
├── stores/          # Pinia 狀態管理
├── views/           # 頁面組件
├── App.vue          # 根組件
└── main.ts          # 應用入口
```

## ⚙️ 專案配置

### TypeScript 配置

專案包含多個 TypeScript 配置檔案：

- `tsconfig.json` - 基礎配置
- `tsconfig.app.json` - 應用程式配置
- `tsconfig.node.json` - Node.js 環境配置
- `tsconfig.vitest.json` - 測試環境配置

### 開發工具配置

- **Vite** - `vite.config.ts`
- **ESLint** - `eslint.config.js`
- **Prettier** - `.prettierrc.json`
- **Husky** - `.husky/`
- **Commitlint** - `commitlint.config.js`

## 📦 專案套件

### 核心依賴

- `vue` - Vue 3 核心庫
- `pinia` - 狀態管理
- `vue-router` - 路由管理

### 開發工具

- `@vitejs/plugin-vue` - Vite 的 Vue 插件
- `unplugin-auto-import` - 自動導入 API
- `unplugin-vue-components` - 自動導入組件

### 代碼質量

- `eslint` - 代碼檢查
- `prettier` - 代碼格式化
- `husky` - Git hooks
- `lint-staged` - 暫存區代碼檢查

### 測試

- `vitest` - 測試框架
- `@vue/test-utils` - Vue 組件測試
- `jsdom` - 瀏覽器環境模擬

## 🛠️ 開發指令

| 指令                 | 說明           |
| -------------------- | -------------- |
| `npm run dev`        | 啟動開發伺服器 |
| `npm run build`      | 建置生產版本   |
| `npm run preview`    | 預覽生產版本   |
| `npm run type-check` | 類型檢查       |
| `npm run lint`       | 代碼檢查       |
| `npm run format`     | 代碼格式化     |
| `npm run test:unit`  | 執行單元測試   |

## 🧪 測試

執行單元測試：

```bash
npm run test:unit
```

## 🔧 代碼規範

專案使用 ESLint 和 Prettier 進行代碼規範檢查與格式化。

- **ESLint 配置**：`eslint.config.js`
- **Prettier 配置**：`.prettierrc.json`

## 📝 提交規範

專案使用 Conventional Commits 規範提交訊息：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 提交類型

- `feat`: 新功能
- `fix`: 修復錯誤
- `docs`: 文檔更新
- `style`: 代碼格式調整
- `refactor`: 重構代碼
- `perf`: 性能優化
- `test`: 測試相關
- `chore`: 構建過程或輔助工具的變動

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
