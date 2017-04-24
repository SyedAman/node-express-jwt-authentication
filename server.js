// import modules
var express = require('express')
var http = require('http')

// use express
var app = express()

// import routes
var getUsersRoute = require('./routes/users')

// define port
var port = process.env.PORT || 8080

// create server
http.createServer(app).listen(port, (event) => {
  console.log('listening on http://localhost:' + port)
})

// use modular routes
app.use('/users', getUsersRoute)
