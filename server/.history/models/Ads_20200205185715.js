 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
  name: String,
  items: [{
    image:
  }]
 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article