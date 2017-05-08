const pg = require('./knex')

function getData () {
  return pg('cohort').select()
}

function getInst () {
  return pg('instructor').select()
}

module.exports = {
  getData,
  getInst
}
