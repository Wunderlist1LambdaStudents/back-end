const router = require('express').Router()

const Todos = require('./todos-model.js')
const Users = require('../users/users-model')
const authenticate = require('../auth/authenticate-middleware.js')

router.get('/todos', authenticate, (req, res) => {
  Todos.findTodos()
    .then((todos) => {
      res.status(200).json({ todos })
    })
    .catch((err) => res.send(err))
})

router.post('/users/:id/todos', (req, res) => {
  const todoData = req.body
  const { id } = req.params

  Users.findById(id)
    .then((user) => {
      if (user) {
        Todos.addTodo(todoData, id).then((todo) => {
          res.status(201).json({ todo })
        })
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new todo' })
    })
})

router.put('/todos/:id', (req, res) => {
  const { id } = req.params
  const toUpdate = req.body

  Todos.update(toUpdate, { id })
    .then((updated) => {
      res.status(200).json({ updated, toUpdate })
    })
    .catch((err) => {
      console.log('edit todo error', err)
      res
        .status(500)
        .json({ errorMessage: `cannot edit todo by id at this time` })
    })
})

router.delete('/todos/:id', (req, res) => {
  const { id } = req.params

  Todos.remove({ id })
    .then((deleted) => {
      res.status(200).json({ deleted, message: 'todo removed' })
    })
    .catch((err) => {
      console.log('remove todo error', err)
      res
        .status(500)
        .json({ errorMessage: `cannot remove todo by id at this time` })
    })
})

module.exports = router
