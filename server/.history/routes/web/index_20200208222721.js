module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const mongoose = require('mongoose')
  // 引用模型  因为在dbjs中引用了require-all
  const article = mongoose.model('Article')
  const category = mongoose.model('Category')
  router.get('/news/init', async (req, res) => {
    const cat = category.find().lean()
    console.log(cat)
  })

  app.use('/web/api', router)
}