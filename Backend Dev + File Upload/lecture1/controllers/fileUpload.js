const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

// localFileUpload -> handler function
exports.localFileUpload = async (req, res) => {
    try {
        // fetched file from request
        const file = req.files.file;
        console.log("file is here >> ", file);

        // create path where file needs to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`; // we are going to store the file at this path
        console.log("path >> ", path);

        // moving the file to the defined path
        file.mv(path, (err) => {
            console.log(err);
        })

        res.json({
            success: true,
            message: "Local File Uploaded Successfully"
        });
    }
    catch (error) {
        console.log(error);
    }
}

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder };

    if(quality){
        options.quality = quality;
    }
    options.resource_type = "auto"; // setting type of the file to auto for automatically detecting 'image' or 'video'
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// imageUpload handler
exports.imageUpload = async (req, res) => {
    try {
        // data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log("file >> ", file);

        // validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType);

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported"
            });
        }

        // file format supported hai
        const response = await uploadFileToCloudinary(file, "Data");
        console.log("response >> ", response);

        // save entry in db
        const fileData = await File.create({
            name, tags, email, imageUrl: response.secure_url
        });


        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image uploaded successfully"
        });


    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

// videoUpload
exports.videoUpload = async (req, res) => {
    try {
        // data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;

        // validation
        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("filetype >> ", fileType);

        // TODO : add a upper limit of 5 mb for video
        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported"
            });
        }

        // file format supported hai
        console.log("uploading...");
        const response = await uploadFileToCloudinary(file, "Data");
        console.log("response >> ", response);

        // save entry in db
        const fileData = await File.create({
            name, tags, email, imageUrl: response.secure_url
        });


        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Video uploaded successfully"
        });


    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

// imageSizeReducer
exports.imageSizeReducer = async (req, res) => {
    try {
        // data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log("file >> ", file);

        // validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType);

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported"
            });
        }

        // file format supported hai
        const response = await uploadFileToCloudinary(file, "Data", 50);
        console.log("response >> ", response);

        // save entry in db
        const fileData = await File.create({
            name, tags, email, imageUrl: response.secure_url
        });


        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image uploaded successfully"
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}