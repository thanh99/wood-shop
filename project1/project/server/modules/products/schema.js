const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, `Yêu cầu 'title'!`]
    },
    description: {
        type: String,
        required: [true, `Yêu cầu 'description'!`]
    }
})

module.exports = schema