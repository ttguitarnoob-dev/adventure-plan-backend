const express = require('express')
const { update } = require('../models/adventure')
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
        res.json('show route errrerrr', err.message)
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
        res.json('create route errr', err.message)
    }
})


//delete
router.delete('/:id', async (req, res) => {
    try{
        const oneAdventure = await Adventure.findByIdAndDelete(req.params.id)
        console.log("I don't need you, adventure", oneAdventure)
        res.json(oneAdventure)
    } catch(err) {
        res.json('delete route errrrrr', err.message)
    }

})


//update
router.put('/:id', async (req, res) => {
    try{
        const updateAdventure = await Adventure.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log('you need to change, adventure', updateAdventure)
        res.json(updateAdventure)
    } catch(err) {
        res.json('update route erererror', err.message)
    }
})

module.exports = router