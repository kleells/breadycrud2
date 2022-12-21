// DEPENDENCIES
const express = require('express')
// methodOverride used to override POST requests (i.e. delete breads)
const methodOverride = require('method-override')
// require mongoose after running npm i mongoose
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
// connect to mongo using mongoose and add MONGO_URI... to .env
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE (should be installed above routes)
app.use(methodOverride('_method'))
// Setting up which view engine should be used and
// requiring JSX so we can utilize it to build our views
// app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// ROUTES (landing page)
app.get('/', (req, res) => {
  res.send('The Breadmaker')
})

// Breads READ ROUTE (grabs breads_controller INDEX page)
const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

// 404 Page (when user types in nonexisting url)
  app.get('*', (req, res) => {
    res.render('404')
  })

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})
