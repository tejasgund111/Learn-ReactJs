"AuthApp"
--------------------------------------------------------------------------------------
Here we are going to learn about Authentication and Authorization
1. Implement signup and login functionalities
2. How to hash passwords
--------------------------------------------------------------------------------------
We are using a library called "bcrypt"
It is a library to help you hashes passwords
--------------------------------------------------------------------------------------

secure password >>

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
Explanation :
Hashing the Password:
await bcrypt.hash(password, 10): This hashes the password with 10 salt rounds, which is a common practice to balance between security and performance.
10 salt rounds is used as a good practice
--------------------------------------------------------------------------------------
helloo
--------------------------------------------------------------------------------------