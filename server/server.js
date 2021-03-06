const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const favicon = require('serve-favicon')


const isDev = process.env.NODE_ENV === 'development'

const app = express()

app.use(favicon(path.join(__dirname, '../favicon.ico')))

if (!isDev) {
  const serverEntry = require('../dist/server-entry.js').default
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

  app.use('/public', express.static(path.join(__dirname, '../dist')))

  app.get('*', (req, res) => {
    var content = ReactSSR.renderToString(serverEntry)
    var html = template.replace('<!-- app -->', content)
    res.send(html)
  })
} else {
  const devStatic = require('./util/dev-static')

  devStatic(app)
}

app.listen(3333, () => {
  console.log('server is listening on 3333')
})
