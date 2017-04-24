// define modular route for users

var express = require('express')
var router = express.Router()

// store user database
var users = require('../database/users.json')

// define GET route that returns a list of users
router.get('/get-users', (request, response) => {
  response.status(200).send(users.users)
})

// define POST route that creates a user
router.post('/create-user', (request, response) => {
  response.status(200).send('successfully created a user')
})

// export routes
module.exports = router
