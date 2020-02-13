 const mongoose = require('mongoose')

 const categorySchema = mongoose.Schema({
   name: String,
   icon: {type: mongoose.SchemaTypes.ObjectId, ref: 'category'}
 })

const Category = mongoose.model('category', categorySchema);

module.exports = Category