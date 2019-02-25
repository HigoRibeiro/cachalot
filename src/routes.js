const Routes = require('express').Router()

const IndexController = require('./app/controllers/IndexController')
const UserController = require('./app/controllers/UserController')

Routes.get('/', IndexController.index)
Routes.get('/signup', UserController.create)

Routes.post('/test', IndexController.store)

module.exports = Routes
