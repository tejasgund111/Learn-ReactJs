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
# Cloudinary Upload
- The cloudinary.uploader.upload() method is used to upload files (images, videos, etc.) to Cloudinary. It accepts the file path, options for customization (e.g., folder, quality, transformations), and returns a promise with the uploaded file's metadata.
- Example :
```
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'my-folder',
        quality: 'auto',
        resource_type: 'auto'
    });

```
- This will automatically detect the file type, optimize it, and upload it to the specified folder in Cloudinary.
--------------------------------------------------------------------------------------------
# localFileUpload
- File fetching :
    req.files.file fetches the uploaded file from the request. This assumes the file input's name attribute in the HTML form is file
- Path Creation :
    A path where the file should be stored is created using __dirname (the current directory) and a unique timestamp (Date.now()) to avoid file name collisions. The file extension is retained by splitting file.name to grab the extension (file.name.split('.')[1]).
- Moving the file :
    file.mv(path, (err) => { ... }); moves the uploaded file to the defined path.

--------------------------------------------------------------------------------------------
# imageUpload
- Steps :
    1. Fetch the data
    2. Perform validation for supported format
    3. If file format is not supported return response
    4. If supported, then upload to cloudinary
    5. Save the entry in DB
    6. Return successful response

--------------------------------------------------------------------------------------------
# videoUpload
- Steps : (same as imageUpload)
    1. Fetch the data
    2. Perform validation for supported format
    3. If file format is not supported return response
    4. If supported, then upload to cloudinary (file formats >> mp4 and mov)
    5. Save the entry in DB
    6. Return successful response

--------------------------------------------------------------------------------------------
# imageSizeReducer
- Steps : 
    1. Fetch the data
    2. Perform validation
    3. If file format is not supported then return response
    4. If supported, then upload to cloudinary
    - we have to add one more field, 'quality'
    5. Save the entry in DB
    6. Return successful response
--------------------------------------------------------------------------------------------
# pre and post middleware
- Pre middleware functions are executed one after another, when each middleware calls next.
- post middleware are executed after the hooked method and all of its pre middleware have completed.
- fileSchema.post("save") function looks good for sending an email notification when a file is uploaded.
- 
--------------------------------------------------------------------------------------------
# Mail functionality
- Intent : Whenever there is creation of entry in DB, send a mail to the user.
- Firstly we have to create transporter and then use that transporter to send the mail.



