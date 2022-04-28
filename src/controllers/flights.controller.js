const router = require("express").Router();
const Flight = require("../models/flights.model");

router.post("", async (req,res)=>{
    try{
        const flight = await Flight.create(req.body);
        return res.status(201).send(flight);
    }
    catch(er){
        return res.status(500).send(er.message);
    }
})

router.get("/allflights", async (req,res)=>{
    try{
        console.log("GET /allflights")
        const flights = await Flight.find().populate("startAirport").populate("endAirport").lean().exec()
        return res.status(200).send(flights);
    }
    catch(er){
        return res.status(500).send(er.message);
    }
})

module.exports = router;