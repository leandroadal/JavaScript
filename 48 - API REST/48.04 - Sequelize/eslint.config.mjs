import js from '@eslint/js';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.node,
      },
    },

    rules: {
      eqeqeq: 'error',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'no-unreachable': 'warn',
    },
  },

  eslintPluginPrettierRecommended,
];
