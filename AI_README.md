# Vue 3 現代化前端專案 - AI 優化版

## 專案元數據

```json
{
  "project": {
    "name": "vue-app",
    "version": "0.0.0",
    "type": "module",
    "packageManager": "bun@1.2.20"
  },
  "requirements": {
    "node": ">=22.18.0 <23",
    "bun": ">=1.2.20 <2"
  }
}
```

## 技術棧

### 核心

- Vue 3.5.18 (Composition API + `<script setup>`)
- TypeScript 5.8
- Vite 7.0.6
- Pinia 3.0.3 (狀態管理)
- Vue Router 4.5.1 (路由)
- PrimeVue 4.3.7 (UI 元件庫)

### 開發工具

- Bun 1.2.20 (包管理)
- ESLint 9.33.0 + Prettier 3.6.2 (代碼質量)
- Vitest 3.2.4 + Testing Library (測試)
- MSW (API 模擬)
- Vue DevTools (調試)

## 專案結構

```
src/
├── assets/          # 靜態資源
├── components/      # 可重用組件
├── router/          # 路由配置
│   └── index.ts     # 路由定義
├── stores/          # Pinia 狀態管理
│   └── counter.ts   # 計數器示例
├── styles/          # 全局樣式
├── views/           # 頁面組件
├── App.vue          # 根組件
└── main.ts          # 應用入口
```

## 開發指令

```json
{
  "dev": "vite",
  "build": "run-p type-check build-only",
  "preview": "vite preview",
  "test:unit": "vitest --run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage",
  "type-check": "vue-tsc --build",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx,.vue",
  "format": "prettier --write .",
  "prepare": "husky"
}
```

## 代碼規範

### 類型定義

- 使用 TypeScript 嚴格模式
- 組件 Props 和 Emits 需明確定義類型
- 使用 `interface` 定義複雜數據結構

### 組件約定

- 使用 `<script setup>` 語法
- 組件名稱使用 PascalCase
- 單文件組件結構：
  1. `<script setup>`
  2. `<template>`
  3. `<style scoped>`

### 狀態管理

- 使用 Pinia 管理全局狀態
- Store 使用 `defineStore` 定義
- 使用 `storeToRefs` 解構響應式狀態

## 測試策略

### 單元測試

- 使用 Vitest + Testing Library
- 測試文件命名：`*.spec.ts` 或 `*.test.ts`
- 測試覆蓋率目標：
  - 語句覆蓋率: 80%
  - 分支覆蓋率: 80%
  - 行覆蓋率: 80%
  - 函數覆蓋率: 80%

### 組件測試

- 使用 `@vue/test-utils`
- 測試組件渲染和交互
- 模擬用戶事件

## 環境變數

```env
# .env
VITE_APP_TITLE=My App
VITE_API_BASE_URL=/api

# .env.development
VITE_API_BASE_URL=http://localhost:3000/api

# .env.production
VITE_API_BASE_URL=/api
```

## 最佳實踐

### 性能優化

- 組件和路由懶加載
- 使用 `v-memo` 優化渲染
- 按需導入第三方庫

### 代碼分割

- 路由級代碼分割
- 組件級代碼分割
- 第三方庫分離

## 提交規範

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### 提交類型

- `feat`: 新功能
- `fix`: 修復 bug
- `docs`: 文檔更新
- `style`: 代碼格式調整
- `refactor`: 代碼重構
- `test`: 測試相關
- `chore`: 構建過程或輔助工具的變動

## 開發工作流

1. 創建功能分支: `git checkout -b feature/your-feature`
2. 開發功能
3. 運行測試: `bun test:unit`
4. 代碼檢查: `bun lint`
5. 代碼格式化: `bun format`
6. 提交代碼: `git commit -m "feat: add your feature"`
7. 推送到遠端: `git push origin feature/your-feature`
8. 創建 Pull Request

## 依賴管理

### 添加依賴

```bash
# 生產依賴
bun add <package>

# 開發依賴
bun add -d <package>
```

### 更新依賴

```bash
bun update
```

## 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 不支援 IE11 及以下版本
