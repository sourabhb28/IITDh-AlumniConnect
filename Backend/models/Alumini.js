const mongoose = require("mongoose");

const AluminiSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  profilepic: { type: String },
  aluminiName: { type: String, required: true },
  education: { type: String, required: true },
  batch: { type: String, required: true },
  branch: { type: String, required: true },
  company: { type: Array, required: true },
  internship: { type: Array },
  linkedIn: { type:String, required: true },
  gmail_id: { type: String, required: true },
  status: { type: Boolean },
  contact_no: { type: Array },
  description:{type:String,required: true},
  resume:{type:String},
  skills:{type:Array}
});

module.exports = mongoose.model("Alumini", AluminiSchema);
