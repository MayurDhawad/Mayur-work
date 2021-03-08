const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchema = new Schema({
    title: String,
    url: String,
    description: String
})

module.exports = mongoose.model('news', newsSchema, "news")