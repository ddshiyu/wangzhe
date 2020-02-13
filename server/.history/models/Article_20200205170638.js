 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
   name: String,
   categories: S
 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article