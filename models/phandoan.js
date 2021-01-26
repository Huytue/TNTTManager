
const mongoose = require("mongoose");

const PhanDoan = new mongoose.Schema({
    name: String,
});
module.exports = mongoose.model("phandoan", PhanDoan);


