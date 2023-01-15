// DEPENDENCIES
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread')

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
}, { toJSON: { virtuals: true }})

// VIRTUALS
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// HOOKS
bakerSchema.post('findOneAndDelete', function() {
    // console.log(this)
    Bread.deleteMany({ baker: this._conditions._id })
        .then(deleteStatus => {
            console.log(deleteStatus)
        })
})

// MODEL
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
