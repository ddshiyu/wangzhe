 const mongoose = require('mongoose')

 const heroSchema = mongoose.Schema({
   name: String,
   avatar: String,
   title: String,
   categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
   scores: {
    difficult: {type: Number},
    skills: {type: Number},
    att: {type: Number},
    difficult: {type: Number}
   }
 })

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero