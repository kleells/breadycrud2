// DEPENDENCIES
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema
const bakerSchema = new Schema ({
    name: {
        type: String,
        required: true,
        enum: ['Rita', 'Lucy', 'Vinny', 'Hugo', 'Monty', 'Walter']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})

// MODEL
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
