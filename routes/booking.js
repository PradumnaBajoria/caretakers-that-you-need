const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

//Initializing
router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
const users = require("../models/signupmodels");
const AuthMid = require("../middleware/authmid");
const booking = require("../models/booking")

router.post("/booking" , async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;
