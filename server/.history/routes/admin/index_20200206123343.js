module.exports = app => {

  const express = require('express')
  const jwt = require('jsonwebtoken')
  const admin = require('../../models/Admin')
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
  // 第二个函数是中间件，查询有没有token
  router.get('/', async (req, res, next) => {
    const token = req.headers.authorization.split(' ').pop()
    console.log(typeof token)
    // 解密token
    const tokendata = jwt.verify(token, app.get('secret'))
    
    await next()
  }, async (req, res) => {
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

  const multer = require('multer')
  let upload = multer({
    dest: __dirname + '/../../upload'
  })
  // single的参数file 是文件名  查看浏览器的upload上传参数
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = 'http://localhost:3000/upload/'+file.filename
    res.send(file)
  })

  // 登陆
  app.post('/admin/api/login', async (req, res) => {
    const {username, password} = req.body
    const user = await admin.findOne({username}).select('+password')
    if(!user){
      return res.status(422).send({msg: '用户不存在'})
    }
    // 校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    if(!isValid){
      return res.status(422).send({
        msg: '密码错误'
      })
    }
    // 返回token 安装jsonwebtoken 生成token
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token: token})
  })
}