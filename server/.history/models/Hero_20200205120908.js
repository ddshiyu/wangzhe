 const mongoose = require('mongoose')

 const heroSchema = mongoose.Schema({
   name: String,
   avatar: String,
   title: String,
   categories:[{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
   sc
 })

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero