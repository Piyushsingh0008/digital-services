const mongoose = require("mongoose")

const contact = mongoose.Schema({
    name:String,
    Email:String,
    phone:String,
});

module.exports = mongoose.model("contact",contact);