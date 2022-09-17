const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calculateSchema = new Schema({
  values: {
    type: String,
    require: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("calculate", calculateSchema);
