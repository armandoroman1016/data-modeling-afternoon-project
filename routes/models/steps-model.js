const db = require('../../data/db-config')

module.exports ={
    findById
}

function findById(id){
    return db('recipe_step')
    .where({recipe_id: id})
    .orderBy('step_number')
    .then( recipes => recipes)
}