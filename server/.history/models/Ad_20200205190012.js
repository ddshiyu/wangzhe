 const mongoose = require('mongoose')

 const AdSchema = mongoose.Schema({
  name: String,
  items: [{
    image: String,
    url: String // 跳转地址
  }]
 })

const Ad = mongoose.model('Ad', ArticleSchema);

module.exports = Article