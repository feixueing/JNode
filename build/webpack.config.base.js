const path = require('path')

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: ['eslint-loader'],
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
}
