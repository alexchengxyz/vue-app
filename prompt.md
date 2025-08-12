# Vue 3 現代化前端專案

## 專案概述

這是一個基於 Vue 3 的現代化前端專案，採用 TypeScript 開發，並整合了多種現代化開發工具和最佳實踐。

## 技術棧

### 核心框架

- Vue 3.5.18
- TypeScript 5.8
- Vite 7.0.6
- Pinia 3.0.3 (狀態管理)
- Vue Router 4.5.1 (路由管理)

### 開發工具

- Bun 1.2.20 (包管理)
- ESLint 9.33.0 (代碼檢查)
- Prettier 3.6.2 (代碼格式化)
- Vitest 3.2.4 (測試框架)
- Testing Library Vue 8.1.0 (組件測試)
- MSW (Mock Service Worker)

### 開發體驗優化

- unplugin-auto-import (自動導入 API)
- unplugin-vue-components (自動導入組件)
- Vite Plugin Vue DevTools (開發者工具)

## 專案結構

```
src/
├── assets/          # 靜態資源
│   ├── fonts/       # 字體文件
│   ├── icons/       # 圖標資源
│   └── images/      # 圖片資源
├── components/      # 可重用組件
├── router/          # 路由配置
├── stores/          # Pinia 狀態管理
├── views/           # 頁面組件
├── App.vue          # 根組件
├── main.ts          # 應用入口
└── auto-imports.d.ts # 自動導入類型聲明
```

## 代碼規範

### 代碼風格

- 使用 ESLint + Prettier 強制代碼風格
- 基於 Vue 官方推薦的 TypeScript 配置
- 整合 Airbnb 風格的代碼規範
- 使用 Husky + lint-staged 進行 Git 提交前檢查

### 類型系統

- 嚴格 TypeScript 模式
- 組件使用 `<script setup>` 語法
- 完整的組件 Props 和 Emits 類型定義

### 測試策略

- 單元測試: Vitest + Testing Library
- 組件測試: Vue Test Utils
- API 模擬: MSW
- 代碼覆蓋率報告

## 開發工作流

### 常用腳本

```bash
# 開發模式
bun dev

# 生產構建
bun build

# 代碼檢查
bun lint

# 代碼格式化
bun format

# 運行測試
bun test:unit

# 檢查類型
bun type-check
```

### Git 提交規範

使用 Conventional Commits 規範：

- `feat`: 新功能
- `fix`: 修復 bug
- `docs`: 文檔更新
- `style`: 代碼格式調整
- `refactor`: 代碼重構
- `test`: 測試相關
- `chore`: 構建過程或輔助工具的變動

## 最佳實踐

### 組件設計

- 使用 Composition API 和 `<script setup>` 語法
- 組件名稱使用 PascalCase
- Props 定義詳細的類型和默認值
- 使用 `defineEmits` 定義明確的事件

### 狀態管理

- 使用 Pinia 進行全局狀態管理
- 模塊化 Store 結構
- 使用 `storeToRefs` 解構響應式狀態

### 性能優化

- 組件和路由懶加載
- 使用 `v-memo` 優化渲染性能
- 按需加載第三方庫

## 環境變數

- `.env` - 默認環境變數
- `.env.development` - 開發環境
- `.env.production` - 生產環境
- `.env.test` - 測試環境

## 瀏覽器支援

- 現代瀏覽器 (ES modules 支援)
- 不支援 IE11 及以下版本

## 貢獻指南

1. 創建功能分支: `git checkout -b feature/your-feature`
2. 提交代碼: `git commit -m "feat: add your feature"`
3. 推送到遠端: `git push origin feature/your-feature`
4. 創建 Pull Request
   import unused from 'eslint-plugin-unused-imports'

export default [
{ ignores: ['dist', 'node_modules', '.vite', 'coverage', '**/*.d.ts'] },
pluginVue.configs['flat/recommended'],
...ts(),
skipFormatting,
{
files: ['**/*.{ts,tsx,vue}'],
plugins: { import: pluginImport, 'unused-imports': unused },
settings: {
'import/resolver': {
typescript: { alwaysTryTypes: true, project: true },
node: { extensions: ['.js', '.mjs', '.ts', '.tsx', '.vue'] },
},
},
rules: {
'import/order': [
'error',
{
'newlines-between': 'always',
alphabetize: { order: 'asc', caseInsensitive: true },
groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
pathGroups: [{ pattern: '@/**', group: 'internal', position: 'after' }],
pathGroupsExcludedImportTypes: ['builtin'],
},
],
'import/no-duplicates': 'error',
'import/newline-after-import': 'error',
'import/no-extraneous-dependencies': [
'error',
{
devDependencies: [
'**/*.test.*',
'**/*.spec.*',
'tests/**',
'vitest.config.*',
'vite.config.*',
'eslint.config.*',
'scripts/**',
],
},
],
'prefer-const': 'error',
'no-var': 'error',
'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
eqeqeq: ['error', 'always'],
curly: ['error', 'all'],
'dot-notation': 'error',
'no-else-return': 'error',
'no-useless-return': 'error',
'consistent-return': 'warn',
'no-restricted-syntax': [
'error',
{ selector: 'ForInStatement', message: 'Avoid for..in; 改用 Object.keys/entries。' },
{ selector: 'LabeledStatement', message: '避免使用 label。' },
{ selector: 'WithStatement', message: '`with` 會降低可預期性。' },
],
'no-return-await': 'off',
'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
'no-await-in-loop': 'warn',
'unused-imports/no-unused-imports': 'error',
'vue/script-setup-uses-vars': 'error',
'no-undef': 'off',
'no-shadow': 'off',
'no-use-before-define': 'off',
'@typescript-eslint/no-shadow': 'error',
'@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
'@typescript-eslint/no-unused-vars': [
'warn',
{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
],
},
},
]

```

```
