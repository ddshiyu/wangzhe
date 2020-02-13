 const mongoose = require('mongoose')

 const cSchema = mongoose.Schema({
   name: String,
   icon: String
 })

const Category = mongoose.model('category', categorySchema);

module.exports = Category