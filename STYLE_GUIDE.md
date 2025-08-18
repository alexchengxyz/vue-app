# Vue 3 專案風格指南

## 目錄

1. [程式碼風格](#程式碼風格)
2. [Vue 元件](#vue-元件)
3. [TypeScript 規範](#typescript-規範)
4. [專案結構](#專案結構)
5. [Git 提交規範](#git-提交規範)
6. [測試規範](#測試規範)
7. [國際化 (i18n)](#國際化-i18n)
8. [狀態管理](#狀態管理)
9. [路由規範](#路由規範)
10. [代碼審查指南](#代碼審查指南)
11. [最佳實踐](#最佳實踐)

## 程式碼風格

### 縮排與空格

- 使用 **2 個空格** 作為縮排（非 Tab）
- 在花括號 `{}` 前後加上空格
- 在運算符前後加上空格
- 在逗號後加上空格
- 使用 Pug 模板時，保持一致的縮進層級

### 命名規範

- **變數**：使用 camelCase
- **常數**：使用 UPPER_SNAKE_CASE
- **元件**：使用 PascalCase
- **Props**：使用 camelCase（在模板中使用 kebab-case）
- **事件**：使用 kebab-case

### 引號

- 使用單引號 `'` 作為字串的引號
- 模板字串使用反引號 `` ` ``
- 在 Pug 模板中使用雙引號 `""` 作為屬性值引號

## Vue 元件

### 元件結構

```vue
<template>
  <div class="component-name">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button @click="increment">點擊次數: {{ count }}</button>
    <p v-if="showDetails">這是詳細資訊</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSomeStore } from '@/stores/someStore';

// Props 定義
const props = defineProps({
  // 必填的字符串屬性
  title: {
    type: String,
    required: true,
    validator: (value: string) => value.length > 0,
  },
  // 可選的數字屬性，帶有預設值
  initialCount: {
    type: Number,
    default: 0,
    validator: (value: number) => value >= 0,
  },
});

// 發射事件定義
const emit = defineEmits<{
  (e: 'count-updated', value: number): void;
  (e: 'reset'): void;
}>();

// 使用 Store
const store = useSomeStore();

// 響應式狀態
const count = ref(props.initialCount);
const showDetails = ref(false);
const router = useRouter();

// 計算屬性
const message = computed(() => {
  return `當前計數是: ${count.value}`;
});

// 方法
function increment() {
  count.value++;
  emit('count-updated', count.value);
}

function reset() {
  count.value = 0;
  emit('reset');
}

// 生命週期鉤子
onMounted(() => {
  console.log('元件已掛載');
  // 獲取初始數據
  fetchData();
});

// 異步方法
async function fetchData() {
  try {
    await store.fetchSomeData();
  } catch (error) {
    console.error('獲取數據失敗:', error);
  }
}

// 暴露給父元件的方法
defineExpose({
  reset,
  getCount: () => count.value,
});
</script>

<style scoped>
.component-name {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-background-soft);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button {
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: var(--color-primary-dark);
}
</style>
```

### 元件設計原則

1. **單一職責**
   - 每個元件應該只負責一個功能
   - 如果元件變得過於複雜，考慮將其拆分為多個小組件

2. **可重用性**
   - 設計可配置的元件，通過 props 控制行為
   - 使用插槽 (slots) 提供靈活性

3. **組合式函數**
   - 將可重用的邏輯提取到組合式函數中
   - 使用 `use` 前綴命名組合式函數，例如 `useUserData`
   - 組合式函數應放在 `src/composables` 目錄下

4. **Props 驗證**
   - 總是為 props 定義類型和驗證規則
   - 為必填的 props 設置 `required: true`
   - 提供有意義的默認值

5. **事件處理**
   - 使用 `defineEmits` 明確聲明事件
   - 事件名稱使用 kebab-case
   - 傳遞有意義的事件參數

6. **Pug 模板**
   - 使用簡潔的 Pug 語法
   - 保持一致的縮進
   - 對於複雜的模板邏輯，考慮使用 TypeScript 計算屬性代替

7. **PrimeVue 組件**
   - 使用 PascalCase 導入 PrimeVue 組件
   - 遵循 PrimeVue 的文檔進行組件配置
   - 自定義主題應放在 `src/styles/theme` 目錄下

## TypeScript 規範

### 類型定義

- 總是為函數參數和返回值定義類型
- 使用 `interface` 定義物件類型
- 使用 `type` 定義聯合類型和交叉類型
- 避免使用 `any` 類型，優先使用更具體的類型
- 使用 `unknown` 替代 `any` 當類型不確定時
- 使用 `as const` 進行常量斷言

### 基本類型

```typescript
// 基本類型
let isActive: boolean = true;
let count: number = 0;
let name: string = 'Vue';
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ['age', 25];
let notSure: unknown = 4;

// 枚舉
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

### 接口與類型別名

```typescript
// 接口定義
interface User {
  id: number;
  name: string;
  email?: string;
  roles: string[];
  createdAt: Date;
  updateUser: (id: number, data: Partial<User>) => Promise<void>;
}

// 擴展接口
interface AdminUser extends User {
  permissions: string[];
  isSuperAdmin: boolean;
}

// 類型別名
type UserRole = 'admin' | 'editor' | 'viewer';
type ID = string | number;
type Nullable<T> = T | null;

// 映射類型
type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
type PickUser = Pick<User, 'id' | 'name'>;
type OmitUser = Omit<User, 'roles' | 'createdAt'>;

// 工具類型
function updateUser(user: User, fieldsToUpdate: Partial<User>): User {
  return { ...user, ...fieldsToUpdate };
}
```

### 泛型

```typescript
// 泛型函數
function identity<T>(arg: T): T {
  return arg;
}

// 泛型約束
interface HasLength {
  length: number;
}

function loggingIdentity<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 泛型類
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

// 泛型默認類型
interface DefaultGeneric<T = string> {
  data: T;
}
```

### 在 Vue 中使用 TypeScript

```typescript
// 組件 Props 類型
export interface UserProfileProps {
  user: User;
  isAdmin?: boolean;
  onUpdate?: (user: User) => void;
}

// 組件 Emits 類型
interface Emits {
  (e: 'update:modelValue', value: string): void;
  (e: 'submit'): void;
}

// 使用 defineComponent
export default defineComponent({
  name: 'UserProfile',
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'submit'],
  setup(props, { emit }) {
    // 組件邏輯
  },
});
```

### 實用類型工具

```typescript
// 條件類型
type NonNullableUser = NonNullable<User | null | undefined>;
type UserKeys = keyof User; // 'id' | 'name' | 'email' | 'roles' | 'createdAt'

// 條件類型
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false

// 推斷類型
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

### 最佳實踐

1. **避免使用 `any` 類型**
   - 使用更具體的類型
   - 使用 `unknown` 替代 `any` 當類型不確定時
   - 使用類型斷言 `as` 時要謹慎

2. **使用類型推斷**
   - 讓 TypeScript 推斷變數類型
   - 只在必要時顯式註明類型

3. **使用枚舉和常量**
   - 使用 `const enum` 提高運行時性能
   - 使用 `as const` 進行常量斷言

4. **錯誤處理**
   - 使用自定義錯誤類型
   - 使用 `never` 類型處理不可能的情況

5. **第三方庫類型**
   - 為沒有類型的庫創建聲明文件
   - 使用 `@types` 獲取類型定義

## 專案結構

```
src/
├── assets/          # 靜態資源（圖片、字體、圖標等）
├── components/      # 共用元件
├── composables/     # 組合式函數
├── lang/            # 國際化文件
├── router/          # 路由配置
├── stores/          # Pinia store
├── styles/          # 全局樣式
└── utils/           # 工具函數
```

### 主要技術棧

- Vue 3.5 + TypeScript
- Vite 7.x
- Pinia 3.x (狀態管理)
- PrimeVue 4.x (UI 組件庫)
- Vue Router 4.x (路由)
- Vitest (測試框架)
- ESLint + Prettier (代碼檢查與格式化)

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
- 測試文件應與被測試文件同名，後綴為 `.spec.ts` 或 `.test.ts`
- 使用 `describe` 和 `it` 組織測試用例

### 組件測試

- 使用 `@vue/test-utils` 進行組件測試
- 測試組件的 props、事件和插槽
- 模擬用戶交互和異步操作

### 測試覆蓋率

- 使用 Vitest 的內置覆蓋率報告
- 目標覆蓋率：
  - 語句覆蓋率：80%+
  - 分支覆蓋率：70%+
  - 函數覆蓋率：80%+
  - 行覆蓋率：80%+

### 測試命令

- `bun test:unit`: 運行單元測試
- `bun test:watch`: 監聽模式運行測試
- `bun test:coverage`: 生成測試覆蓋率報告

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
