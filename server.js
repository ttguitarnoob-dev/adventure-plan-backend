//imports
const express = require('express')
const res = require('express/lib/response')
const app = express()
require('./db')
const cors = require('cors')

//CONTROLLERS
const adventuresController = require('./controllers/adventures')

//CONFIG
const PORT = 8000
const acceptList = ["http://localhost:3000"]
const options = {
    origin: function(origin, callback){
        console.log('origin', origin)
        if (acceptList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback( new Error ("Not allowed by Cors, bro"))
        }
    }
}

//MIDDLEWARE
app.use(cors(options))
app.use(express.json())
app.use('/adventures', adventuresController)


//ROUTING

//home
app.get('/', (req, res) => {
    res.json({
        status: 200,
        body: 'wow this is working'
    })
})


//SERVERSTART

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}!!!!!!`)
})