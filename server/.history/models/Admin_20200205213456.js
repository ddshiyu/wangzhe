 const mongoose = require('mongoose')

 const CategorySchema = mongoose.Schema({
   username: String,
   password: 
 })

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category