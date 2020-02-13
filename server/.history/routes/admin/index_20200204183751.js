module.exports = app => {

  const express = require('express')
  const router = express.Router()
  const Category = require('../../models/category')
  // 添加数据
  router.post('/', async (req, res) => {
    const model = await Category.create(req.body);
    res.send(model)
  })

  router.put('/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body);
    res.send(model)
  })
  // 获取数据
  router.get('/', async (req, res) => {
    const data = await Category.find().populate('parents').limit(10)
    res.send(data)
  })
  router.get('/:id', async (req, res) => {
    const data = await Category.findById(req.params.id)
    res.send(data)
  })

  router.delete('/categories/:id', async (req, res) => {
    const data = await Category.findByIdAndRemove(req.params.id)
    res.send({
      success: 0
    })
  })

  app.use('/admin/api/rest/:resource', router)
}