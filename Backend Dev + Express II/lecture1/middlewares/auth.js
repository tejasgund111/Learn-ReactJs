const jwt = require("jsonwebtoken");
require("dotenv").config();

// 3 middlewares we've used "auth, isStudent, isAdmin", 
// isStudent and isAdmin are used for AuthZ & auth used for AuthN

exports.auth = (req, res, next) => { // next will give which is next middleware to be called
    try {
        // extract JWT token
        // 3 ways to extract token -> from cookies, body and header
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ",""); 

        if(!token){
            return res.status(401).json({
                success : false,
                message : "Token is missing"
            });
        }

        // verify the token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET); // data inside token can be decoded like this
            console.log(payload); // it incudes email, id, role
            // why this ? -> we have stored the payload inside the req.user
            req.user = payload;
        }
        catch(err){
            return res.status(401).json({
                success : false,
                message : "Token is invalid"
            });
        }
        next(); // now go in next middleware
    }
    catch (err) {
        return res.status(401).json({
            success : false,
            message : "Something went wrong, while verifying token"
        });
    }
}

exports.isStudent = (req, res, next) => {
    try {
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success : false,
                message : "This is protected route for students"
            });
        }

        next();
    }
    catch (err) {
        return res.status(500).json({
            success : false,
            message : "User role is not matching"
        });
    }
}

exports.isAdmin = (req, res, next) => {
    try {
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success : false,
                message : "This is protected route for admin"
            });
        }

        next();
    }
    catch (err) {
        return res.status(500).json({
            success : false,
            message : "User role is not matching"
        });
    }
}