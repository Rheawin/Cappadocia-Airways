var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ReviewSchema = new Schema({
    nickname: String,
    experience: String
})

module.exports = mongoose.model('Review', ReviewSchema)
