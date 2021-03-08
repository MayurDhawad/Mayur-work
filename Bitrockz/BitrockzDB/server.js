const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const api = require('./routes/api')

const PORT = 4100

const app = express()
app.use(express.static(path.join(__dirname,'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/api', api)

app.use('/', (req,res) =>{
    res.send("Hello from Server")
})

app.listen(PORT, (req,res) =>{
    console.log("Server listining on Port: " +PORT)
})