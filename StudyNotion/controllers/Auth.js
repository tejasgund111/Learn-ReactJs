const bcrypt = require("bcrypt");
const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/templates/passwordUpdate");
const Profile = require("../models/Profile");
require("dotenv").config();

// sendOTP
exports.sendOTP = async (req, res) => {
    try {
        // fetch email
        const { email } = req.body;

        const checkUserPresent = await User.findOne({ email });

        // if user already present return a response
        if (checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: "User already registered"
            });
        }

        // generate otp
        var otp = otpGenerator.generate(6, {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        });
        console.log("OTP generated >> ", otp);

        // check unique otp or not
        let result = await OTP.findOne({ otp: otp });

        while (result) {
            otp = otpGenerator.generate(6, {
                lowerCaseAlphabets: false,
                upperCaseAlphabets: false,
                specialChars: false
            });

            result = await OTP.findOne({ otp: otp });
        }

        const otpPayload = { email, otp };

        // create an entry for otp
        const otpBody = await OTP.create(otpPayload);
        console.log("OTP body >> ", otpBody);

        // return response successfull
        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            otp
        });

    }
    catch (error) {
        console.log("Error while sending otp >> ", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// signUp
exports.signUp = async (req, res) => {
    try {
        // data fetch from request's body
        const { firstName, lastName, email, password, confirmPassword, accountType, contactNumber, otp } = req.body;
        // validate
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            })
        }
        // 2 password match karlo
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirmPassword values are does not match, Please try again !"
            })
        }
        // check user already exists or not
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }

        // find the most recent otp stored in DB for the user
        const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log("Recent otp >> ", recentOtp);
        // validate OTP
        if (recentOtp.length == 0) {
            // otp not found
            return res.status(400).json({
                success: false,
                message: 'OTP not found'
            })
        }
        else if (otp !== recentOtp) {
            // Invalid otp
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            })
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // entry create in DB

        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null
        });

        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password: hashedPassword,
            accountType,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,

        });

        // return res  
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            user
        });

    }
    catch (error) {
        console.log("Error while signing in >> ", error);
        return res.status(500).json({
            success: false,
            message: "User registration failed"
        })
    }
}

// LogIn
exports.logIn = async (req, res) => {
    try{
        // get data from req body
        const {email, password} = req.body;
        // validation
        if(!email || !password){
            return res.status(403).json({
                success : false,
                message : "All fields are required"
            })
        }
        // user exist or not
        const user = await User.findOne({email}).populate("additionalDetails");
        if(!user){
            return res.status(401).json({
                success : false,
                messsage : "User not registered, Please signUp first"
            })
        }
        // generate jwt token, after password matching
        if(await bcrypt.compare(password, user.password)){
            const payload = {
                email : user.email,
                id : user._id,
                accountType : user.accountType
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h"
            });

            user.token = token;
            user.password = undefined;

            // create cookie and send response
            const options = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly : true
            };
            res.cookie("token", token, options).status(200).json({
                success : true,
                token,
                user,
                message : "Logged In Successfully",
            })
        }
        else{
            return res.status(401).json({
                success : false,
                message : "Password is incorrect"
            });
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Login Failed"
        });
    }
}

// Controller for Changing Password
exports.changePassword = async (req, res) => {
	try {
		// Get user data from req.user
		const userDetails = await User.findById(req.user.id);

		// Get old password, new password, and confirm new password from req.body
		const { oldPassword, newPassword, confirmNewPassword } = req.body;

		// Validate old password
		const isPasswordMatch = await bcrypt.compare(
			oldPassword,
			userDetails.password
		);
		if (!isPasswordMatch) {
			// If old password does not match, return a 401 (Unauthorized) error
			return res
				.status(401)
				.json({ success: false, message: "The password is incorrect" });
		}

		// Match new password and confirm new password
		if (newPassword !== confirmNewPassword) {
			// If new password and confirm new password do not match, return a 400 (Bad Request) error
			return res.status(400).json({
				success: false,
				message: "The password and confirm password does not match",
			});
		}

		// Update password
		const encryptedPassword = await bcrypt.hash(newPassword, 10);
		const updatedUserDetails = await User.findByIdAndUpdate(
			req.user.id,
			{ password: encryptedPassword },
			{ new: true }
		);

		// Send notification email
		try {
			const emailResponse = await mailSender(
				updatedUserDetails.email,
				passwordUpdated(
					updatedUserDetails.email,
					`Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
				)
			);
			console.log("Email sent successfully:", emailResponse.response);
		} catch (error) {
			// If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
			console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});
		}

		// Return success response
		return res
			.status(200)
			.json({ success: true, message: "Password updated successfully" });
	} catch (error) {
		// If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
		console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
	}
};

