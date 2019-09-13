const express = require('express')
const ingredientsRoute = require('./routes/ingredients-routes')

const server = express()

server.use(express.json())
server.use('/api/ingredients', ingredientsRoute)

module.exports = server

