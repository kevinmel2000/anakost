const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

const port = 8000

app.use(bodyParser.json())

// Auth Controller
const AuthController = require('./controllers/auth')

const KostController = require('./controllers/kost')
const UserController = require('./controllers/user')
// const cobaController = require('./controllers/coba')

const { authenticated } = require('./middleware')

app.group("/api/v2", (router) => {

    // router.get('/', cobaController.index)
    // router.get('/home', cobaController.home)
    // Route Auth
    router.post('/login', AuthController.login)

    // Route Kost
    router.get('/kost', KostController.index)
    router.get('/kost/:id', KostController.show)
    router.post('/kost', authenticated, KostController.store)
    router.delete('/kost/:id',authenticated, KostController.delete)

    // Route User
    router.post('/register', UserController.store)
    router.get('/users', UserController.index)
    router.get('/user/:id', UserController.show)
})

app.listen(port, () => console.log('Listening on port : ' + port))