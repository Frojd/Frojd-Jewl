import js from '@eslint/js';
import globals from 'globals';
import storybookPlugin from 'eslint-plugin-storybook';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  js.configs.recommended,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'storybook-static/**',
      'cli/**',
      'dist/**',
      '**/__Component__/**',
      '**/__Container__/**',
      '**/__Layout__/**',
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        process: 'readonly', // Next.js makes process.env available in browser
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      storybook: storybookPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@next/next/no-img-element': 'warn',
      'no-unused-vars': ['error', {
        varsIgnorePattern: '^React$',
        args: 'after-used',
        ignoreRestSiblings: true,
      }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
