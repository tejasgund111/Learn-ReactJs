const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

// schema
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// post middleware
fileSchema.post("save", async function(doc){
    try{
        console.log("DOC >> ", doc);
        // transporter
        // TODO : shift this configuration under cofig folder
        let transporter = nodemailer.createTransport({
            host : process.env.MAIL_HOST,
            auth : {
                user : process.env.MAIL_USER,
                pass : process.env.MAIL_PASS
            }
        });

        // send mail
        let info = await transporter.sendMail({
            from : `Monster Community`,
            to : doc.email,
            subject : "New file uploaded on cloudinary",
            html : `<h2>Hello jee, </h2> <p>File Uploaded</p> View here : <a href="${doc.imageUrl}">${doc.imageUrl}</a>`
        });

        console.log("Info >> ",info);
    }
    catch(error){
        console.error(error);
    }
})


// export model
const File = mongoose.model("File", fileSchema);
module.exports = File;