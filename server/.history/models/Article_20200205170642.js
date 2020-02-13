 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
   name: String,
   categories: String,
   
 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article