 const mongoose = require('mongoose')

 const CategorySchema = mongoose.Schema({
   name: String,
   parents: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
 })

 CategorySchema.virtual('children',{
   localFiled: '_id',
   foreignFiled: 'parents',
   
 })

const Category = mongoose.model('Category', CategorySchema);


module.exports = Category