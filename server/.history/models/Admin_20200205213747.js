 const mongoose = require('mongoose')

 const AdminSchema = mongoose.Schema({
   username: String,
   password: String
 })

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category