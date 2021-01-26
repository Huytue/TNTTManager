
const mongoose = require("mongoose");

const PhanDoan = new mongoose.Schema({
    name: String,
    phandoan: { type: mongoose.Schema.Types.ObjectId, ref: 'phandoan' }
});
module.exports = mongoose.model("phandoan", PhanDoan);


