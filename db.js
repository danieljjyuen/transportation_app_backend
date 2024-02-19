const mongoose = require('mongoose')
const config = require('./utils/config')

//connect to mongodb
const connect = async () => {
    try{
        await mongoose.connect(config.MONGODB_URI)
        console.log(`connecting to ${config.MONGODB_URI}`)
    } catch (error) {
        console.error(`couldn't connect to ${config.MONGODB_URI}`, error.message)
        process.exit(1)
    }
}

module.exports = { connect }