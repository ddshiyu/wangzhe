const express = require('express')

const app = express()
app.use(require('cors')())
app.use(express.json())
app.use('upload', express.static(__dirname + '/upload'))

require('./routes/admin')(app)
require('./plugins/db.js')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000');
})