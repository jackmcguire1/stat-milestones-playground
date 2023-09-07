module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: '/node_modules/@vue/cli-service/webpack.config.js'
			}
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/strongly-recommended'
	],
	globals: {
	},
	rules: {
		// override/add rules settings here, such as:
		'vue/no-unused-vars': 'error',
		"vue/name-property-casing": ["error", "kebab-case"],
		'vue/attribute-hyphenation': [2, 'never'],
		"eqeqeq": 1,
		"no-var": 1,
		"require-await": 1,
		"yoda": 1,
		"prefer-const": 1,
		"prefer-arrow-callback": 1,
		"object-shorthand": 1,
		"vue/max-attributes-per-line": 0,
		"vue/order-in-components": 0,
		"vue/html-indent": 0,
		"vue/require-default-prop": 0,
		"no-mixed-spaces-and-tabs": 0,
		"no-console": 0
	}
}

// module.exports = {
// 	extends: [
// 		// add more generic rulesets here, such as:
// 		// 'eslint:recommended',
// 		'plugin:vue/vue3-recommended',
// 		// 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
// 	],
// 	rules: {
// 		// override/add rules settings here, such as:
// 		// 'vue/no-unused-vars': 'error'
// 	}
// }