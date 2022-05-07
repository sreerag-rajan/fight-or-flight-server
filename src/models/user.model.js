const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")


const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, required:true}
})

userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next();

    let hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

module.exports = mongoose.model("user", userSchema)

