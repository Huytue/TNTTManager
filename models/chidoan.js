
const mongoose = require("mongoose");

const ChiDoan = new mongoose.Schema({
	name: String,
	phandoan: { type: mongoose.Schema.Types.ObjectId, ref: 'phandoan' }
});
module.exports = mongoose.model("chidoan", ChiDoan);
