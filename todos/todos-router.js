const router = require('express').Router()

const Todos = require('./todos-model.js')
const authenticate = require('../auth/authenticate-middleware.js')
const { isValid } = require('../users/users-service')

router.get('/', authenticate, (req, res) => {
  Todos.find()
    .then((todos) => {
      res.status(200).json({ todos })
    })
    .catch((err) => res.send(err))
})

router.post('/', authenticate, (req, res) => {
  const todo = req.body

  if (isValid(todo)) {
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
