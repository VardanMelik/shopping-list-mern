const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const concurrently = require('concurrently')

const items = require('./routes/api/items')

const app = express()


// DB Config
const db = require('./config/keys').mongoURI


// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo  Connection ...'))
    .catch(err => console.log(err))

// Use Routes
app.use('api/items', items)


app.get('/', (req, res) => res.send("Front End is working"))

const port = process.env.port || 3000


app.listen(port, () => console.log(`Server is running on ${port}`))