 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
   name: String,
   categories: [{
     type: mongoose.Scheme
   }],

 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article