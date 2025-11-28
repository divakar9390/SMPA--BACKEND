const express=require("express");
const router = express.Router();
const {contactForm} = require("../controller/Contact_controll");


router.route("/contactform").post(contactForm);




module.exports= router;