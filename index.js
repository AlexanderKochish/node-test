const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const router = require('./routes/router')
const PORT = process.env.DB_PORT || 3000
const sequelize = require('./db')

app.use(cors())
app.use(express.json())
app.use(router)

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
