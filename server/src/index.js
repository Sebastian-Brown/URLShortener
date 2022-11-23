const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.get('/',(req, res) => {
    res.send("hell world");
})

app.post('/shortUrls', (req, res) => {
    res.send("hello world");
})

app.listen(process.env.PORT || 4000)