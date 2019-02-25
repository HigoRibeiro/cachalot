const path = require('path')
const chokidar = require('chokidar')

const sass = require('./sass')
const reload = require('./reloader')

module.exports = (server) => {
  if (!server.isDev) return
  const scss = path.resolve(__dirname, '..', 'client', 'scss')
  const views = path.resolve(__dirname, '..', 'app', 'views')

  const watcher = chokidar.watch([
    views,
    scss
  ])

  const dispatchReload = async function (p) {
    const { dir } = path.parse(p)
    if (dir === scss) {
      await sass()
    }

    reload(server)
  }

  watcher.on('add', dispatchReload)

  watcher.on('change', dispatchReload)
}
