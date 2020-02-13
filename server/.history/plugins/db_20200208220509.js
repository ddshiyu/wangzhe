module.exports = app => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://127.0.0.1:27017/wangzhe',{
    useNewUrlParser: true
  })
  mongoose.set('useFindAndModify', false);
  // 引用所有的模型，
  require('require-all')(__dirname+'../models')
}