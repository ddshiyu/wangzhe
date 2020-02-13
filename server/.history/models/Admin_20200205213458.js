 const mongoose = require('mongoose')

 const CategorySchema = mongoose.Schema({
   username: String,
   password: S
 })

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category