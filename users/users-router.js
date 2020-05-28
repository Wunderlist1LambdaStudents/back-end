const router = require('express').Router()

const Users = require('./users-model.js')
const authenticate = require('../auth/authenticate-middleware.js')
const { isValid } = require('./users-service.js')

router.get('/', authenticate, (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json({ users })
    })
    .catch((err) => res.send(err))
})

router.get('/:id', authenticate, (req, res) => {
  const id = req.params.id

  Users.findById(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get user' })
    })
})

router.get('/:id/todos', authenticate, (req, res) => {
  const { id } = req.params

  Users.getListOfTodos(id)
    .then((listOfTodos) => {
      if (listOfTodos) {
        res.json(listOfTodos)
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get your todos' })
    })
})

router.post('/', authenticate, (req, res) => {
  const user = req.body

  if (isValid(user)) {
    Users.add(user)
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

router.put('/:id', authenticate, (req, res) => {
  const { id } = req.params
  const changes = req.body

  Users.findById(id)
    .then((user) => {
      if (user) {
        Users.update(changes, id).then((updatedUser) => {
          res.status(200).json(updatedUser)
        })
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error updating user' })
    })
})

router.delete('/:id', authenticate, (req, res) => {
  const { id } = req.params

  Users.remove(id)
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'User Removed' })
      } else {
        res.status(404).json({ message: 'Could not find specified user' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error deleting User' })
    })
})

module.exports = router
