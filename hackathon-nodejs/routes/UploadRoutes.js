const express = require("express");
const router = express.Router();
const uploadData = require("../controllers/getData.js")

router.post("/upload", uploadData)

module.exports = router