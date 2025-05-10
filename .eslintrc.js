module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
  },
} 