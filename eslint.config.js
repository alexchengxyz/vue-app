import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import pluginImport from 'eslint-plugin-import';
import pluginN from 'eslint-plugin-n';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

const compat = new FlatCompat({
        baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default defineConfigWithVueTs(
	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}'],
	},

	globalIgnores([
		'**/dist/**',
		'**/dist-ssr/**',
		'**/coverage/**',
		'node_modules/',
		'*.log',
		'*.md',
		'*.json',
		'*.yaml',
		'*.yml',
		'.DS_Store',
		'.vscode/',
		'.idea/',
		'*.min.*',
		'public/',
		'.husky/',
		'*.local',
		'eslint.config.js',
	]),

	{
		plugins: {
			import: pluginImport,
			n: pluginN,
		},
	},

	...compat.extends('airbnb-base'),

	pluginVue.configs['flat/essential'],
	vueTsConfigs.recommended,

	{
		rules: {
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
			'@typescript-eslint/no-unused-vars': 'off', // 暫時解決 pug 報錯問題
		},
	},

	{
		...pluginVitest.configs.recommended,
		files: ['src/**/__tests__/*'],
	},
        skipFormatting
);
