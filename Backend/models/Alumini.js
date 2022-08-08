const mongoose = require("mongoose");

const AluminiSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId,  },
  profilepic: { type: String },
  aluminiName: { type: String,  },
  education: { type: String,  },
  batch: { type: String,  },
  branch: { type: String,  },
  company: { type: Array,  },
  internship: { type: Array },
  linkedIn: { type:String,  },
  gmail_id: { type: String,  },
  status: { type: Boolean },
  contact_no: { type: Array },
  description:{type:String,},
  resume:{type:String},
  skills:{type:Array}
});

module.exports = mongoose.model("Alumini", AluminiSchema);
