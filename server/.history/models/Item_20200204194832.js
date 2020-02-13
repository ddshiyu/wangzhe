 const mongoose = require('mongoose')

 const itemSchema = mongoose.Schema({
   name: String,
   icon: String
 })

const Category = mongoose.model('category', itemSchema);

module.exports = Category