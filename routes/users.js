// define modular route for users

var express = require('express')
var router = express.Router()

// define GET route that returns a list of users
router.get('/get-users', (request, response) => {
  response.send('list of users')
})

// define POST route that creates a user
router.post('/create-user', (request, response) => {
  response.send('successfully created a user')
})

// export routes
module.exports = router
