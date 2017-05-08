const pg = require('./knex')

function getData () {
  return pg('cohort').select()
}

function getInst () {
  return pg('instructor').select()
}

function getCohortInst (obj) {
  return pg.from('cohort_instructor')
  .innerJoin('instructor', 'instructor.id', 'cohort_instructor.instructor_id').innerJoin('cohort', 'cohort.id', 'cohort_instructor.cohort_id').select().where('instructor.id', obj)
}

function getCohort (obj) {
  return pg.from('cohort_instructor')
  .innerJoin('instructor', 'instructor.id', 'cohort_instructor.instructor_id').innerJoin('cohort', 'cohort.id', 'cohort_instructor.cohort_id').select().where('cohort_instructor.cohort_id', obj)
}

module.exports = {
  getData,
  getInst,
  getCohortInst,
  getCohort
}
