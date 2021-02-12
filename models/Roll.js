const mongoose = require("mongoose");
const shortid = require("shortid");

shortid.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
);

const RollSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  site_name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  timer: { type: Number, required: true },
  counter: { type: Number, default: 0 },
});

global.RollSchema = mongoose.model("Roll", RollSchema);
module.exports = global.RollSchema;
