const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4000

const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

const file  = fs.readFileSync('./swagger.yaml', 'utf8')

const swaggerDocument = YAML.parse(file)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors())
app.use(express.json())

app.get('/users',(req,res) => {
    return res.json({message: 'Get all Users'})  
})





app.listen(PORT)
