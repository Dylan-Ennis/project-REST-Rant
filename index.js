// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')

// Express Settings
app.use(methodOverride('_method'));
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// Listen for Connections
const PORT = process.env.PORT || 3000

app.listen(process.env.PORT, console.log(`listening on port ${PORT}`))
