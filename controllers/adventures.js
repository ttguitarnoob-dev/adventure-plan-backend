const express = require('express')
const Adventure = require('../models/adventure')
const router = express.Router()

//ROUTES

//show
router.get('/:id', async (req, res) => {
    try{
        const oneAdventure = await Adventure.findById(req.params.id)
        console.log('one adventures', oneAdventure)
        res.json(oneAdventure)
        // res.send('show route')
    } catch(err){
        console.log('show route errrerrr', err)
    }
})


//index
router.get('/', async (req, res) => {
    try{
        const allAdventures = await Adventure.find()
        console.log('all adventures', allAdventures)
        res.json(allAdventures)
        // res.send('index route')
    } catch(err) {
        console.log(err)
        res.json('indexx errrr', err.message)
    }
})


//create
router.post('/', async (req, res) => {
    try{
        console.log('new adventure', req.body)
        const newAdventure = await Adventure.create(req.body)
        res.json(newAdventure)
    } catch(err){
        console.log('create route errr', err)
    }
})


//delete



//update

module.exports = router