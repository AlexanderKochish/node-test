const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const router = require('./routes/router')
const sequelize = require('./db')
const PORT = process.env.DATABASE_URL || 3000


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
