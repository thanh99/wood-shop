const mongoose = require("mongoose")
const model = require("./model")

const handlers = {
    async findMany(req, res, next) {
        try {
            let data = await model.findMany({})
            res.json(data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = handlers