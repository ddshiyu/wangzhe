 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
  name: String,
  items: [{
    image: String,
    
  }]
 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article