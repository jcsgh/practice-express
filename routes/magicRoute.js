const express = require("express");
const answers = require("../data/magicData")
const magicRouter = express.Router()

magicRouter.get('/', (req, res)=>{
    res.status(200).json({default: "UP!"})
})

magicRouter.get('/:question', (req, res)=>{
    let question = req.params.question
    let idx = Math.floor(Math.random() * answers.length)
    res.status(200).json({Response: `${question}(?) The Magic 8 ball says ${answers[idx]}.`})
})

module.exports = magicRouter;