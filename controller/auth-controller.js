const User = require("../models/user-model");
const bcrypt = require('bcryptjs');



const home = async(req,res)=>{
    try{
        res.status(200).json("welcome to home page router");

    }
    catch(error){
        console.log(error)
    }

};

const login = async(req,res)=>{
    try{
       
        const {email,pass}=req.body;
        const userExist =await User.findOne({email});

        if(!userExist){
            return  res.status(400).json({msg:"invalid credentilas"});
        }

        //const user= await bcrypt.compare(pass,userExist.pass);
        const user = await userExist.comparepassword(pass);

        if(user){
            res.status(201).json({
                msg:"login succesfully",
                token:await userExist.generateToken(),
                userId:userExist._id.toString()
            })
            

        }else{
            res.status(401).json({msg:"invalid email or password"})
        }

    }
    catch(error){
        return res.status(500).json({msg:"internal server error"})
    }
 
};

const register = async(req,res)=>{
    try{

        const {username,email,phn_no,pass} = req.body;
        const userExist=await User.findOne({email});
        if(userExist){
           return  res.status(400).json({msg:"user already exist"});
        }

        const saltRound=10;
        const hash_pass= await bcrypt.hash(pass,saltRound); 

        const created=await User.create({username,email,phn_no,pass:hash_pass});
        res.status(201).json({msg:created,
             token : await created.generateToken(),
            userId:created._id.toString()});
    }
    catch(error){
        res.status(500).json({msg:"failed connection"});
        
    }
};

const user = async(req,res)=>{
    try{

        const userdata = req.user;
        return res.status(200).json({});
       
    }
    catch(error){
        res.status(500).json({msg:"failed connection"});
        
    }
};




module.exports={home,login,register,user};