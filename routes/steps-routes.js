const express = require('express')
const db = require('./models/steps-model')

const router = express.Router()

router.get('/:id', (req, res) => {
    const { id } = req.params
    db.findById(id)
        .then( steps => {
            if(steps){
                res.status(200).json(steps)
            }else{
                res.status(404).json({message: 'We couldnt find what your looking for.'})
            }
        })
        .catch( err => res.status(500).json(err))
})

module.exports = router