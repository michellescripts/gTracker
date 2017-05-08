const pg = require('./knex')

function getData() {
  return pg('cohort').select()
}

module.exports = {
  getData
}
