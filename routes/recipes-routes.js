const express = require('express')
const db = require('./models/recipe-model')

const router = express.Router()

router.get('/', (req, res) => {
    db.find()
    .then( recipes => res.status(200).json(recipes))
    .catch( err => res.status(500).json(err))
})

module.exports = router