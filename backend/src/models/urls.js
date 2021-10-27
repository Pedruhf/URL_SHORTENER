const { mongoose } = require("../database/mongoose");

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  code: {
    type: String,
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const URL = mongoose.model("URL", urlSchema);

module.exports = { URL };
