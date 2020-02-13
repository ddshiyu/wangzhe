module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const mongoose = require('mongoose')
  // 引用模型
  const article = mongoose.model('Article')
  //const category = mongoose.model('Category')
  router.get('/new/init', async (req, res) => {
   // const cat = category.find()
    //res.send(cat)
  })

  app.use('/web/api', router)
}