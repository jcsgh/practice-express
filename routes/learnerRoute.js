const express = require('express')
const data = require('../data/learnerData')
const learnerRouter = express.Router()
const idChecker = require('../middlewares/idChecker')

learnerRouter.get('/', (req, res)=>{
    res.status(200).json({learners: data})
})

learnerRouter.get('/:id', idChecker, (req, res)=>{
    let id = Number(req.params.id)
    res.status(200).json({learner: data[id]})
})

learnerRouter.post('/', (req, res)=>{
    let test = req.body
    data.push(test)
    res.status(201).json({learner: test})
})

learnerRouter.put('/:id/:new_learner', idChecker,(req, res)=>{
    let id = Number(req.params.id)
    let new_learner = req.params.new_learner
    data[id] = new_learner
    res.status(202).json({learner: data[id]})
})

learnerRouter.delete('/:id',  idChecker, (req, res)=>{
    let id = Number(req.params.id)
    data.splice(id, 1)
    res.status(204).json({message: "DELETED"})
})

module.exports = learnerRouter