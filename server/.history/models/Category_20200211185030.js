 const mongoose = require('mongoose')

 const CategorySchema = mongoose.Schema({
   name: String,
   parents: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
 })

 // 添加虚拟属性
 CategorySchema.virtual('children',{
   localField: '_id',
   foreignField: 'parents',
   justOne: false,
   ref: 'Category'
 })

 CategorySchema.virtual('newslist',{
  localField: '_id',
  foreignField: 'categories',
  justOne: false,
  ref: 'Article'
})
const Category = mongoose.model('Category', CategorySchema);


module.exports = Category