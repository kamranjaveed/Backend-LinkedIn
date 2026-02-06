// express 
const express = require('express');
const { signup, signin } = require('../controllers/User.controller')

// router

const router = express.Router();    

// endpoints
//HTTP
/*
GET - retrieval of data
POST - creating a new document
PUT/PATCH - updating documents
DELETE - deleting documents
*/

router.post("/register", signup)
router.post("/signin", signin)

module.exports = router