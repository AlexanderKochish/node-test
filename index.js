const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const sequelize = require('./db')
const router = require('./routes/router')
const PORT = process.env.PORT || 3000
// swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

app.use(cors())
app.use(express.json())
app.use("/",router)


const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        app.listen(PORT, () => console.log('Server listening on port'))
    } catch (error) {
        console.log(error.message)
    }  
}
start()

