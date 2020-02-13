 const mongoose = require('mongoose')

 const heroSchema = mongoose.Schema({
   name: String,
   avatar: String,
   title: String,
   categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
   scores: {
    difficult: {type: Number},
    skills: {type: Number},
    attack: {type: Number},
    survive: {type: Number}
   },
   skills: [{
     icon: {type: String}
     icon: {type: String}
     icon: {type: String}
     icon: {type: String}
   }]
 })

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero