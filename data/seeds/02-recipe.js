
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('recipe').insert([
        {prep_time:'10M', cook_time: '10M', name: 'Awesome Sammy'},
        {prep_time:'10M', cook_time: '20M', name: 'Ribeye Steak'},
        {prep_time:'10M', cook_time: '1H30M', name: 'Fettuccine Alfredo'},
        {prep_time:'10M', cook_time: '2H', name: 'Ramen'},
      ]);
};
