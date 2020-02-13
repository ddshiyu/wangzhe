 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
  name: String,
  items: [{
    img
  }]
 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article