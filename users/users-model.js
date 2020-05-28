const db = require('../database/dbConfig.js')

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
  getListOfTodos,
}

function find() {
  return db('users').select('id', 'username').orderBy('id')
}

function findBy(filter) {
  return db('users').where(filter).orderBy('id')
}

function getListOfTodos(id) {
  return db('todos').orderBy('id').where({ user_id: id })
}

async function add(user) {
  try {
    const [id] = await db('users').insert(user, 'id')

    return findById(id)
  } catch (error) {
    throw error
  }
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
