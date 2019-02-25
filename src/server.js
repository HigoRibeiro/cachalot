const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./app/config/webpack.dev.config')

class Server {
  constructor () {
    this.express = express()

    this.express.use(express.json())

    this.isDev = process.env.NODE_ENV !== 'production'

    this.isDev && this.webpack()
    this.views()
    this.routes()
  }

  webpack () {
    this._webpack = webpack(webpackConfig)

    this.webpackDev = webpackDevMiddleware(this._webpack, {
      noInfo: true,
      publicPath: webpackConfig.publicPath
    })
    this.webpackHot = webpackHotMiddleware(this._webpack)

    this.express.use(this.webpackDev)
    this.express.use(this.webpackHot)
  }

  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    this.express.set('view engine', 'njk')

    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.use('/dist', express.static(path.resolve(__dirname, 'app', 'dist')))
  }

  routes () {
    this.express.use(require('./routes'))
  }

  reloadClient (payload = {}) {
    this.webpackHot.publish({ action: 'reload', payload })
  }
}

module.exports = new Server()
