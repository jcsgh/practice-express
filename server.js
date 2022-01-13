const express = require('express')
const bodyParser = require('body-parser')
const learnerRoute = require('./routes/learnerRoute')
const greetingsRoute = require('./routes/greetingsRoute')
const tipCalcRoute = require('./routes/tipCalcRoute')
const magicRoute = require('./routes/magicRoute')
const beerRoute = require('./routes/beerRoute')

const app = express()
const port = 4000

app.use(bodyParser.json())
app.use('/learners', learnerRoute)
app.use('/greetings', greetingsRoute)
app.use('/tip', tipCalcRoute)
app.use('/magic', magicRoute)
app.use('/beer', beerRoute)

app.get('/', (req, res)=>{
    res.status(200).json({message: "Api UP!"})
})

app.listen(port, ()=>{
    console.log("ONLINE")
})