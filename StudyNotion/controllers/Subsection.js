const Subsection = require("../models/Subsection");
const Section = require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

// create subsection
exports.createSubsection = async (req, res) => {
    try {
        // fetch data from req body
        const { sectionId, title, timeDuration, description } = req.body;
        // extract file/video
        const video = req.files.videoFile;
        // validation
        if (!sectionId || !title || !timeDuration || !description || !video) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        // upload video to cloudinary
        const uploadDetails = await uploadImageToCloudinary(video, process.env.FOLDER_NAME);
        // create a subsection
        const SubSectionDetails = await Subsection.create({
            title: title,
            timeDuration: timeDuration,
            description: description,
            videoUrl: uploadDetails.secure_url
        });

        // update section with this subsection onjectId
        const updatedSection = await Section.findByIdAndUpdate(sectionId,
            {
                $push: { subSection: SubSectionDetails._id }
            },
            { new: true }
        );
        // HW : log updatedSection here after adding populate query
        // return response
        return res.status(200).json({
            success: true,
            message: "Sub Section created successfully",
            updatedSection
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while creating Subsection",
            error: error.message
        });
    }
}

// HW : updateSubSection
exports.updateSubsection = async (req, res) => {
    try {
        // fetch data
        const { subSectionId, title, timeDuration, description } = req.body;
        // fetch file
        const video = req.files.videoFile;
        // validation
        if (!subSectionId || !title || !timeDuration || !description || !video) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        // TODO : add check here -> user might not want to update the file here
        const updateData = {
            title: title,
            timeDuration: timeDuration,
            description: description,
        };

        if (video) {
            // upload video to cloudinary
            const uploadDetails = await uploadImageToCloudinary(video, process.env.FOLDER_NAME);
            updateData.videoUrl = uploadDetails.secure_url;
        }
        // update data
        const subSection = await Subsection.findByIdAndUpdate(subSectionId, updateData, { new: true });

        // return response
        return res.status(200).json({
            success: true,
            message: "Subsection updated successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while updating Subsection",
            error: error.message
        });
    }
}


// HW : deleteSubSection
exports.deleteSubsection = async (req, res) => {
    try {
        // get ID -> assume we are sending id in params
        const { subSectionId } = req.params;
        // delete -> use findByIdAndDelete
        await Subsection.findByIdAndDelete(subSectionId);

        // return response
        return res.status(200).json({
            success: true,
            message: "Sub Section deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting Subsection",
            error: error.message
        });
    }
}
