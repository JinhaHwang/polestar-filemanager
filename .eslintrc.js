const path = require('path')

module.exports = {
    extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
    plugins: [
        // ...
        'prettier',
        'react-hooks',
        'jest',
    ],
    parser: 'babel-eslint',
    rules: {
        semi: ['error', 'never'],
        'import/no-cycle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        // 'prefer-destructuring': 'off',
        'no-console': 'off',
        // 'no-undef': 'off',
        'no-unused-vars': 'warn',
        // 'react/prop-types': 'off',
        'react/forbid-prop-types': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/static-property-placement': 'off',
        'react/sort-comp': 'off',

        'react/prefer-stateless-function': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-curly-brace-presence': 'off',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        'jest/globals': true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: [path.resolve('./src')],
            },
        },
    },
}
