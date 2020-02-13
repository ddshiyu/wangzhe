 const mongoose = require('mongoose')

 const Schema = mongoose.Schema({
   name: String,
   icon: String
 })

const Category = mongoose.model('category', categorySchema);

module.exports = Category