const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/url_shortener");
mongoose.Promise = global.Promise;

module.exports = { mongoose };