
const mongoose = require("mongoose");

const ChiDoan = new mongoose.Schema({
	name: String,
});
module.exports = mongoose.model("chidoan", ChiDoan);
