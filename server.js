const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const concurrently = require('concurrently')

const items = require('./routes/api/items')

const app = express()


// DB Config
const db = require('./config/keys').mongoURI
    //console.log(mongoURI)

// Connect to Mongo
mongoose.connect('mongodb://localhost:27017/shoppinglistmern', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo  Connection ...'))
    .catch(err => console.log(err))

// DB connection Debuging
/*const dbDebug = mongoose.connection
dbDebug.on('error', console.error.bind(console, 'connection error'))
dbDebug.once('opne', () => {
    console.log('DB connection is open')
})*/



// Use Routes
app.use('api/items', items)


app.get('/', (req, res) => res.send("Front End is working"))

const port = process.env.port || 3000


app.listen(port, () => console.log(`Server is running on ${port}`))