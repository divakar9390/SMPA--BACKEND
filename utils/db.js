require('dotenv').config({path:'./env'});
const { UnorderedBulkOperation } = require('mongodb');
const mongoose = require('mongoose');





//const URI= process.env.MONGO_URI;
const URI = `mongodb+srv://divakarbagthi:Divakar%4022@cluster0.fhzus.mongodb.net/STUDENTS?retryWrites=true&w=majority&appName=Cluster0`;
const mongodb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection successful");
    }
    catch{
        console.error("failed to connect")
        process.exit(1)

    }
};

module.exports=mongodb;