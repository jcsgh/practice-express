const express = require('express')
const tipRouter = express.Router()

tipRouter.get('/', (req, res)=>{
    res.status(200).json({default: "UP"})
})

tipRouter.get('/:total/:tipPercentage', (req, res)=>{
    let total = req.params.total
    let tipPercentage = req.params.tipPercentage

    res.status(200).json({Tip: total * (tipPercentage/100)})
})

module.exports = tipRouter