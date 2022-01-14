const express = require('express')
const cardRouter = express.Router()
const data = require('../data/cardData')

cardRouter.get('/', (req, res)=>{
    res.status(200).json({message: "API UP"})
})

module.exports = cardRouter