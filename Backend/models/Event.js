const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  
});

module.exports = mongoose.model("Event", EventSchema);
