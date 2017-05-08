
exports.up = function (knex, Promise) {
  return knex.schema.createTable('cohort', function (table) {
    table.increments()
    table.integer('cohortNumber').notNull
    table.text('cohortCampus').notNull
    table.text('cohortStart').notNull
    table.text('cohortEnd').notNull
    table.integer('cohortSize')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cohort')
}
