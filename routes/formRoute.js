const express = require('express')
const data = require('../data/formData')
const formCheck = require('../middlewares/formChecker')
const formRouter = express.Router()

formRouter.get('/', (req, res)=>{
    res.status(200).json({form: data})
})

formRouter.put('/:firstname/:lastname/:password/:iscool/:age', formCheck, (req, res)=>{
    let firstname = req.params.firstname
    let lastname = req.params.lastname
    let password = req.params.password
    let iscool = Boolean(req.params.iscool)
    let age = Number(req.params.age)
    
    res.status(202).json(data.push({firstname: firstname, lastname: lastname, password: password, iscool: iscool, age: age}))
})

module.exports = formRouter