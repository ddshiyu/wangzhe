module.exports = app => {

  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })
  //const req.model = require('../../models/req.model')
  // 添加数据
  router.post('/', async (req, res) => {
    const model = await req.model.create(req.body);
    res.send(model)
  })

  router.put('/:id', async (req, res) => {
    const model = await req.model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model)
  })
  // 获取数据
  router.get('/', async (req, res) => {
    const data = await req.model.find().populate('parents').limit(10)
    res.send(data)
  })
  router.get('/:id', async (req, res) => {
    const data = await req.model.findById(req.params.id)
    res.send(data)
  })

  router.delete('/:id', async (req, res) => {
    const data = await req.model.findByIdAndRemove(req.params.id)
    res.send({
      success: 0
    })
  })

  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.model = require(`../../models/${modelName}`)
    next()
  }, router)

  


}