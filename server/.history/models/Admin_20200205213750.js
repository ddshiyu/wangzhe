 const mongoose = require('mongoose')

 const AdminSchema = mongoose.Schema({
   username: String,
   password: String
 })

const Admin = mongoose.model('Category', CategorySchema);

module.exports = Category