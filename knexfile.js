require('dotenv').config()

const pgConnection =
  process.env.DATABASE_URL || 'postgresql://postgres@localhost/auth'
// {
// database: 'nodelogin', //postgres by default
// user: 'postgres', //postgres by default
// password: 'hinata5185', //blank by default
// }

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/users.db3',
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
}
