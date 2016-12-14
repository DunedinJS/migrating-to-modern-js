// ESLint config for Node.js executed code

module.exports = {
  extends: 'airbnb',
  env: {
    browser: false,
    node: true,
  },
  ecmaVersion: 6,
  sourceType: 'module',
  rules: {
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
  },
};
