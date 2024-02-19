const mongoose = require('mongoose')

const trainSchema = new mongoose.Schema({
    routeId: {
        type:String,
        required: true
    },
    southHeadSign: {
        type: String,
    },
    northHeadSign: {
        type: String,
    },
    S: {
        type: Map,
        of: [Number]
    },
    N: {
        type: Map,
        of: [Number]
    }

})

trainSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Train', trainSchema)