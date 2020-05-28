exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('users').insert([
    { username: 'Johnny', password: 'test' },
    { username: 'Moe', password: 'fun' },
    { username: 'Google', password: 'angular' },
    { username: 'Jest', password: 'joke' },
    { username: 'Holly', password: 'molly' },
    { username: 'Geo', password: 'hero' },
  ])
}
