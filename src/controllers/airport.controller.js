const router = require("express").Router();
const Airport = require("../models/airport.model");

router.post("", async (req,res)=>{
    try{
        const airport = await Airport.create(req.body)
        return res.status(201).send(airport);
    }
    catch(er){
        return res.status(500).send(er.message);
    }
})

router.get("", async (req,res)=>{
    try{
        const airports =await Airport.find().lean().exec();
        return res.status(200).send(airports);

    }
    catch(er){
        return res.status(500).send(er.message);
    }
})

module.exports = router;