// define modular route for users

// import libraries
const express = require('express')
const router = express.Router()
const jwt = require('express-jwt')
const config = require('../database/config.json')

// store user database
const users = require('../database/users.json')

// create JWT to match user JWTs
const jwtTest = jwt({
  secret: config.secret
})

// inject middleware
router.use((request, response, next) => {
  // log requests
  console.log(request.method, request.url)

  next()
})

// define protected GET route that returns a list of users
router.get('/get-users', jwtTest, (request, response) => {
  response.status(200).send(users.users)
})

// define unprotected POST route that creates a user
router.post('/create-user', (request, response) => {
  response.status(200).send('successfully created a user')
})

// inject error handling middleware
router.use((error, request, response, next) => {
  if (error.name === 'UnauthorizedError') {
    response.status(401).send('invalid token')
  }

  next(error)
})

// export routes
module.exports = router
