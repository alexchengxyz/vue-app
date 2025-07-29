# Vue 3 + TypeScript + Vite

這是一個使用 Vue 3、TypeScript 和 Vite 的前端專案模板。

## 功能特色

- ⚡️ [Vue 3](https://vuejs.org/), [Vite 7](https://vitejs.dev/), [Bun](https://bun.sh/), [ESBuild](https://esbuild.github.io/) - 快速且現代化的前端開發體驗
- 🦾 TypeScript 支援 - 使用 TypeScript 開發，提供更好的開發體驗和類型檢查
- 📦 元件自動導入 - 自動導入 Vue 和自定義元件
- 🔥 使用新的 `<script setup>` 語法
- 🍍 [Pinia](https://pinia.vuejs.org/) - 直觀、類型安全且易於使用的狀態管理
- 🛣️ [Vue Router](https://router.vuejs.org/) - 靈活的路由管理
- 🎯 使用 [ESLint](https://eslint.org/) 和 [Prettier](https://prettier.io/) 進行代碼風格檢查和格式化
- 🐺 使用 [Husky](https://typicode.github.io/husky/) 和 [lint-staged](https://github.com/okonet/lint-staged) 進行 Git 提交前檢查
- ✅ 使用 [Vitest](https://vitest.dev/) 進行單元測試

## 開發環境要求

- Node.js 20.19.0 或更高版本
- 建議使用 [bun](https://bun.sh/) 進行開發
- 生產環境支援 npm 和 bun

## 推薦的 IDE 設置

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (並停用 Vetur)
- [WebStorm](https://www.jetbrains.com/webstorm/) - 開箱即用的 Vue 和 TypeScript 支援

## 項目設置

### 安裝依賴

```bash
# 使用 bun 安裝 (推薦開發使用)
bun install

# 或使用 npm 安裝 (生產環境推薦)
npm install
```

### 開發伺服器

```bash
# 啟動開發伺服器
bun run dev

# 或使用 npm
npm run dev
```

### 編譯與打包

```bash
# 編譯並壓縮生產版本
bun run build

# 或使用 npm
npm run build

# 預覽生產版本
bun run preview
```

### 代碼檢查與格式化

```bash
# 執行 ESLint 檢查
bun run lint

# 修復 ESLint 錯誤
bun run lint:fix

# 格式化代碼
bun run format
```

### 執行測試

```bash
# 運行單元測試
bun run test:unit

# 運行測試並生成覆蓋率報告
bun run test:unit --coverage
```

## 專案結構

```
vue-app/
├── .bunfig.toml        # Bun 配置
├── .editorconfig       # 編輯器設定
├── .gitattributes      # Git 屬性
├── .gitignore          # Git 忽略文件
├── .husky/             # Git hooks 配置
├── .npmrc              # npm 設定
├── .prettierrc.json    # Prettier 配置
├── .vscode/            # VS Code 設定
├── bun.lock            # Bun 鎖定檔
├── env.d.ts            # TypeScript 環境宣告
├── eslint.config.js    # ESLint 配置
├── index.html          # HTML 模板
├── package.json        # 項目配置
├── public/             # 靜態資源
├── src/
│   ├── assets/         # 圖片等靜態資源
│   ├── components/     # 可複用組件
│   ├── router/         # 路由配置
│   ├── stores/         # Pinia 狀態管理
│   ├── views/          # 頁面組件
│   ├── App.vue         # 根組件
│   └── main.ts         # 入口文件
├── tsconfig.app.json   # TypeScript 應用設定
├── tsconfig.json       # TypeScript 基本設定
├── tsconfig.node.json  # Node 用 TypeScript 設定
├── tsconfig.vitest.json# 測試用 TypeScript 設定
├── vite.config.ts      # Vite 配置
├── vitest.config.ts    # Vitest 配置
└── README.md           # 項目文檔
```

## 開發規範

### 代碼風格

- JavaScript/TypeScript 使用 Tab 縮排（等同 4 格）
- JSON 使用 2 空格縮排
- 使用單引號
- 行末不加分號
- 對象和數組的尾隨逗號
- 每行最多 120 個字符

### Git 提交規範

我們使用 [Conventional Commits](https://www.conventionalcommits.org/) 規範提交信息：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### 提交類型 (type)

- `feat`: 新功能
- `fix`: 修復 bug
- `docs`: 文檔更新
- `style`: 代碼格式（不影響代碼運行的變動）
- `refactor`: 重構（既不增加新功能，也不是修復 bug）
- `perf`: 性能優化
- `test`: 增加測試
- `chore`: 構建過程或輔助工具的變動
- `revert`: 回退
- `build`: 打包
- `ci`: 持續集成相關

## 瀏覽器支援

- 現代瀏覽器（Chrome, Firefox, Safari, Edge 最新版）
- 不支援 IE11 及以下版本

## 授權

[MIT](LICENSE) © 2023-PRESENT [Your Name]
