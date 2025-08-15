import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import ts from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import unused from 'eslint-plugin-unused-imports'

// polyfill（可保留）
if (typeof globalThis.structuredClone === 'undefined') {
  globalThis.structuredClone = (val) => JSON.parse(JSON.stringify(val))
}

if (!Array.prototype.findLastIndex) {
  Array.prototype.findLastIndex = function (predicate) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (predicate(this[i], i, this)) {
        return i
      }
    }

    return -1
  }
}

// 禁用 Bun 全域變數，避免誤用
const globalBlockBun = {
  files: ['**/*.{ts,js,vue}'],
  languageOptions: {
    globals: {
      Bun: false, // Bun is not defined (in Node)
    },
  },
  rules: {
    'no-restricted-globals': ['error', 'Bun'],
  },
}

// 讓 .vue 檔正確使用 vue-eslint-parser
const vueParserConfig = {
  files: ['**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module',
      extraFileExtensions: ['.vue'],
    },
  },
}

// JS/TS 通用邏輯規則（不含 Vue 規則）
const customConfig = {
  files: ['**/*.{ts,tsx,js,jsx}'],
  plugins: {
    'unused-imports': unused,
  },
  rules: {
    // 基本風格
    'prefer-const': 'error',
    'no-var': 'error',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'dot-notation': 'error',
    'no-else-return': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'warn',
    'no-multi-assign': 'error',
    'prefer-template': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': 'error',

    // 限制語法
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'no-restricted-syntax': [
      'error',
      { selector: 'ForInStatement', message: '請改用 Object.keys/entries' },
      { selector: 'LabeledStatement', message: '請避免使用 label' },
      { selector: 'WithStatement', message: '請避免使用 with' },
    ],

    // async / await 處理
    'no-return-await': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    'no-await-in-loop': 'warn',

    // 未使用變數／匯入
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],

    // Shadow 與宣告順序
    'no-undef': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],

    // Console / Debugger
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',

    // 空行結構
    'newline-before-return': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
  },
}

// Vue 專屬規則
const vueCustomRules = {
  files: ['**/*.vue'],
  rules: {
    'vue/no-unused-components': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/require-component-is': 'off',
    'vue/require-prop-types': 'off',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
  },
}

const suppressVueNoUsedVars = {
  files: ['**/*.vue'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // 關閉此規則在 .vue 檔
  },
}

export default [
  { ignores: ['dist', 'node_modules', '.vite', 'coverage', '**/*.d.ts'] },

  // 確保 .vue 檔 parser 正確
  vueParserConfig,

  // Vue + TS 推薦規則
  ...pluginVue.configs['flat/recommended'],
  ...ts(),

  // Prettier 格式覆蓋
  skipFormatting,

  // 禁用 Bun
  globalBlockBun,

  // Vue 專屬補充規則
  vueCustomRules,
  suppressVueNoUsedVars,

  // JS/TS 通用邏輯
  customConfig,
]
