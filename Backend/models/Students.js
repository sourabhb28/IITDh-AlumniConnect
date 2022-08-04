const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    userId: {type: mongoose.SchemaTypes.ObjectId, required: true },
    studentName: {type: String, required: true},
   graducation: {type: String, required: true },
   batch: {type: string,required: true},
  branch:{type:string,required: true},
    linkedIn: {type:urlencoded, required: true},
  gmail: {type:urlencoded, required: true},
  contactno: {type:Array},
});

module.exports = mongoose.model('Appointment', AppointmentSchema);