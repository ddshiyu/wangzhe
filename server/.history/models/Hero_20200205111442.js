 const mongoose = require('mongoose')

 const heroSchema = mongoose.Schema({
   name: String,
   avatar: String
 })

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero