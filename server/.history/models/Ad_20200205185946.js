 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
  name: String,
  items: [{
    image: String,
    url: String // 跳转地址
  }]
 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article