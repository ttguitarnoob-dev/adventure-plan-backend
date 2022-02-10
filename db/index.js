const mongoose = require('mongoose')
const MONGO_URI = 'mongodb://127.0.0.1:27017/adventures'

mongoose.connect(MONGO_URI, () => {
    console.log(`Mongo batadase is connnnnnn ected`)
})

mongoose.connection.on('error', err => {
    console.log(`blllleeegh how do I fix this`)
})