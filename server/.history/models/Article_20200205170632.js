 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
   name: String,
   cate
 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article