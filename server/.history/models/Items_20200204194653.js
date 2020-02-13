 const mongoose = require('mongoose')

 const categorySchema = mongoose.Schema({
   name: String,
   icon: 
 })

const Category = mongoose.model('category', categorySchema);

module.exports = Category