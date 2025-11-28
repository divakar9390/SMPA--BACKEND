const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");



const contactSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    msg:{
        type:String,
        required: true
    },
    

});

contactSchema.methods.generateToken = async function(){
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


const Contact  = new mongoose.model("Contact",contactSchema);


module.exports = Contact;