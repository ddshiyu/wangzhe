 const mongoose = require('mongoose')

 const categorySchema = mongoose.Schema({
   name:String,
   pare
 })

const category = mongoose.model('category', categorySchema);

module.exports = category