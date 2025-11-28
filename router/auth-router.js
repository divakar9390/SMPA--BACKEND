const express = require("express");
const router = express.Router();
const {home,login,register,user} =require("../controller/auth-controller");
const loginSchema=require("../utils/Validator");
const Validator = require("../utils/Validate.midddlewear");
const { AuthMechanism } = require("mongodb");
const authmiddelwear = require("../utils/auth-middlewear");


router.route("/home").get(home);


router.route("/register").post(Validator(loginSchema),register);



router.route("/login").post(login);

router.route("/user").get(authmiddelwear,user)


module.exports= router;