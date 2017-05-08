
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohort_instructor').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohort_instructor').insert([
        {
          cohort_id: 1,
          instructor_id: 1
        },
        {
          cohort_id: 1,
          instructor_id: 2
        }
      ]);
    });
};
