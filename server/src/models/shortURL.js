const mongoose = require('mongoose')
const shortID = require('shortid')

const shortURLSchema = new mongoose.Schema ({
    URL: {
        type: String,
        required: true
    },

    shortenedURL: {
        type: String,
        required: true,
        default: shortID.generate
    },

    newCreatedURL : {
        type: String,
        // required: true
    }
})

module.exports = mongoose.model('shortUrl', shortURLSchema)