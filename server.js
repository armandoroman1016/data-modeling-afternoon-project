const express = require('express')
const ingredientsRouter = require('./routes/ingredients-routes')
const recipesRouter = require('./routes/recipes-routes')

const server = express()

server.use(express.json())
server.use('/api/ingredients', ingredientsRouter)
server.use('/api/recipes', recipesRouter)


module.exports = server

