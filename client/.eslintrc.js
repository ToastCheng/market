module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'warn',
    'import/prefer-default-export': 'warn',
    'no-unused-vars': 'warn',
    'default-param-last': 'warn',
    'max-len': 'warn',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'warn',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',
    'no-use-before-define': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'import/no-cycle': 'warn',
    'import/named': 'warn',
    'array-callback-return': 'warn',
    'no-underscore-dangle': 'warn',
    'import/no-unresolved': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'no-shadow': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'react-hooks/exhaustive-deps': 'off',
  },
};
