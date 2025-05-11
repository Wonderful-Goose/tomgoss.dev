module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    'prettier/prettier': 'error'
  },
} 