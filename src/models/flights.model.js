const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    startAirport : {type:mongoose.Schema.Types.ObjectId, ref:"airport",required:true},
    endAirport : {type:mongoose.Schema.Types.ObjectId, ref:"airport",required:true},
    startTime : {type: Date, required:true},
    endTime : {type: Date, required:true},
    capacity : {type: Number, required:true},
    // seatAvailable : {type: Number, required:true}
})

module.exports = mongoose.model("flight", flightSchema);