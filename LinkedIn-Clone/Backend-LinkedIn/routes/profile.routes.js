const express =  require("express");
const router = express.Router();    
const {createProfile} = require("../controllers/profile.controller");

router.post("/create-profile", createProfile)
module.exports = router