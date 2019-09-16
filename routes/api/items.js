const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../modules/Item')

// @route GET api/items
// @desc  Get All Items
// @access Public 

router.get('/', (req, res) => {
    console.log('Get Post is working')
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))

})

// @route POST api/items
// @desc  Create A post 
// @access Public 

router.post('/', (req, res) => {
    console.log('Posting Test')

    const newItem = new Item({
        name: req.body.name
    })

    newItem.save()
        .then(item => res, json(item))
        .catch(err => console.log(err))
})


module.exports = router