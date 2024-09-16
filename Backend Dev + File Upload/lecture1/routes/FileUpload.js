const express = require("express");
const router = express.Router();

// controller mei se handler leke aao
// const {imageUpload, videoUpload, imageReducerUpload, localFileUpload} = require("../controllers/fileUpload");
const { localFileUpload, imageUpload, videoUpload, imageSizeReducer } = require("../controllers/fileUpload");

// api route
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageSizeReducer", imageSizeReducer);

module.exports = router;