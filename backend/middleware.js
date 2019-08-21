
const jwt = require('express-jwt')

//Dummy authenticated middleware
exports.authenticated = jwt({secret: 'key-anakost'})