module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
    'plugin:cypress/recommended'
  ],
  plugins: ['prettier', 'vuetify', 'cypress'],
  // add your custom rules here
  rules: {
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error'
  }
}
