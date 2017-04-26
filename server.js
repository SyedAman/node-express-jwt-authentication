// import modules
const express = require('express')
const http = require('http')

// use express
const app = express()

// define port
const port = process.env.PORT || 8080

// create server
http.createServer(app).listen(port, (event) => {
  console.log('listening on http://localhost:' + port)
})

// use modular routes
app.use(require('./routes/users'))
