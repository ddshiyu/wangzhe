 const mongoose = require('mongoose')

 const AdminSchema = mongoose.Schema({
   username: String,
   password: {
     type: String,
     
   }
 })

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin