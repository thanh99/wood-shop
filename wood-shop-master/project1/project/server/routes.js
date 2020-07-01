const express = require("express")
const router = new express.Router()
const path = require('path')
const productHandlers = require("./modules/products")

router.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
  })

router.post("/products", productHandlers.create)
  
router.get("/products", productHandlers.findMany)

module.exports = router