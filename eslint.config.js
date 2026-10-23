import js from '@eslint/js';
import globals from 'globals';
export default [
    {
        ignores: ['coverage/**', 'node_modules/**', '.yarn/**'],
    },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.mocha,
            },
        },
    },
];