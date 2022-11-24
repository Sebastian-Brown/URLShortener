const cors = require("cors")
const express = require('express')
const mongoose = require('mongoose')
const shortURL = require('./models/shortURL')
const app = express()



require('dotenv').config()

app.use(cors());

app.use(express.urlencoded({ extended: false }))

app.use(express.json());

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await shortURL.findOne({ shortenedURL: req.params.shortUrl})

    if (shortUrl == null) return res.sendStatus(404)

    res.redirect(shortUrl.URL)
})

app.post('/shortUrl', async (req, res) => {
    // shortURL.create({full: req.body.URL})
    const newURL = new shortURL({
        URL: req.body.URL,
    });
    const createdURL = await newURL.save();
    res.json(createdURL);
});

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT || 4000)
})

