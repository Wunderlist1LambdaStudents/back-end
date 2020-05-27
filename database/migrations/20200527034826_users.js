exports.up = function (knex) {
  return knex.schema
    .createTable('users', (users) => {
      users.increments()

      users.varchar('username', 255).notNullable().unique()
      users.varchar('password', 255).notNullable()
    })
    .createTable('todos', (todos) => {
      todos.increments()

      todos.varchar('title', 255).notNullable()
      todos.varchar('description', 255)
      todos.boolean('important').defaultTo(false)
      todos.boolean('completed').defaultTo(false)
      todos.datetime('date and time').notNullable()

      todos
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('todos').dropTableIfExists('users')
}
