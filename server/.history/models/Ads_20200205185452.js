 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
   name: String,
   categories: [{type: mongoose.SchemaTypes.ObjectId,ref: 'Category'}],
   body: String
 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article