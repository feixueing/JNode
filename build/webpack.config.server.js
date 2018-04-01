const path = require('path')
const webpckMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = webpckMerge(baseConfig, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
})
