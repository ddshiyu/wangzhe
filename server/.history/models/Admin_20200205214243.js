 const mongoose = require('mongoose')

 const AdminSchema = mongoose.Schema({
   username: String,
   password: {
     type: String,
     set(val){
       return require('bcrypt').hash
     }
   }
 })

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin