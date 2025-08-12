import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import ts from '@vue/eslint-config-typescript';
import importPlugin from 'eslint-plugin-import';
import unused from 'eslint-plugin-unused-imports';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

// polyfill（可保留）
if (typeof globalThis.structuredClone === 'undefined') {
  globalThis.structuredClone = (val) => JSON.parse(JSON.stringify(val));
}

if (!Array.prototype.findLastIndex) {
  Array.prototype.findLastIndex = function (predicate) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (predicate(this[i], i, this)) {
        return i;
      }
    }

    return -1;
  };
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
};

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
};

// JS/TS 通用邏輯（含 Airbnb 常見規則）
const customConfig = {
  files: ['**/*.{ts,tsx,js,jsx}'],
  plugins: {
    import: importPlugin,
    'unused-imports': unused,
  },
  rules: {
    // 基本寫作風格
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
    'object-shorthand': 'error',

    // Airbnb 風格：匯入與函式
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'func-style': ['error', 'expression'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
    'no-useless-constructor': 'error',

    // Object / Array style
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'no-multi-spaces': 'error',

    // 程式結構與一致性
    'no-duplicate-imports': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'consistent-this': ['error', 'self'],
    semi: ['error', 'always'], // 強制使用分號結尾
    'prefer-destructuring': ['error', { object: true, array: false }],

    // Shadow 與宣告順序
    'no-shadow': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],

    // 限制語法與 async 處理
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'no-restricted-syntax': [
      'error',
      { selector: 'ForInStatement', message: '請改用 Object.keys/entries' },
      { selector: 'LabeledStatement', message: '請避免使用 label' },
      { selector: 'WithStatement', message: '請避免使用 with' },
    ],
    'no-return-await': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    'no-await-in-loop': 'warn',

    // 未使用匯入與變數
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],

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
      { blankLine: 'always', prev: 'if', next: '*' },
    ],

    // 語意優化
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'no-implicit-coercion': 'error',
    'prefer-object-spread': 'error',
  },
};

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
    'vue/block-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
  },
};

// 移除 .vue 中未使用變數誤判
const suppressVueNoUsedVars = {
  files: ['**/*.vue'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
  },
};

// 匯出 Flat ESLint 設定
export default [
  { ignores: ['dist', 'node_modules', '.vite', 'coverage', '**/*.d.ts'] },
  vueParserConfig,
  ...pluginVue.configs['flat/recommended'],
  ...ts(),
  skipFormatting,
  globalBlockBun,
  vueCustomRules,
  suppressVueNoUsedVars,
  customConfig,
];
