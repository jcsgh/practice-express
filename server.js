const express = require('express')
const bodyParser = require('body-parser')
const app = require('express')

const app = express()
const port = 4000

app.use(bodyParser.json())

app.listen(port, ()=>{
    console.log("ONLINE")
})