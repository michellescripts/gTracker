
exports.up = function (knex, Promise) {
  return knex.schema.createTable('cohort_instructor', function (table) {
    table.increments(),
    table.integer('cohort_id').references('cohort.id').onDelete('CASCADE'),
  table.integer('instructor_id').references('instructor.id').onDelete('CASCADE')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cohort_instructor')
}
