 const mongoose = require('mongoose')

 const CategorySchema = mongoose.Schema({
   username: String,
   parents: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
 })

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category