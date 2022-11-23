const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://striddy:thevoidisdark@cluster0.idthmwe.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.get('/',(req, res) => {
    res.send("hell world");
})

app.post('/shortUrls', (req, res) => {

})

app.listen(process.env.PORT || 4000)