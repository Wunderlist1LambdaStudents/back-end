const db = require('../database/dbConfig.js')

module.exports = {
  findTodos,
  findByTodo,
  addTodo,
  findById,
  update,
  remove,
}

function findTodos() {
  return db('todos')
    .select('id', 'title', 'description', 'user_id', 'date_time')
    .orderBy('id')
}

function findByTodo(filter) {
  return db('todos').where(filter).orderBy('id')
}

function addTodo(todo, id) {
  const anotherTodo = {
    user_id: id,
    title: todo.title,
    description: todo.description,
    important: todo.important,
    completed: todo.completed,
    date_time: todo.date_time,
  }
  return db('todos')
    .insert(anotherTodo, id)
    .then((id) => {
      return findByTodo(anotherTodo.id)
    })
}

function findById(id) {
  return db('users').where({ id }).first()
}

function update(changes, id) {
  return db('users').update(changes).where({ id })
}

function remove(id) {
  return db('users').where({ id }).del()
}
