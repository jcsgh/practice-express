const express = require('express')
const data = require('../data/cardData')
const cardRouter = express.Router()

cardRouter.get('/', (req, res)=>{
    res.status(200).json({cards: data})
})

cardRouter.get('/getvalue/:value', (req,res)=>{
    let value = req.params.value
    let arr = []
    for(let i = 0; i < data.length; i++) {
        if(data[i].value === value) {
            arr.push(data[i])
        }
    }
    res.status(200).json({cards: arr})
})

cardRouter.get('/getcode/:code', (req,res)=>{
    let code = req.params.code
    let arr = []
    for(let i = 0; i < data.length; i++) {
        if(data[i].code === code) {
            arr.push(data[i])
        }
    }
    res.status(200).json({cards: arr})
})
cardRouter.get('/getsuit/:suit', (req,res)=>{
    let suit = req.params.suit
    let arr = []
    for(let i = 0; i < data.length; i++) {
        if(data[i].suit === suit.toUpperCase()) {
            arr.push(data[i])
        }
    }
    res.status(200).json({cards: arr})
})
cardRouter.get('/getrandomcard', (req, res)=>{
    let randIdx = Math.floor(Math.random() * data.length)
    res.status(200).json({randomcard: data[randIdx]})
})

module.exports = cardRouter