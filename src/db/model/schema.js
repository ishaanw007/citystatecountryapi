const mongoose = require("mongoose");
const schema = new mongoose.Schema({}, { strict: false });
const data = new mongoose.model("mapinfo", schema);
module.exports = data;
