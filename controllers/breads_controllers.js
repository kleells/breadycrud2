const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX (grabs models/bread.js array to be used by server.js)
breads.get('/', (req, res) => {
    res.render('Index', 
        // update res.render() to pass data: 1st arg is file inside of views folder (Index)
        // 2nd is optional and an object. Here it is breads: Bread
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
    //res.send(Bread)
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// SHOW (displays individual breads based on array index in models/breads.js)
breads.get('/:arrayIndex', (req, res) => {
    // 404 (if user trys to search for a bread in
    // array that does not exist ex localhost:3003/breads/43)
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
        bread:Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
        })
    } else {
        res.render('404')
    }
    })

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
    })

// DELETE
breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
    })

module.exports = breads
