module.exports = app => {

  const express = require('express')
  const router = express.Router()
  const  = require('../../models/')
  // 添加数据
  router.post('/categories', async (req, res) => {
    const model = await .create(req.body);
    res.send(model)
  })

  router.put('/categories/:id', async (req, res) => {
    const model = await .findByIdAndUpdate(req.params.id, req.body);
    res.send(model)
  })
  // 获取数据
  router.get('/list', async (req, res) => {
    const data = await .find().populate('parents').limit(10)
    res.send(data)
  })
  router.get('/categories/:id', async (req, res) => {
    const data = await .findById(req.params.id)
    res.send(data)
  })

  router.delete('/categories/:id', async (req, res) => {
    const data = await .findByIdAndRemove(req.params.id)
    res.send({
      success: 0
    })
  })

  app.use('/admin/api', router)
}