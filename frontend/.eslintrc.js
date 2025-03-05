module.exports = {
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@next/next/no-img-element': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/no-unescaped-entities': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'react/no-children-prop': 'off',
        'react/jsx-no-undef': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'react/jsx-pascal-case': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
    },
};
