 const mongoose = require('mongoose')

 const itemSchema = mongoose.Schema({
   name: String,
   icon: String
 })

const Item = mongoose.model('Item', itemSchema);

module.exports = Item