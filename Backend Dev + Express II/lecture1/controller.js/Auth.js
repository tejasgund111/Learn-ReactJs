const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// signup route hadler
exports.signup = async (req, res) => {
    try {
        // get data
        const { name, email, password, role } = req.body;
        // check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // secure password
        let hashedPassword;
        try {
            // Hash the password with a salt rounds of 10
            hashedPassword = await bcrypt.hash(password, 10)
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error while hasing password",
            });
        }

        // create entry for User
        const user = await User.create({
            name, email, password: hashedPassword, role
        });

        return res.status(200).json({
            success: true,
            userData: user,
            message: "User created successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered",
        });
    }
}

// login route handler
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body; // fetching data
        // validation on email and password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });
        }
        // check for registered user
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exists"
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        };

        // verify password and generate a JWT token
        if (await bcrypt.compare(password, user.password)) {
            // password match
            let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" }); // creation of token

            user = user.toObject();
            user.token = token; // inserting token value into user, adding one more field in user object
            user.password = undefined; // we don't want to pass password, so we just hide its value from object only, not from database
            console.log(user);

            const options = {
                // 24 * 60 * 60 * 1000 -> 1 day in milliseconds
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // abhi ke date se leke 3 din tak 
                httpOnly: true // you cannot access cookie in client side
            };
            // we have to pass name of cookie, value and options
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User logged in successfully"
            });
        }
        else {
            // password do not match
            return res.status(403).json({
                success: false,
                message: "Password do not match"
            })
        }

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be Logged In",
        });
    }
}

// There is no need of cookie here, we just have used it for our practice and understanding