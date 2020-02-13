 const mongoose = require('mongoose')

 const categorySchema = mongoose.Schema({
   name: String,
   parents: {type: mongoose.SchemaTypes.}
 })

const category = mongoose.model('category', categorySchema);

module.exports = category