const Sequlize = require('sequelize')
const pg = require('pg')


const sequelize = new Sequlize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialectModule: pg,
        dialect: 'postgres',
    }
)

module.exports = sequelize