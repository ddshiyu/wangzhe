 const mongoose = require('mongoose')

 const heroSchema = mongoose.Schema({
   name: String,
   icon: String
 })

const Hero = mongoose.model('Hero', itemSchema);

module.exports = Hero