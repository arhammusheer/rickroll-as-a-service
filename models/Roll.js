var mongoose = require("mongoose");

var RollSchema = new mongoose.Schema({
  site_name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  timer: { type: Number, required: true },
});

global.RollSchema = global.RollSchema || mongoose.model("Roll", RollSchema);
module.exports = global.RollSchema;
