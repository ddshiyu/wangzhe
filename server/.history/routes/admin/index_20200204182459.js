module.exports = app => {

  const express = require('express')
  const router = express.Router()
  const C = require('../../models/C')
  // 添加数据
  router.post('/categories', async (req, res) => {
    const model = await C.create(req.body);
    res.send(model)
  })

  router.put('/categories/:id', async (req, res) => {
    const model = await C.findByIdAndUpdate(req.params.id, req.body);
    res.send(model)
  })
  // 获取数据
  router.get('/list', async (req, res) => {
    const data = await C.find().populate('parents').limit(10)
    res.send(data)
  })
  router.get('/categories/:id', async (req, res) => {
    const data = await C.findById(req.params.id)
    res.send(data)
  })

  router.delete('/categories/:id', async (req, res) => {
    const data = await C.findByIdAndRemove(req.params.id)
    res.send({
      success: 0
    })
  })

  app.use('/admin/api', router)
}