const express = require('express')

const learnerRouter = express.Router()

learnerRouter.get('/', (req, res)=>{
    res.status(200).json({message: "Connected"})
})

module.exports = learnerRouter