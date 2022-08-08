const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  userId: {type: mongoose.SchemaTypes.ObjectId },
  studentName: {type: String},
  education: {type: String },
  batch: {type: String},
  branch:{type:String},
  linkedIn: {type:String },
  gmail_id: {type:String },
  contact_no: {type:Array},
});

module.exports = mongoose.model('Student', StudentSchema);