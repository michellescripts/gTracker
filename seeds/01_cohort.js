
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohort').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohort').insert([
        {
          cohortNumber: 46,
          cohortCampus: 'Platte',
          cohortStart: 'Feb 13',
          cohortEnd: 'Jul 28',
          cohortSize: 24
        },
        {
          cohortNumber: 51,
          cohortCampus: 'Platte',
          cohortStart: 'May 1',
          cohortEnd: 'November 1',
          cohortSize: 18
        }
      ]);
    });
};
