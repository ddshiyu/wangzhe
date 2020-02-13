 const mongoose = require('mongoose')

 const itemSchema = mongoose.Schema({
   name: String,
   icon: String
 })

const Item = mongoose.model('item', itemSchema);

module.exports = Item