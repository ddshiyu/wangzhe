 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
   name: String,
   categories: [{
     type: mongoose.
   }],

 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article