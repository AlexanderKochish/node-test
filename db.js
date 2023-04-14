const Sequlize = require('sequelize')


const sequelize = new Sequlize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,{
        dialect: 'postgres',
        host: process.env.DB_HOST,
    }
)

module.exports = sequelize