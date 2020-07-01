const mongoose = require("mongoose")

const mongooseString = 'mongodb+srv://common:common123@cluster0-dvsxq.mongodb.net/test'

mongoose.connect(mongooseString, {
    // optionsn
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connect success to mongo atlas!")
})
.catch((err) => {
    console.error("connect failed to mongo atlas")
    console.err(err.message)
})
