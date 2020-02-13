 const mongoose = require('mongoose')

 const heroSchema = mongoose.Schema({
   name: String,
   icon: String
 })

const Item = mongoose.model('Item', itemSchema);

module.exports = Item