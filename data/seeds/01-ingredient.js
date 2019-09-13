
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('ingredient').insert([
        {name: 'pasta'},
        {name: 'rice'},
        {name: 'bread'},
        {name: 'chicken'},
        {name: 'beef'},
        {name: 'pork'},
        {name: 'broccoli'},
        {name: 'bell peppers'},
        {name: 'mushrooms'},
        {name: 'potatoes'},
        {name: 'onions'},
        {name: 'garlic'},
      ]);
};
