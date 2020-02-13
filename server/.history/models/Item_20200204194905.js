 const mongoose = require('mongoose')

 const itemSchema = mongoose.Schema({
   name: String,
   icon: String
 })

const Item = mongoose.model('catitemegory', itemSchema);

module.exports = Item