const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: { type: Number, required: true },
  mission: { type: String, required: true },
  rocket: { type: String, required: true },
  launchDate: { type: Date, required: true },
  target: { type: String, required: true },
  customers: [String],
  upcoming: { type: Boolean, default: true, required: true },
  success: { type: Boolean, default: true, required: true },
});

module.exports = mongoose.model("Launch", launchesSchema);
