/**
 * use the commands below when ESLint v9.+ will be released and it will support ESModules!
 *
 * @example
 *  import path from 'path';
 *  const __dirname = import.meta.dirname;
 *
 *  project: path.resolve(__dirname, 'configs/ts/tsconfig.json'),
 */

const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    es2024: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.js'],
      extends: ['airbnb-base', 'prettier'],
    },
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: path.resolve(__dirname, '../ts/tsconfig.json'),
        ecmaVersion: 'latest',
      },
    },
    {
      files: ['*.tsx, *.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
      ],
      plugins: ['@typescript-eslint', 'react', 'react-hooks'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: path.resolve(__dirname, '../ts/tsconfig.json'),
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.ts, .tsx'] }],
        'react/react-in-jsx-scope': 'off', // For React 17+, you do not need to import React into JSX files
        // '@typescript-eslint/explicit-function-return-type': 'off' /*If you prefer not to specify the type of the return value of the functions  */,
      },
    },
    {
      env: {
        mocha: true,
        jest: true,
      },
      files: ['**/*.test.js'],
      extends: ['airbnb-base', 'prettier'],
    },
    {
      env: {
        mocha: true,
        jest: true,
      },
      files: ['**/*.test.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: path.resolve(__dirname, '../ts/tsconfig.json'),
        ecmaVersion: 'latest',
      },
    },
  ],
  rules: {},
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
};
