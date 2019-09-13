
exports.seed = function(knex) {
      return knex('recipe_step').insert([
        {recipe_id: 1, ingredient_id: 1, description: 'Lorem Ipsom', step_number: 1},
        {recipe_id: 1, ingredient_id: 2, description: 'Lorem', step_number: 2 },
        {recipe_id: 1, ingredient_id: 3, description: 'Ipsum', step_number: 3 },
        {recipe_id: 2, ingredient_id: 4, description: 'Lorem Ipsom', step_number: 1},
        {recipe_id: 2, ingredient_id: 5, description: 'Lorem', step_number: 2 },
        {recipe_id: 2, ingredient_id: 6, description: 'Ipsum', step_number: 3 },
        {recipe_id: 3, ingredient_id: 7, description: 'Lorem Ipsom', step_number: 1},
        {recipe_id: 3, ingredient_id: 8, description: 'Lorem', step_number: 2 },
        {recipe_id: 3, ingredient_id: 9, description: 'Ipsum', step_number: 3 }
      ]);
};
