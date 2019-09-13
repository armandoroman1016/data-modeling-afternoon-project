
exports.seed = function(knex) {
      return knex('recipe_ingredient').insert([
        {ingredient_id: 1, amount: 13},
        {ingredient_id: 2, amount: 14},
        {ingredient_id: 3, amount: 15},
        {ingredient_id: 4, amount: 16},
        {ingredient_id: 5, amount: 17},
        {ingredient_id: 6, amount: 18},
        {ingredient_id: 7, amount: 19},
        {ingredient_id: 8, amount: 20},
        {ingredient_id: 9, amount: 21},
      ]);
};
