const mongoose = require('mongoose')

const adventureSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
        default: "New Adventure"
    },
    stops: [{
        name: String,
        description: String
    }]
}, {timestamps: true})

const Adventure = mongoose.model('adventure', adventureSchema)
module.exports = Adventure