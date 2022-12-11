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

// SHOW (displays individual breads based on array index in models/breads.js)
breads.get('/:arrayIndex', (req, res) => {
    // 404 (if user trys to search for a bread in
    // array that does not exist ex localhost:3003/breads/43)
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
        bread:Bread[req.params.arrayIndex]
        })
    } else {
        res.render('404')
    }
    })

// CREATE (create a new route that will take form data and add it to db)
breads.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten === 'true'
    } else {
        req.body.hasGlutten === 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
    })


module.exports = breads
