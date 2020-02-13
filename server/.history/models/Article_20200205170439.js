 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
   name: String,
   parents: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
 })

const Article = mongoose.model('Category', CategorySchema);

module.exports = Category