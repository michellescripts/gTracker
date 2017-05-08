
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructor').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructor').insert([
        {
          instFirstName: 'Brooks',
          instLastName: 'Patton',
          instPosition: 'lead',
          instStartDate: 'May 2007'
        },
        {
          instFirstName: 'Peter',
          instLastName: 'Ostiguy',
          instPosition: 'FSR',
          instStartDate: 'Jan 2017' 
        }
      ]);
    });
};
