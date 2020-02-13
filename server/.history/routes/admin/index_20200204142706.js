module.exports = app => {

  const express = require('express')
  const router = express.Router()
  const category = require('../../models/category')
  // 添加数据
  router.post('/categories', async (req, res) => {
    const model = await category.create(req.body);
    res.send(model)
  })
  // 获取数据
  router.get('/list', async (req, res) => {
    const data = await category.find().limit(10)
    res.send(data)
  })
  router.get('/categories/:id', async (req, res) => {
    const data = await category.findById(req.params.id})
    res.send(data)
  })
  app.use('/admin/api', router)
}