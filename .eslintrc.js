/* eslint-disable array-element-newline */
module.exports =
{
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"plugins": [
		"react",
		"sonarjs",
		"@typescript-eslint"
	],
	"extends": [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"env": {
		"node": true,
		"es6": true,
		"browser": true,
		"jest": true
	},
	"globals": {
		"log": true
	},
	"reportUnusedDisableDirectives": true,
	"ignorePatterns": ["global.d.ts", "scripts"],
	"rules": {
		"sonarjs/cognitive-complexity": "warn",
		"sonarjs/max-switch-cases": "warn",
		"sonarjs/no-all-duplicated-branches": "warn",
		"sonarjs/no-duplicate-string": "warn",
		"sonarjs/no-duplicated-branches": "warn",
		"sonarjs/no-element-overwrite": "warn",
		"sonarjs/no-extra-arguments": "warn",
		"sonarjs/no-identical-conditions": "warn",
		"sonarjs/no-identical-functions": "warn",
		"sonarjs/no-identical-expressions": "warn",
		"sonarjs/no-inverted-boolean-check": "warn",
		"sonarjs/no-one-iteration-loop": "warn",
		"sonarjs/no-redundant-boolean": "warn",
		"sonarjs/no-small-switch": "warn",
		"sonarjs/no-use-of-empty-return-value": "warn",
		"sonarjs/no-useless-catch": "warn",
		"sonarjs/prefer-immediate-return": "warn",
		"sonarjs/prefer-object-literal": "warn",
		"sonarjs/prefer-single-boolean-return": "warn",
		"sonarjs/prefer-while": "warn",
		"accessor-pairs": "error",
		"array-bracket-newline": "off",
		"array-bracket-spacing": "error",
		"array-callback-return": "off",
		"array-element-newline": ["warn", { "minItems": 3 }],
		"arrow-body-style": "off",
		"arrow-parens": "off",
		"arrow-spacing": "error",
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": ["error", "allman", { "allowSingleLine": true }],
		"callback-return": "off",
		"camelcase": "error",
		"capitalized-comments": "off",
		"class-methods-use-this": "off",
		"comma-dangle": "error",
		"comma-spacing": "error",
		"comma-style": "error",
		"complexity": "error",
		"computed-property-spacing": "error",
		"consistent-return": "error",
		"consistent-this": "error",
		"constructor-super": "error",
		"curly": "error",
		"default-case": "error",
		"dot-location": "error",
		"dot-notation": "error",
		"eol-last": "error",
		"eqeqeq": "off",
		"for-direction": "error",
		"func-call-spacing": "error",
		"func-name-matching": "error",
		"func-names": "off",
		"func-style": ["off", "declaration"],
		"function-paren-newline": "warn",
		"generator-star-spacing": "error",
		"getter-return": "error",
		"global-require": "off",
		"guard-for-in": "error",
		"handle-callback-err": "error",
		"id-blacklist": "error",
		"id-length": "off",
		"id-match": "error",
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"init-declarations": "error",
		"jsx-quotes": "error",
		"key-spacing": "error",
		"keyword-spacing": "error",
		"line-comment-position": "off",
		"linebreak-style": "off",
		"lines-around-comment": "error",
		"lines-around-directive": "error",
		"max-depth": "error",
		"max-len": ["error", { "code": 120, "ignoreComments": true, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreUrls": true }],
		"max-lines": "off",
		"max-nested-callbacks": "error",
		"max-params": ["warn", { "max": 10 }],
		"max-statements-per-line": "error",
		"max-statements": ["error", { "max": 50 }],
		"multiline-ternary": "off",
		"new-cap": "off",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-await-in-loop": "error",
		"no-bitwise": "error",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-catch-shadow": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-confusing-arrow": ["error", { "allowParens": true }],
		"no-console": 1,
		"no-const-assign": "error",
		"no-constant-condition": "error",
		"no-continue": "error",
		"no-control-regex": "error",
		"no-debugger": "warn",
		"no-delete-var": "error",
		"no-div-regex": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-empty-character-class": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-empty": "error",
		"no-eq-null": "off",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-extra-semi": "error",
		"no-fallthrough": "off",
		"no-floating-decimal": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-invalid-this": "error",
		"no-irregular-whitespace": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": ["warn", { "ignore": [-1, 0, 1, 2, 3, 4, 5] }],
		"no-mixed-operators": "error",
		"no-mixed-requires": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-assign": "off",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "error",
		"no-native-reassign": "error",
		"no-negated-condition": "off",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "off",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-symbol": "error",
		"no-new-wrappers": "error",
		"no-new": "error",
		"no-obj-calls": "error",
		"no-octal-escape": "error",
		"no-octal": "error",
		"no-param-reassign": "error",
		"no-path-concat": "error",
		"no-plusplus": "off",
		"no-process-env": "off",
		"no-process-exit": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "off",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow-restricted-names": "error",
		"no-shadow": "error",
		"no-spaced-func": "error",
		"no-sparse-arrays": "error",
		"no-sync": "off",
		"no-tabs": "off",
		"no-template-curly-in-string": "off",
		"no-ternary": "off",
		"no-this-before-super": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-undef": "error",
		"no-undefined": "error",
		"no-underscore-dangle": "off",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "off",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-unused-vars": "warn",
		"no-use-before-define": "off",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "off",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "off",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"nonblock-statement-body-position": "error",
		"object-curly-newline": "off",
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
		"object-shorthand": "off",
		"one-var-declaration-per-line": "error",
		"one-var": "off",
		"operator-assignment": "error",
		"operator-linebreak": "error",
		"padded-blocks": "off",
		"padding-line-between-statements": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-numeric-literals": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-reflect": "off",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"quote-props": "off",
		"quotes": "off",
		"radix": "error",
		"require-await": "off",
		"require-jsdoc": "off",
		"require-yield": "error",
		"rest-spread-spacing": "error",
		"semi-spacing": "error",
		"semi-style": "error",
		"semi": "error",
		"sort-imports": "off",
		"sort-keys": "off",
		"sort-vars": "off",
		"space-before-blocks": "error",
		"space-before-function-paren": "off",
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "off",
		"strict": "off",
		"switch-colon-spacing": "error",
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"unicode-bom": "error",
		"use-isnan": "error",
		"valid-jsdoc": "error",
		"valid-typeof": "error",
		"vars-on-top": "error",
		"wrap-iife": "error",
		"wrap-regex": "error",
		"yield-star-spacing": "error",
		"yoda": "error",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		'@typescript-eslint/no-use-before-define': ['error']
	},
	"overrides": [
		{
			"files": ["*.spec.tsx", "*.spec.ts"],
			"rules": {
				"no-use-before-define": "off",
				"@typescript-eslint/no-non-null-assertion": "off",
				"sonarjs/no-duplicate-string": "off"
			}
		}
	]
};
