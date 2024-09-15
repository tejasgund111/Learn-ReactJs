# "FileUpload App" 
--------------------------------------------------------------------------------------------
# Target :
- App which upload Image/Video 
- All the media files should have to be stored on cloudinary
- Send mail after successful upload

 - In this process we are going to store the data from the client at server as well as media server
 - We are going to use "cloudinary" (a media management platform)
--------------------------------------------------------------------------------------------

# Connect to cloudinary
- We are going to use config() method to connect to cloudinary
- It needs 3 values to be passed : 1. cloud name 2. api key 3. secret key

```
        cloudinary.config({
            cloud_name : process.env.CLOUD_NAME,
            api_key : process.env.API_KEY,
            api_secret : process.env.API_SECRET,
        })
```

--------------------------------------------------------------------------------------------
# Middleware for interacting with files
- "express-fileupload"
- Simple express middleware for uploading files

--------------------------------------------------------------------------------------------
# Testing
- While testing firstly go inside the "body" section
- Then go inside the subsection "form-data"
- Now inside key add file and in the value section you have to add file

--------------------------------------------------------------------------------------------
# localFileUpload
- File fetching :
    req.files.file fetches the uploaded file from the request. This assumes the file input's name attribute in the HTML form is file
- Path Creation :
    A path where the file should be stored is created using __dirname (the current directory) and a unique timestamp (Date.now()) to avoid file name collisions. The file extension is retained by splitting file.name to grab the extension (file.name.split('.')[1]).
- Moving the file :
    file.mv(path, (err) => { ... }); moves the uploaded file to the defined path.

--------------------------------------------------------------------------------------------


