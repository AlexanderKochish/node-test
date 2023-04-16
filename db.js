const Sequlize = require('sequelize')
const pg = require('pg')


const sequelize = new Sequlize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,{
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        dialectModule: pg,
        dialect: 'postgres',
        logging: false
    }
)

module.exports = sequelize