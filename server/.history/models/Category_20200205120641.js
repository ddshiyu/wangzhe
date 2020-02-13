 const mongoose = require('mongoose')

 const categorySchema = mongoose.Schema({
   name: String,
   parents: {type: mongoose.SchemaTypes.ObjectId, ref: 'category'}
 })

const Category = mongoose.model('Category', categorySchema);

module.exports = Category