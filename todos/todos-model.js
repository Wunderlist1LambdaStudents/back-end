const db = require('../database/dbConfig.js')

module.exports = {
  findTodos,
  findByTodo,
  addTodo,
  update,
  remove,
}

function findTodos() {
  return db('todos')
    .select('id', 'title', 'description', 'user_id', 'date_time')
    .orderBy('id')
}

function findByTodo(id) {
  return db('todos')
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
      return findByTodo(anotherTodo.user_id)
    })
}

function update(changes, id) {
  return db('todos').update(changes).where(id)
}

function remove(id) {
  return db('todos').where(id).del()
}
