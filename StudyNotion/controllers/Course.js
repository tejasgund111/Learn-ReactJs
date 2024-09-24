const Course = require("../models/Course");
const Tag = require("../models/Tag");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/UploadImageToCloudinary");

// createCourse handler function
exports.createCourse = async (req, res) => {
    try {
        // fetch data
        const { courseName, courseDescription, whatYouWillLearn, price, tag } = req.body;

        // get thumbnail
        const thumbnail = req.files.thumbnailImage;

        // validation
        if (!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // check for instructor
        const userId = req.user.id; // we've passed the id in payload // check middleware and logIn
        const instructorDetails = await User.findById(userId);
        console.log("InstructorDetails >> ", instructorDetails);
        // TODO : verify that userId and instructorDetails._id are same or different ??

        if (!instructorDetails) {
            return res.status(400).json({
                success: false,
                message: "Instructor not found"
            })
        }
        // check given tag is valid or not
        const tagDetails = await Tag.findById(tag);
        if (!tagDetails) {
            return res.status(400).json({
                success: false,
                message: "Tag Details not found"
            })
        }

        // upload image to cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        // create an entry for new course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor: instructorDetails._id,
            whatYouWillLearn: whatYouWillLearn,
            price,
            tag: tagDetails._id,
            thumbnail: thumbnailImage.secure_url
        });

        // add the new course to the user Schema of instructor
        await User.findByIdAndUpdate(
            { _id: instructorDetails._id },
            {
                $push: {
                    courses: newCourse._id
                }
            },
            { new: true }
        );

        // TODO: update the Tag schema

        // return response 
        return res.status(200).json({
            success: true,
            message: "Course created successfully",
            data: newCourse
        });

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to create course",
            error: error.message
        });
    }
}



// getAllCourses handler function
exports.showAllCourses = async (req, res) => {
    try {
        // const allCourses = await Course.find({}, {
        //     courseName: true,
        //     price: true,
        //     thumbnail: true,
        //     instructor: true,
        //     ratingAndReviews: true,
        //     studentsEnrolled: true
        // })
        // .populate("instructor")
        // .exec();

        // TODO : change the below statement incrementally
        const allCourses = await Course.find({});

        return res.status(200).json({
            success: true,
            message: "Data for all courses fetched successfully",
            data: allCourses
        });

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to get all courses",
            error: error.message
        });
    }
}