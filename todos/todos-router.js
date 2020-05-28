const router = require('express').Router()

const Todos = require('./todos-model.js')
const Users = require('../users/users-model')
const authenticate = require('../auth/authenticate-middleware.js')

router.get('/', authenticate, (req, res) => {
  Todos.findTodos()
    .then((todos) => {
      res.status(200).json({ todos })
    })
    .catch((err) => res.send(err))
})

router.post('/users/:id/todos', authenticate, (req, res) => {
  const todoData = req.body

  if (isValid()) {
    Todos.add(todo)
      .then((saved) => {
        res.status(201).json({ data: saved })
      })
      .catch((error) => {
        res.status(500).json({ message: error.message })
      })
  } else {
    res.status(400).json({ message: 'please provide all user information' })
  }
})

module.exports = router
