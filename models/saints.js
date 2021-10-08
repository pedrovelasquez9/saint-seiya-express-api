const mongoose = require("mongoose");

const Saints = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  star: {
    type: String,
    required: true,
  },
  armour: {
    type: String,
    required: true,
  },
});

const Saint = mongoose.model("Saints", Saints);

module.exports = { Saint };
