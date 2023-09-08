const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
   title: String, 
   description: String , 
   done: Boolean, 
}); 

module.exports  = mongoose.model('Crud', crudSchema)