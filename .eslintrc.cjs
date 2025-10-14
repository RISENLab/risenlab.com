module.exports = {
    env: {
        node: true,
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {

            },
        },
    ],
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:astro/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:mdx/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: [
        'import',
        '@typescript-eslint',
        'modules-newlines',
        'jsx-a11y',
    ],
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.eslint.json',
            },
        },
    },
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
        }],
        'import/no-unresolved': 'error',
        'import/prefer-default-export': 'off',
        'modules-newlines/import-declaration-newline': 'error',
        'modules-newlines/export-declaration-newline': 'error',
    },
};
