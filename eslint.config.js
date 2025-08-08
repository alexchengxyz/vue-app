import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVuePug from 'eslint-plugin-vue-pug'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

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
	]),

	pluginVue.configs['flat/essential'],
	pluginVuePug.configs['flat/recommended'],
	vueTsConfigs.recommended,

	{
		rules: {
			'@typescript-eslint/no-unused-vars': 'off', // 暫時解決 pug 報錯問題
		},
	},

	{
		...pluginVitest.configs.recommended,
		files: ['src/**/__tests__/*'],
	},
	skipFormatting
)
