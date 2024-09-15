const File = require("../models/File");

// localFileUpload -> handler function
exports.localFileUpload = async(req, res ) => {
    try{
        // fetched file from request
        const file = req.files.file;
        console.log("file is here >> ",file);

        // create path where file needs to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`; // we are going to store the file at this path
        console.log("path >> ", path);

        // moving the file to the defined path
        file.mv(path, (err) => {
            console.log(err);
        })

        res.json({
            success : true,
            message : "Local File Uploaded Successfully"
        });
    }
    catch(error){
        console.log(error);
    }
}