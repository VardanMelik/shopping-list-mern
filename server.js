const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const concurrently = require('concurrently')


const app = express()
const port = 3000

// DB Config
const db = require('./config/keys').mongoURI


// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo Connection'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send("Front End is working"))

app.listen(port, () => console.log(`Server is running on ${port}`))