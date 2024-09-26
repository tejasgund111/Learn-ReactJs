const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.updateProfile = async (req, res) => {
    try {
        // get data
        const { dateOfBirth = "", about = "", contactNumber, gender } = req.body;
        // get userId
        const id = req.user.id;
        // validation
        if (!contactNumber || !gender || !id) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        // find profile
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId);
        // update profile
        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about = about;
        profileDetails.contactNumber = contactNumber;
        profileDetails.gender = gender;

        await profileDetails.save(); // object is made already so we're just saving it
        // return response
        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            profileDetails
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while updating profile",
            error: error.message
        });
    }
}

// HW : how can we schedule this delete operation
exports.deleteAccount = async (req, res) => {
    try {
        // get account
        const id = req.user.id;
        // validation
        const userDetails = await User.findById(id);
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        // delete profile
        await Profile.findByIdAndDelete({ _id: userDetails.additionalDetails });
        // delete user
        await User.findByIdAndDelete({ _id: id });
        // TODO : HW : unenroll user from all enrolled courses
        // return response
        return res.status(200).json({
            success: true,
            message: "User Account deleted successfully",
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while Deleting Account",
            error: error.message
        });
    }
}

exports.getAllUserDetails = async (req, res) => {
    try {
        const id = req.user.id;

        const userDetails = await User.findById(id).populate("additionalDetails").exec();

        console.log("UserDetails", userDetails);

        return res.status(200).json({
            success : true,
            message : "All user details fetched successfully",
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while getting user details",
            error: error.message
        });
    }
}