// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE (should be installed above routes)
// Here we are setting up which view engine should be used and
// requiring JSX so we can utilize it to build our views
// app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// ROUTES (landing page)
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// Breads READ ROUTE (grabs breads_controller INDEX page)
const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

// 404 Page (when user types in nonexisting url)
  app.get('*', (req, res) => {
    res.send('404 - NO ROUTE EXISTS')
  })

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})
