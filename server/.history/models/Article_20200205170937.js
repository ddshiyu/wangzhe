 const mongoose = require('mongoose')

 const ArticleSchema = mongoose.Schema({
   name: String,
   categories: [{
     type: 
   }],

 })

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article