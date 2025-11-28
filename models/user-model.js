const mongoose = require("mongoose");
const  jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs");


global.JWT_SECRET = "your_hardcoded_secret_key";


const userSchema = new mongoose.Schema({


    username:{
        type: String,
        required: true,

    },

    email:{
        type: String,
        required: true,
        
    },
    phn_no:{
        type: String,
        required: true,
        
    },
    pass:{
        type: String,
        required: true,
        
    }
});



userSchema.methods.comparepassword= async function(pass){
    return bcrypt.compare(pass, this.pass);
}

userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign(
            {
                userId: this._id.toString(),
                email:this.email,
                isAdmin: this.isAdmin,

            },
            global.JWT_SECRET,
            {
                expiresIn:"30d",
            }
        ) ;
    }

    
    catch(error){
        console.log(error);

    }
}; 


const User = mongoose.model("User",userSchema);

module.exports=User;
