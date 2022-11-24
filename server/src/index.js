const express = require('express')
const mongoose = require('mongoose')
const shortURL = require('./models/shortURL')
const app = express()

require('dotenv').config()

app.use(express.urlencoded({ extended: false }))

app.get('/',(req, res) => {
    res.send("hell world");
})

app.post('/shortUrl', async (req, res) => {
    // shortURL.create({full: req.body.URL})
    const newURL = new shortURL({
        URL: "https://www.youtube.com/watch?v=SLpUKAGnm-g&list=PLYxVTzT2VJnMfHRAhP2E3FsKCyc5bFYzT&index=4&ab_channel=WebDevSimplified"
    });
    const createdURL = await newURL.save();
    res.json(createdURL);
});

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT || 4000)
})

