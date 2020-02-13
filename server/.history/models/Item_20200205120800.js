 const mongoose = require('mongoose')

 const ItemSchema = mongoose.Schema({
   name: String,
   icon: String
 })

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item