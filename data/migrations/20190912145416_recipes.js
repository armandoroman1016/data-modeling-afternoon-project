exports.up = function(knex) {
  return knex.schema
    .createTable('ingredient', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
    })
    .createTable('recipe' , tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable()
        tbl.string('cook_time',256).notNullable();
        tbl.string('prep_time', 256).notNullable();
    })
    .createTable('recipe_ingredient', tbl => {
        tbl.increments();

        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredient')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        
        tbl.float('amount', 128).notNullable();
    })
    .createTable('recipe_step', tbl => {
        tbl.increments();

        tbl.text('description').notNullable()

        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredient')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.integer('step_number').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_step')
    .dropTableIfExists('recipe')
    .dropTableIfExists('recipe_ingredient')
    .dropTableIfExists('ingredient')
};
