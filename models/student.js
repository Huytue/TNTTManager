const mongoose = require("mongoose");

const Student = new mongoose.Schema({
    name: String,
    email: String,
    chidoan: { type: mongoose.Schema.Types.ObjectId, ref: 'chidoan' }
});
module.exports = mongoose.model("student", Student);
