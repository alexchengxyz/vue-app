# Vue 3 專案建立與 ESLint 設定

## 安裝套件

### 基礎

1. pug
2. bun
3. typescript
4. eslint
5. prettier
6. eslint-plugin-vue
7. @vue/eslint-config-typescript
8. @vue/eslint-config-prettier
9. @vue/eslint-config-prettier/skip-formatting

### 型別/檢查（必裝）

10. vue-tsc
11. vite-plugin-checker

### Git 流程（必裝）

12. husky
13. lint-staged
14. @commitlint/cli
15. @commitlint/config-conventional

### ESLint 補強（必裝）

16. eslint-plugin-import
17. eslint-plugin-unused-imports

### DX 強化（強烈建議）

18. unplugin-auto-import
19. unplugin-vue-components
20. prettier-plugin-pug
21. prettier-plugin-packagejson
22. vitest
23. @testing-library/vue
24. msw

---

## Coding Style 規範

1. 自訂類似 Airbnb 的風格以解決 Airbnb 的衝突問題
2. 以 Vue 官方 + TS + Prettier 作為基底
3. 精選 Airbnb 規則補齊嚴謹度

### 模組與匯入（import）

- import/order
- import/no-duplicates
- import/newline-after-import
- import/no-extraneous-dependencies

### 變數與指派

- prefer-const
- no-var
- no-param-reassign

### 邏輯與可讀性

- eqeqeq
- curly
- dot-notation
- no-else-return
- no-useless-return
- consistent-return

### 非建議語法

- no-restricted-syntax
- no-plusplus（可選）
- no-underscore-dangle（可選）

### 非同步與 Promise

- no-return-await
- prefer-promise-reject-errors
- no-await-in-loop

### TS 版權衡（與 @typescript-eslint 配合）

- 關閉 JS 版 no-shadow，啟用 @typescript-eslint/no-shadow
- 關閉 JS 版 no-use-before-define，改用 @typescript-eslint/no-use-before-define
- no-unused-vars 改用 @typescript-eslint/no-unused-vars，搭配 vue/script-setup-uses-vars

---

## eslint.config.js 範例

```js
import pluginVue from 'eslint-plugin-vue'
import ts from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import pluginImport from 'eslint-plugin-import'
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
