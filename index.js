const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000
const sequelize = require('./db')
const fs = require("fs")
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml')

app.use(cors())
app.use(express.json())
var options = {
    explorer: true
};
app.use(router)
const file  = fs.readFileSync('./swagger.yaml')
const swaggerDocument = YAML.parse(file)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT)
    } catch (error) {
        console.log(error.message)
    }  
}
start()
