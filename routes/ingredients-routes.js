const express = require('express')
const db = require('./models/ingredients-model')

const router = express.Router()

router.get('/:id', (req, res) => {

    const id = req.params.id

    db.findById(id)
    .then( ingredients => {
        if(ingredients){
            res.status(200).json(ingredients)
        }else{
            res.status(404).json({message: 'We couldn\'t find any ingredients'})
        }
    })
    .catch( err => res.status(500).json(err))

})

module.exports = router