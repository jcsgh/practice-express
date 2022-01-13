const express = require('express')
const data = require('../data/learnerData')
const learnerRouter = express.Router()

learnerRouter.get('/', (req, res)=>{
    res.status(200).json({learners: data})
})

module.exports = learnerRouter