 const mongoose = require('mongoose')

 const heroSchema = mongoose.Schema({
   name: String,
   avatar: String,
   title: String,
   categories:[{type: mongoose.SchemaTypes.ObjectId, ref: ''}]
 })

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero