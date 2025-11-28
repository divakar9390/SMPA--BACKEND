const { TokenExpiredError } = require("jsonwebtoken");
const  Contact =require("../models/Contact");

const contactForm = async (req,res)=>{
    try{
        const response = req.body;
       const created= await Contact.create(response)
        res.status(201).json({msg:"message sends",token : await created.generateToken(),
            userId:created._id.toString()});
        


    }
    catch(error){
        res.status(500).json({msg:"message not delivered"});


    }
}

module.exports={contactForm};