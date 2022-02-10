//imports
const express = require('express')
const res = require('express/lib/response')
const app = express()
require('./db')
const adventuresController = require('./controllers/adventures')

//CONFIG
const PORT = 8000


//MIDDLEWARE
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