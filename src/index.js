const Server = require('./server')
const HotReloader = require('./reloader')

HotReloader(Server)

Server.express.listen(4444)
