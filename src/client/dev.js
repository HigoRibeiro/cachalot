require('./index')

if (typeof (module.hot) !== 'undefined') {
  module.hot.accept()

  const HMR = require('webpack-hot-middleware/client?reload=true')

  HMR.subscribe(function (data) {
    if (data.action === 'reload') {
      window.location.reload()
    }
  })

  require('./listen')()
}
