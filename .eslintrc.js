module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0, { forbid: ['any'] }],
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 'off',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
};