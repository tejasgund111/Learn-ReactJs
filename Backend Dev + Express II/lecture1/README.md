# "AuthApp"
--------------------------------------------------------------------------------------
# What we have implemented here :
- Backend project with the following functionalities :
1. AuthN & AuthZ system for users with JWT and bcrypt password encryption
2. Protected route for student and admin with middleware function to check JWT and role
3. Database connection with mongodb using monsoose
4. Express application using middleware function 
5. User model definition for mongoose to set the field for user document in mongodb
--------------------------------------------------------------------------------------
# Here we are going to learn about :
- Authentication and Authorization
1. Implement signup and login functionalities
2. How to hash passwords ? 
3. How to Deal with jwt tokens and cookies ? 
--------------------------------------------------------------------------------------
We are using a library called "bcrypt"
It is a library to help you hashes passwords
--------------------------------------------------------------------------------------
secure password >>

```
let hashedPassword;
try{
    // Hash the password with a salt rounds of 10
    hashedPassword = await bcrypt.hash(password, 10)
}
catch(error){
    // Send error response if hashing fails
    return res.status(500).json({
        success : false,
        message: "Error while hasing password",
    });
}
```

Explanation :

Hashing the Password:

```await bcrypt.hash(password, 10) ```


This hashes the password with 10 salt rounds, which is a common practice to balance between security and performance.
10 salt rounds is used as a good practice

--------------------------------------------------------------------------------------

# During Signup 
- Firstly we have to fetch the details from the request's body
- With the help of email we are checking if the user is already present in db or not
- We are going to hash the password with the help of "bcrypt.hash()" method
- The hashedPassword will be stored in the form of encrypted string
- we have to create entry for user, including information : username, email, password, and role, here the password used is hashedPassword for storing in the db
- then we will return the response, including with user's data

--------------------------------------------------------------------------------------
# During LogIn
- Firstly fetch out email and password from request's body
- check for email and password fields are filled or not
- We will find that user with help of email
- check if user exists or not
- Now we have to compare the password entered by user and the user's hashed password that is stored in the db, if they both are equal then we will create a JWT token and pass its value to user's data 
- At last we will return the response


- Whenever a user logs in then the server creates a JWT token and sends it to the client as response, then the next tasks like authenticity and authorization carried out with the help of that tokens, which is enclosing the user's information.

--------------------------------------------------------------------------------------
```
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET); // data inside token can be decoded like this
            console.log(payload); // it incudes email, id, role
            // why this ? -> we have stored the payload inside the req.user
            req.user = payload;
        }
        catch(err){
            return res.status(401).json({
                success : false,
                message : "Token is invalid"
            });
        }
```
Why Storing Payload in req.user is Useful:

Storing the payload in req.user allows subsequent middleware and routes to easily access the authenticated user's information without needing to decode the token again.

When you set req.user in one middleware (e.g., auth), it is passed along with the req object to the next middleware in the chain.
After setting req.user, you call next() to pass control to the next middleware function.

req Object Lifecycle: The req object is shared along the middleware chain for a specific request, so any modifications (like setting req.user) are preserved as it moves through the chain.

--------------------------------------------------------------------------------------
# Go throuth docs for :
- jst.sign()
- jwt.verify()
- bcrypt.compare()
--------------------------------------------------------------------------------------
