const express = require("express");
const router = express.Router();

const {signup, login} = require("../controller.js/Auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

// testing protected route -> here only one middleware is used "auth"
router.get("/test", auth, (req, res)=> {
    res.json({
        success : true,
        message : "Welcome to the protected route of testing"
    });
});

// protected routes -> means the route can only be accessed by one having specific role, others will not have access
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success : true, 
        message : "Welcome to the protected route of student"
    })
});
//for student route, auth and isStudent are the middlewares used here, and atlast the handler

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success : true,
        message : "Welcome to the protected route of admin"
    });
});

module.exports = router;