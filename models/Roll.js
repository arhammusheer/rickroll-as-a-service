const mongoose = require("mongoose");
mongoose.plugin(require("mongoose-nanoid"));

const RollSchema = new mongoose.Schema({
  site_name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  timer: { type: Number, required: true },
  counter: { type: Number, default: 0 },
});

global.RollSchema = mongoose.model("Roll", RollSchema);
module.exports = global.RollSchema;
