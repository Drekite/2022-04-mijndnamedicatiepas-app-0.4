module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  ignorePatterns: [
    'babel.config.js',
    'package-lock.json',
    'package.json',
    'app.json',
    '*.md',
    '../.gitignore',
    '../.eslintrc.js',
    'src/assets/*',
    'src/tests/*',
    'src/screens/*',
    '*.yml'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-handler-names': 'off',
    'jsx-quotes': 'off',
    'jsx-handler-names': 'off'
  }
}
