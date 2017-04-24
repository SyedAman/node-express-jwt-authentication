// import modules
var express = require('express')
var http = require('http')

// use express
var app = express()

// define port
var port = process.env.PORT || 8080

// create server
http.createServer(app).listen(port, () => {
  console.log('listening on http://localhost:' + port)
})
