 const mongoose = require('mongoose')

 const categorySchema = mongoose.Schema({
   name: String,
   parents: {type: mongoose.SchemaTypes.ObjectId, ref: ''}
 })

const category = mongoose.model('category', categorySchema);

module.exports = category