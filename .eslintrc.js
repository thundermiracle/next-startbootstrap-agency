module.exports = {
  extends: [
    'plugin:@web-configs/react',
    'plugin:@web-configs/typescript',
    'plugin:@web-configs/prettier',
    'next/core-web-vitals',
  ],
  env: {
    browser: true,
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',
  },
};
