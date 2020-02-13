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
     icon: {type: String},
     name: {type: String},
     description: {type: String},
     tips: {type: String}
   }],
   item1:[{
     type: mongoose.SchemaTypes.ObjectId,
     ref: 'Item'
   }],
   item2:[{
     type: mongoose.SchemaTypes.ObjectId,
     ref: 'Item'
   }],
   usageTips: String,
   battleTips: String,
   teamTips: String,
   relation: [{
     hero: {type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
     description: String
   }]
 })

const Hero = mongoose.model('Hero', heroSchema, 'heros');

module.exports = Hero