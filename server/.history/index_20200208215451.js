const express = require('express')

const app = express()
// token的密钥，原则不应该放在这里，放在环境变量里
app.set('secret', 'qiongqiong')

app.use(require('cors')()) 
app.use(express.json())
app.use('/upload', express.static(__dirname + '/upload'))

require('./routes/admin')(app)
require('./plugins/db.js')(app)

app.listen(300, () => {
  console.log('http://localhost:3000');
})