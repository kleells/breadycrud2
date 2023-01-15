// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema for database
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://images.unsplash.com/photo-1556471013-0001958d2f12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdob2xlJTIwd2hlYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})

// helper methods (instance helper method)
breadSchema.methods.getBakedBy = function(){
  return `This ${this.name} recipe was shared by ${this.baker.name}, who has been contributing to The Breadmaker since ${this.baker.startDate.getFullYear()}.`
}


// model
const Bread = mongoose.model('Bread', breadSchema)

// export
module.exports = Bread

