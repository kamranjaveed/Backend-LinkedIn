// apis for profile

const express = require("express");

const router = express.Router();
const { createComment } = require("../controllers/comment.controller");

router.post("/add-comment", createComment);

module.exports = router;