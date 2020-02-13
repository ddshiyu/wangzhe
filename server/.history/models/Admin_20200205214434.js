 const mongoose = require('mongoose')

 const AdminSchema = mongoose.Schema({
   username: String,
   password: {
     type: String,
     select: false,// 不返回
     set(val){
       return require('bcrypt').hashSync(val, 10)
     }
   }
 })

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin