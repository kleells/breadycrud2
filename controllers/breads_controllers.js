const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX (grabs bread.js array to be used by server.js)
breads.get('/', (req, res) => {
    res.send(Bread)
})

// SHOW (displays individual breads based on array index)
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads
