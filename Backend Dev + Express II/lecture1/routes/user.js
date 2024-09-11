const express = require("express");
const router = express.Router();
const User = require("../models/user");

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

router.get("/getUserInfo", auth, async(req, res) => {
    try{
        const id = req.user.id;
        const user = await User.findById(id);
        res.status(200).json({
            success : true,
            user : user,
            message : "User info fetched successfully"
        });

    }
    catch(error){
        return res.status(500).json({
            success : false,
            error : error.message,
            message : "Error while fetching details with id"
        });
    }
    // it is a protected route, which will fetch the details of the user after successfully logged in
    // id is passed inside the payload 
    // we can fetch it out and find out all the details of the user from the db for our purpose
})

module.exports = router;