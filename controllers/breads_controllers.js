const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX (grabs models/bread.js array to be used by server.js)
breads.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
                // console.log(foundBreads)
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// SHOW (displays individual breads based on array index in models/breads.js)
breads.get('/:id', (req, res) => {
    // // 404 (if user trys to search for a bread in
    // // array that does not exist ex localhost:3003/breads/43)
    // if (Bread[req.params.arrayIndex]) {
    //     res.render('Show', {
    //     bread:Bread[req.params.arrayIndex],
    //     index: req.params.arrayIndex,
    //     })
    // } else {
    //     res.render('404')
    // }
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            })
        })
        .catch(err => {
            res.render('404')
        })
    })

// EDIT
breads.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id) 
        .then(foundBread => { 
            res.render('edit', {
                bread: foundBread 
            })
        })
})

// SEED route is /breads/data/seed (only vist this route if you need to seed a lot of data or it will duplicate)
breads.get('/data/seed', (req, res) => {
    Bread.insertMany([
    {
        name: 'Rye',
        hasGluten: true,
        image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
        name: 'French',
        hasGluten: true,
        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
        name: 'Gluten Free',
        hasGluten: false,
        image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    },
    {
        name: 'Pumpernickel',
        hasGluten: true,
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    }
    ]
    )
        .then(createdBreads => {
            res.redirect('/breads')
        })
})

// UPDATE
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    // Bread[req.params.arrayIndex] = req.body
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => {
            console.log(updatedBread)
            res.redirect(`/breads/${req.params.id}`)
        })
})


// CREATE
breads.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.image) {
        req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    // Bread.push(req.body)
    console.log(req.body)
    Bread.create(req.body)
    res.redirect('/breads')
    })

// DELETE
breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id) 
        .then(deletedBread => { 
            res.status(303).redirect('/breads')
        })
})

module.exports = breads
