module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const mongoose = require('mongoose')
  const article = mongoose.model('')
  router.get('/new/init', async (req, res) => {

  })

  app.use('/web/api', router)
}