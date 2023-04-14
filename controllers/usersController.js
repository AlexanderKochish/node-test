const { Device } = require('../models/models')

const getAllUsers = async(req,res) => {
    const users = await Device.findAll()
    return res.json(users)
}

const createDevice = async(req,res) => {
    const { name, email, phone } = req.body
    const newDev = await Device.create({
        name,
        email,
        phone
    })
    return res.json(newDev)
}

module.exports = {
    getAllUsers,
    createDevice
}