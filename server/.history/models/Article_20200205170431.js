 const mongoose = require('mongoose')

 const ASchema = mongoose.Schema({
   name: String,
   parents: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
 })

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category