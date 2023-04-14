const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000
const sequelize = require('./db')

const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

const file  = fs.readFileSync('./swagger.yaml', 'utf8')

app.use(cors())
app.use(express.json())
const swaggerDocument = YAML.parse(file)
app.use(router)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const start = async() => {
    await sequelize.authenticate();
    await sequelize.sync()
    app.listen(PORT,()=>console.log(`server run `)) 
}
start()

