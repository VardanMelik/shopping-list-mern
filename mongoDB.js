// Testing MongoDB Connection
const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const app = express()

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo onnection is done'))
    .catch(err => console.log(err));

const blobSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, data: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})


app.get('/', (req, res) => {
    res.send('Get method is working')
})
const port = process.env.port || 3000

app.listen(port, () => console.log(`Server is unning on ${port}`))