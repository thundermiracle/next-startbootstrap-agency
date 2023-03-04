// @ts-check
/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
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
  overrides: [
    {
      files: ['playwright.config.ts'],
      rules: {
        'no-process-env': 'off',
      },
    },
  ],
};
