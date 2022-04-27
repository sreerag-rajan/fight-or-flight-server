const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema({
    code: {type: String, required:true},
    name: {type: String, required:true},
    city: {type: String, required:true},
    state: {type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("airport", airportSchema);