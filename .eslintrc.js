module.exports = {
	root: true,
	env: { browser: true, node: true, es2021: true },
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'plugin:vue/vue3-recommended',
		'plugin:vue-pug/vue3-recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
		'plugin:prettier/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint', 'vue-pug'],
	rules: {
		'vue/script-setup-uses-vars': 'error',
		'@typescript-eslint/no-unused-vars': 'off',
		'no-unused-vars': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{ js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
		],
		'vue/multi-word-component-names': 'off',
		'vue/require-default-prop': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-param-reassign': [
			'error',
			{ props: true, ignorePropertyModificationsFor: ['state', 'config', 'el', 'item', 'e'] },
		],
	},
	settings: {
		'import/resolver': {
			node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
			typescript: {},
		},
	},
};
