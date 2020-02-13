 const mongoose = require('mongoose')

 const CategorySchema = mongoose.Schema({
   username: String,
   password: String
 })

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category