const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user.model")

router.post("/register", async (req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email});
        if(user) return res.status(404).send("User Already Exists");
        
        user = await User.create(req.body);
        return res.status(200).send("User Created");

    }
    catch(er){
        return res.status(500).send(er.message);
    }
})

router.post("/login", async (req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email});
        if(!user) return res.status(404).send("Incorrect");

        const match = bcrypt.compareSync(req.body.password, user.password);
        if(!match) return res.status(404).send("Incorrect");

        const payload = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
        }
        return res.status(200).send({user:payload})
    }
    catch(er){
        return res.status(500).send(er.message);
    }
})

module.exports = router