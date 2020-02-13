module.exports = options => {
  const jwt = require('jsonwebtoken')
  // http 返回校验码
  const assert = require('http-assert')
  const admin = require('../models/Admin')
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请登陆')
    // 解密token
    //对象解构
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '请登陆')
    // 把查到的数据绑定到req上，保证能在后面的函数上使用  
    const user = await admin.findById(id)
    assert(req.user, 401, '请登陆')
    await next()
  }
}