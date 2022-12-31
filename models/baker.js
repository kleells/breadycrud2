// DEPENDENCIES
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread')

// schema
const bakerSchema = new Schema ({
    name: {
        type: String,
        required: true,
        enum: ['Rita', 'Lucy', 'Vinny', 'Simon', 'Stanley', 'Charlie']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
}, { toJSON: { virtuals: true }})

// VIRTUALS
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// MODEL
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
