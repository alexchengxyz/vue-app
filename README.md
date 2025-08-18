# Vue 3 現代化前端專案

[![Vue 3](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![PrimeVue](https://img.shields.io/badge/PrimeVue-4.3.7-2196F3?style=for-the-badge&logo=prime)](https://primevue.org/)

## 目錄

- [✨ 功能特點](#-功能特點)
- [🚀 快速開始](#-快速開始)
  - [前置需求](#前置需求)
  - [安裝與執行](#安裝與執行)
- [🛠️ 開發工作流](#️-開發工作流)
  - [開發指令](#-開發指令)
  - [代碼規範](#-代碼規範)
  - [提交規範](#-提交規範)
- [📁 專案結構](#-專案結構)
- [⚙️ 專案配置](#️-專案配置)
  - [TypeScript 配置](#typescript-配置)
  - [開發工具配置](#開發工具配置)
- [🧪 測試](#-測試)
- [📦 專案套件](#-專案套件)

## ✨ 功能特點

- ⚡ **極速開發**：Vite + Bun 提供即時模組熱更新
- 🛡️ **類型安全**：完整的 TypeScript 支援與型別檢查
- 🎨 **專業 UI**：整合 PrimeVue 豐富的元件庫
- 🔧 **自動化工作流**：Husky + lint-staged 自動化代碼檢查與格式化
- 🧪 **測試驅動**：整合 Vitest 進行單元測試與覆蓋率報告
- 🌐 **現代化架構**：基於 Composition API 的模組化設計

## 🚀 快速開始

### 前置需求

- Node.js 22.18.0 或更高版本
- Bun 1.2.20 或更高版本

### 安裝與執行

1. 安裝依賴：

   ```bash
   # 使用 bun (推薦)
   bun install

   # 或使用 npm
   npm install
   ```

2. 啟動開發伺服器：

   ```bash
   # 開發模式
   bun dev

   # 或使用 npm
   npm run dev
   ```

3. 建置生產版本：

   ```bash
   # 建置生產環境
   bun build

   # 或使用 npm
   npm run build
   ```

4. 預覽生產版本：
   ```bash
   bun preview
   # 或
   npm run preview
   ```

## 🛠️ 開發工作流

### 🚀 開發指令

| 指令                | 說明                          |
| ------------------- | ----------------------------- |
| `bun dev`           | 啟動開發伺服器                |
| `bun build`         | 建置生產版本                  |
| `bun preview`       | 預覽生產版本                  |
| `bun test:unit`     | 執行單元測試                  |
| `bun test:coverage` | 產生測試覆蓋率報告            |
| `bun type-check`    | 執行 TypeScript 類型檢查      |
| `bun lint`          | 執行 ESLint 代碼檢查          |
| `bun lint:fix`      | 自動修復可修復的 ESLint 問題  |
| `bun format`        | 使用 Prettier 格式化代碼      |
| `bun reinstall`     | 重新安裝所有依賴              |
| `bun check:node`    | 使用 Node.js 環境執行完整檢查 |
| `bun check:bun`     | 使用 Bun 環境執行完整檢查     |

### 🔧 代碼規範

專案使用 ESLint 和 Prettier 進行代碼規範檢查與格式化。

- **ESLint 配置**：`eslint.config.js`
- **Prettier 配置**：`.prettierrc.json`

### 📝 提交規範

專案使用 Conventional Commits 規範提交訊息：

1. 標題 - 簡潔清楚限一行，使用祈使句，不以標點符號結尾。
2. 本文 - 條列式敘述，可空。
3. 結尾 - 備註單號。

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### 提交類型

- `feat`: 新功能
- `fix`: 修復錯誤
- `docs`: 文檔更新
- `style`: 代碼格式調整
- `refactor`: 重構代碼
- `perf`: 性能優化
- `test`: 測試相關
- `chore`: 構建過程或輔助工具的變動

## 📁 專案結構

```
src/
├── api/             # API 請求封裝
├── assets/          # 靜態資源
│   ├── fonts/       # 字體文件
│   ├── icons/       # 圖標資源
│   └── images/      # 圖片資源
├── components/      # 共用組件 - 命名規則：大駝峰命名
│   ├── base/        # 基礎組件 - 如 BaseInput、BaseButton 等
│   ├── custom/      # 自定義組件 - 如 Dialog、MemberTable 等
│   └── layout/      # 佈局組件
├── composables/     # Vue 組合式函數 - vue hooks，命名規則：小寫命名且 use開頭，如 useLang.ts
├── locales/         # 國際化文件
├── plugins/         # Vue 插件
├── router/          # 路由配置
├── stores/          # Pinia 狀態管理
├── types/           # TypeScript 類型定義
├── utils/           # 工具函數 - 純 JS 自訂函數
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

## 🧪 測試

執行單元測試：

```bash
npm run test:unit
```

## 📦 專案套件

### 核心依賴

- **Vue 3** - 現代化的前端框架
- **Vue Router** - 官方路由管理
- **Pinia** - Vue 官方狀態管理庫
- **TypeScript** - 型別安全的 JavaScript 超集
- **PrimeVue** - 豐富的 UI 元件庫

### 開發工具

- **Vite** - 下一代前端建置工具
- **Bun** - 快速的 JavaScript 運行時和套件管理員
- **ESLint** - 代碼質量檢查
- **Prettier** - 代碼格式化工具
- **Vitest** - 單元測試框架
- **Vue Test Utils** - Vue 組件測試工具

### 代碼質量

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

### 核心框架

- Vue 3.5.18
- TypeScript 5.8
- Vite 7.0.6
- Pinia 3.0.3 (狀態管理)
- Vue Router 4.5.1 (路由管理)
- PrimeVue 4.3.7 (UI 元件庫)

### 開發工具

- Bun 1.2.20 (包管理)
- ESLint 9.33.0 (代碼檢查)
- Prettier 3.6.2 (代碼格式化)
- Vitest 3.2.4 (測試框架)
- Testing Library Vue 8.1.0 (組件測試)
- Husky + lint-staged (Git Hooks)

## 技術棧詳情

### TypeScript 配置詳情

#### tsconfig.app.json

- **exclude 設定**
  - `src/**/__tests__/*` - 排除測試資料夾
  - `**/*.spec.ts` - 排除單元測試檔案

- **compilerOptions 設定**
  - `tsBuildInfoFile` - 統一快取目錄
  - `module: "ESNext"` - 為 Vite / Bun / ESM 架構設計
  - `moduleResolution: "Bundler"` - 相容 Vite/Bun 的解析方式
  - `paths` - 支援 `@` 作為 `src` 目錄的別名
  - `target: "ES2022"` - 與 Node.js 22 / Bun 相容
  - `strict: true` - 開啟嚴格模式
  - `types: ["node"]` - 支援 node 類型

#### tsconfig.node.json

- **extends**: "@tsconfig/node22/tsconfig.json"
- **noEmit**: true
- **tsBuildInfoFile**: "./node_modules/.tmp/tsconfig.config.tsbuildinfo"
- **module**: "ESNext"
- **moduleResolution**: "Bundler"
- **types**: ["node"]
- **include**: 包含所有設定檔 (vite.config._, vitest.config._ 等)

#### tsconfig.vitest.json

- **extends**: "./tsconfig.app.json"
- **include**: 包含測試目錄和全域型別定義
- **compilerOptions**:
  - `tsBuildInfoFile`: "./node_modules/.tmp/tsconfig.vitest.tsbuildinfo"
  - `module`: "ESNext"
  - `moduleResolution`: "Bundler"
  - `types`: ["node", "jsdom"]
  - `lib`: ["DOM", "ESNext"]
