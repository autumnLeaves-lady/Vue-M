module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len' : ["error", {code : 300}],
    'linebreak-style': ['off', 'windows'],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "camelcase": ["error", {"allow": ["aa_bb"]}],
    "no-underscore-dangle": 'off', // 关闭禁止下划线的规则 
    "no-param-reassign": 'off' // 关闭禁止给参数赋值的规则
  }
}
