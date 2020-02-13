 const mongoose = require('mongoose')

 const heroSchema = mongoose.Schema({
   name: String,
   icon: String
 })

const Hero = mongoose.model('Item', itemSchema);

module.exports = Item