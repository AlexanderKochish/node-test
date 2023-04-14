const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Device = sequelize.define('devices',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING, unique:true},
    phone:{type:DataTypes.STRING}
})

module.exports = {
    Device
}