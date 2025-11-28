const jwt =  require("jsonwebtoken");
const User = require("../models/user-model");



const authmiddelwear =async(req,res,next)=>{
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({msg:"Unauthorized Token"});
    }
    console.log("token from middlewear",token);
    const jwToken = token.replace("Bearer","").trim();

    try{
        const isverified = jwt.verify(jwToken,global.JWT_SECRET);
        console.log(isverified)
        const userdata = await User.findOne({email:isverified.email}).select({
            pass:0
        })

        req.user =userdata;
        req.token= token;
        req.userID = userdata._id;


        next();
    }
    catch(error){
        return res.status(401).json({msg:"Unauthorized Token"})

        }
    
};

module.exports=authmiddelwear;