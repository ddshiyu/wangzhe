const express = require('express')

const app = express()
// token的密钥，原则不应该放在这里，放在环境变量里
app.set('secret', 'qiongqiong')

app.use(require('cors')()) 
// json 用于处理前端传过来的参数
app.use(express.json())
app.use('/upload', express.static(__dirname + '/upload'))
require('./plugins/db.js')(app)
require('./routes/admin')(app)
require('./routes/web')(app)
app.listen(3000, () => {
  console.log('http://localhost:3000');
})