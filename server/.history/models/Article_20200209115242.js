 const mongoose = require('mongoose')

 const ArticleSchema = new mongoose.Schema({
   name: String,
   categories: [{type: mongoose.SchemaTypes.ObjectId,ref: 'Category'}],
   body: String
 },{
   // 数据库添加时间 带两个时间 createtime updatetime
   timestamps: true
 })

const Article = mongoose.model('Articlee', ArticleSchema);

module.exports = Article