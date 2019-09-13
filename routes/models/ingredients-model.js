const db = require('../../data/db-config')

module.exports = {
    findById,
}

function findById(id){
    return db('recipe_ingredient')
    .where({recipe_id: id})
    .then( recipes => recipes)
}