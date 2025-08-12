# Vue 3 專案風格指南

## 目錄

1. [程式碼風格](#程式碼風格)
2. [Vue 元件](#vue-元件)
3. [TypeScript 規範](#typescript-規範)
4. [專案結構](#專案結構)
5. [Git 提交規範](#git-提交規範)

## 程式碼風格

### 縮排與空格

- 使用 **2 個空格** 作為縮排（非 Tab）
- 在花括號 `{}` 前後加上空格
- 在運算符前後加上空格
- 在逗號後加上空格

### 命名規範

- **變數**：使用 camelCase
- **常數**：使用 UPPER_SNAKE_CASE
- **元件**：使用 PascalCase
- **Props**：使用 camelCase（在模板中使用 kebab-case）
- **事件**：使用 kebab-case

### 引號

- 使用單引號 `'` 作為字串的引號
- 模板字串使用反引號 `` ` ``

## Vue 元件

### 元件結構

```vue
<template>
  <div class="component-name">
    <!-- 模板內容 -->
  </div>
</template>

<script lang="ts" setup>
  // 導入
  import { ref, computed } from 'vue'

  // Props
  defineProps({
    // 使用 TypeScript 類型
    msg: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  })

  // 響應式狀態
  const state = ref(0)

  // 計算屬性
  const doubleCount = computed(() => state.value * 2)

  // 方法
  function increment() {
    state.value++
  }

  // 暴露給模板的方法和屬性
  defineExpose({
    increment,
  })
</script>

<style scoped>
  /* 元件樣式 */
  .component-name {
    color: var(--color-text);
  }
</style>
```

## TypeScript 規範

### 類型定義

- 總是為函數參數和返回值定義類型
- 使用 `interface` 定義物件類型
- 使用 `type` 定義聯合類型和交叉類型

### 範例

```typescript
// 介面定義
interface User {
  id: number
  name: string
  email?: string
}

// 類型別名
type UserRole = 'admin' | 'user' | 'guest'

// 泛型函數
function getFirst<T>(items: T[]): T | undefined {
  return items[0]
}
```

## 專案結構

```
src/
├── assets/          # 靜態資源
├── components/      # 共用元件
│   ├── ui/         # 基礎 UI 元件
│   └── layout/     # 佈局元件
├── composables/    # 組合式函數
├── router/         # 路由配置
├── stores/         # Pinia store
├── styles/         # 全局樣式
├── types/          # TypeScript 類型定義
└── views/          # 頁面元件
```

## Git 提交規範

提交訊息格式：

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### 提交類型 (type)

- `feat`: 新功能
- `fix`: 修復 bug
- `docs`: 文檔更新
- `style`: 代碼格式（不影響代碼運行的變動）
- `refactor`: 重構（既不新增功能，也不是修復 bug）
- `perf`: 性能優化
- `test`: 增加測試
- `chore`: 構建過程或輔助工具的變動

### 範例

```
feat(auth): 添加使用者登入功能

- 實作 JWT 認證
- 添加登入表單驗證

Closes #123
```

## 程式碼審查指南

### 應該檢查的事項

- 代碼是否符合專案風格指南
- 是否有適當的單元測試
- 是否有適當的文檔和註解
- 是否有安全隱患
- 性能影響

### 代碼審查原則

- 建設性反饋
- 解釋為什麼需要修改
- 提供具體的改進建議
- 尊重他人代碼風格

## 最佳實踐

### 性能優化

- 使用 `v-once` 和 `v-memo` 優化渲染性能
- 懶加載路由元件
- 使用 `shallowRef` 和 `shallowReactive` 減少不必要的響應式開銷

### 安全性

- 永遠不要信任用戶輸入
- 使用 Content Security Policy (CSP)
- 防範 XSS 攻擊

### 可訪問性 (a11y)

- 使用語義化 HTML
- 確保表單元素有對應的標籤
- 提供適當的 ARIA 屬性

## 依賴管理

### 更新依賴

- 定期更新依賴以修復安全漏洞
- 使用 `bun outdated` 檢查過時的依賴
- 更新後進行全面測試

### 新增依賴

- 評估依賴的維護狀態和社區支持
- 檢查依賴的大小和性能影響
- 考慮是否有現有的解決方案可以替代

## 測試策略

### 單元測試

- 測試元件行為而非實現細節
- 使用 `@testing-library/vue` 進行組件測試
- 測試邊界條件和錯誤處理

### 整合測試

- 測試多個元件的交互
- 模擬用戶行為

### E2E 測試

- 使用 Cypress 或 Playwright 進行端到端測試
- 測試關鍵用戶流程

## 文檔

### 元件文檔

- 使用 JSDoc 註解
- 記錄 Props、事件和插槽
- 提供使用範例

### 專案文檔

- 保持 README 更新
- 記錄開發環境設置步驟
- 提供部署指南

## 持續整合/持續部署 (CI/CD)

### 自動化測試

- 在每次提交時運行測試
- 在合併請求前運行測試

### 部署流程

- 自動化部署流程
- 使用環境變數管理配置
- 實現藍綠部署或金絲雀發布以減少停機時間
