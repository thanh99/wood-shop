require("./connect-mongodb")
const express = require('express')
const bodyParser = require("body-parser")
const path = require('path')
const PORT = 3000
const app = express();
const router = require("./routes")

app.use(express.static('../client'))
app.use(bodyParser.json())

app.use(router)

app.use((err, req, res, next) => {
    res.status(500)
      .json({
        message: err.message,
        stack: err.stack
      })
  })


app.listen(PORT, (err) => {
    err 
        ? console.error(err.message)
        : console.log(`Server listening on port ${PORT}`)
})