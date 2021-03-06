const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authRouter = require('../auth/auth-router.js')
const usersRouter = require('../users/users-router.js')
const todosRouter = require('../todos/todos-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api', todosRouter)

server.get('/', (req, res) => {
  res.json({ api: 'up' })
})

module.exports = server
