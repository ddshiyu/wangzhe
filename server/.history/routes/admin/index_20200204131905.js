module.exports = app => {

  const express = require('express')
  const router = express.Router()
  const category = require('../../models/category')
  // 添加数据
  router.post('/categories', async (req, res) => {
    const model = await category.create(req.body);
    res.send(model)
  })
  // 
  app.use('/admin/api', router)
}