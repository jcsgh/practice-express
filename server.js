const express = require('express')
const bodyParser = require('body-parser')
const learnerRoute = require('./routes/learnerRoute')
const greetingsRoute = require('./routes/greetingsRoute')
const tipCalcRoute = require('./routes/tipCalcRoute')
const magicRoute = require('./routes/magicRoute')
const beerRoute = require('./routes/beerRoute')
const formRoute = require('./routes/formRoute')
const cardRoute = require('./routes/cardRoute')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/learners', learnerRoute)
app.use('/greetings', greetingsRoute)
app.use('/tip', tipCalcRoute)
app.use('/magic', magicRoute)
app.use('/beer', beerRoute)
app.use('/form', formRoute)
app.use('/cards', cardRoute)

app.get('/', (req, res)=>{
    res.status(200).json({message: "Api UP!"})
})

app.listen(port, ()=>{
    console.log("ONLINE")
})