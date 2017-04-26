// define modular route for users

// import libraries
const express = require('express')
const router = express.Router()
const jwt = require('express-jwt')
const config = require('../database/config.json')

// store user database
const users = require('../database/users.json')

const jwtTest = jwt({
  secret: config.secret
})

// use route middleware
router.use((request, response, next) => {
  // log requests
  console.log(request.method, request.url)

  // continue HTTP request
  next()
})

// define GET route that returns a list of users
router.get('/get-users', jwtTest, (request, response) => {
  response.status(200).send(users.users)
})

// define POST route that creates a user
router.post('/create-user', (request, response) => {
  response.status(200).send('successfully created a user')
})

// export routes
module.exports = router
