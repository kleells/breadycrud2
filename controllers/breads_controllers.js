const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX (grabs models/bread.js array to be used by server.js)
breads.get('/', (req, res) => {
    res.render('Index', 
        // update res.render() to pass data: 1st arg is file inside of views folder (Index)
        // 2nd is optional and an object. Here is to breads: Bread
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
    //res.send(Bread)
})

// SHOW (displays individual breads based on array index in models/breads.js)
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads
