require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors")
const router = require("./router/auth-router");
const mongodb = require("./utils/db");
const loginSchema = require("./utils/Validator");
const validate = require("./utils/Validate.midddlewear");
const Errormiddle = require("./utils/Error-middlewear");
const contactRouter= require("./router/Contact-router");

const corsoptions={
    origin:`https://smpa-frontend.onrender.com`,
    method:"GET, PUT,POST ,DELETE, ",
    credential:true
}


app.use(express.json());
app.use(cors(corsoptions));

app.use("/api/auth",router);
app.use("/api/form",contactRouter);


mongodb().then(()=>{
app.listen( PORT,()=>{
    console.log(`this server running in port:${PORT}`);

});
});