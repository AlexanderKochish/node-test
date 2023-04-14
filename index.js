const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/users',(req,res) => {
    return res.json({message: 'Get all Users'})  
})


app.listen(PORT)
