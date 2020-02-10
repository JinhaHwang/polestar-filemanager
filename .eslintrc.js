module.exports = {
    extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
    plugins: [
        // ...
        'prettier',
        'react-hooks',
    ],
    parser: 'babel-eslint',
    rules: {
        semi: ['error', 'never'],
        'import/no-cycle': 'off',
        // 'prefer-destructuring': 'off',
        'no-console': 'off',
        // 'no-undef': 'off',
        // 'no-unused-vars': 'off',
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

        'react-hooks/rules-of-hooks': 'off',
        'react-hooks/exhaustive-deps': 'off',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
}
