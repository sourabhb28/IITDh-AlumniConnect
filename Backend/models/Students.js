const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    userId: {type: mongoose.SchemaTypes.ObjectId },
    studentName: {type: String},
    education: {type: String },
   batch: {type: String},
  branch:{type:String},
    linkedIn: {type:String },
  gmail: {type:String },
  contactno: {type:Array},
});

module.exports = mongoose.model('Appointment', AppointmentSchema);