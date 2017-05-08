
exports.up = function (knex, Promise) {
  return knex.schema.createTable('instructor', function (table) {
    table.increments()
    table.text('instFirstName').notNull
    table.text('instLastName').notNull
    table.text('instPosition')
    table.text('instStartDate')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('instructor')
}
