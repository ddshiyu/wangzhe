 const mongoose = require('mongoose')

 const CategorySchema = mongoose.Schema({
   name: String,
   parents: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
 })

 // 添加虚拟属性
 CategorySchema.virtual('children',{
   localFiled: '_id',
   foreignFiled: 'parents',
   justOne: false,
   ref: 'Category'
 })

const Category = mongoose.model('Category', CategorySchema);


module.exports = Category