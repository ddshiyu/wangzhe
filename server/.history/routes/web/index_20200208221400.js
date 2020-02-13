module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const mongoose = require('mongoose')
  // 引用模型
  const article = mongoose.model('Article')
  const category = mongoose.model('Cate')
  router.get('/new/init', async (req, res) => {

  })

  app.use('/web/api', router)
}