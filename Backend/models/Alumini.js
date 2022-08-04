const mongoose = require('mongoose')

const AluminiSchema = new mongoose.Schema({
    userId: {type: mongoose.SchemaTypes.ObjectId, required: true },
    profilepic:{type:urlencoded},
  aluminiName: {type: String, required: true},
 graducation: {type: String, required: true },
  batch: {type: string,required: true},
  branch:{type:string,required: true},
  company: {type: Array, required: true },
  internship:{type: Array },
  linkedIn: {type:urlencoded, required: true},
  gmail: {type:urlencoded, required: true},
  status:{type:boolean},
  contactno: {type:Array},
});

module.exports = mongoose.model('Alumini', AluminiSchema);