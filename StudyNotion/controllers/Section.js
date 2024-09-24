const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
    try {
        // data fetch 
        const { sectionName, courseId } = req.body;
        // validation
        if (!sectionName || !courseId) {
            return res.status(400).json({
                success: false,
                message: "Missing Properties"
            });
        }
        // create section
        const newSection = await Section.create({ sectionName });
        // update Course with section ObjectID
        const updatedCourseDetails = await Course.findByIdAndUpdate(courseId,
            {
                $push: { courseContent: newSection._id }
            },
            { new: true }
        );
        // TODO : use populate to replace sections, subsections both in updatedCourseDetails
        // return response
        return res.status(200).json({
            success: true,
            message: "Section created successfully",
            updatedCourseDetails
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating section",
            error: error.message
        });
    }
}

exports.updateSection = async (req, res) => {
    try {
        // data input
        const { sectionName, sectionId } = req.body;
        // validation
        if (!sectionName || !sectionId) {
            return res.status(400).json({
                success: false,
                message: "Missing Properties"
            });
        }
        // update data -> we don't have to update in course model as the ID remains same, only data is changing for section
        const section = await Section.findByIdAndUpdate(sectionId, { sectionName }, { new: true });
        // return response
        return res.status(200).json({
            success: true,
            message: "Section updated successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while updating section",
            error: error.message
        });
    }
}

exports.deleteSection = async (req, res) => {
    try{
        // get ID -> assume we are sending id in params
        const {sectionId} = req.params;
        // delete -> use findByIdAndDelete
        await Section.findByIdAndDelete(sectionId);

        // return response
        return res.status(200).json({
            success: true,
            message: "Section deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting section",
            error: error.message
        });
    }
}