const express = require("express");
const router = express.Router();

// controller mei se handler leke aao
// const {imageUpload, videoUpload, imageReducerUpload, localFileUpload} = require("../controllers/fileUpload");
const { localFileUpload } = require("../controllers/fileUpload");

// api route
router.post("/localFileUpload", localFileUpload);

module.exports = router;