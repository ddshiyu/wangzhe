 const mongoose = require('mongoose')

 const aSchema = mongoose.Schema({
   username: String,
   password: String
 })

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category