// const source = new window.EventSource('/__webpack_hmr')
// source.onopen
let wereOffline = false
let timer
let source
function init () {
  source = new window.EventSource('/__webpack_hmr')
  source.onopen = () => {
    if (wereOffline) {
      window.location.reload()
    }
  }

  source.onerror = handleDisconnect
}

function handleDisconnect () {
  clearInterval(timer)
  source.close()
  wereOffline = true
  setTimeout(init, 1000)
}

module.exports = () => {
  init()
}
