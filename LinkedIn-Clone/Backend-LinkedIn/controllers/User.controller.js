// write bussiness logic
const User = require("../modules/User.module");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

// controller for signup
// ->. async, await
// Store a user => mongodb user module 
// server (index.js) -> mongodb server to store user data

const signup = async(req, res) => {
    try {
        // body
        //req.body

        /*
        {
            username : "kamran",
            email : "kamran@gmail.com",
            password : "kamran123"
        }
        */ 
              const { username, email, password } = req.body;
              // step 2 
              // check whether user already exists
        if(!username || !email || !password){
            return  res.status(400).json({
                message: 'All fields are required'
            });
        }
       const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists with this email'
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // step 3 -> creating new user
        const user = new User ({
            username,
            email,
            password : hashedPassword
        })
        // {
        // username : "abc",
        // email : "abc@gmail.com",
        // password : "1234"
        // }

        // save user

        await user.save()
        return res.status(201).json({message : "User created successfully", user})
    } catch (err){
        console.log("err", err.message);
        return res.status(500).json({ message: "Server error" });
    }

}
const signin = async(req,res) => {
    try{
        const {email,password} =req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message:"User doesn't exist"});
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            return res.status(400).json({message:"Password don't match. Please try again"});
        }

        const tokenData = {
            id : user._id
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn : "1h"})

        console.log("token", token);

        res.cookie("access_token", token, {httpOnly : true})

        const loginTime = new Date();

        user.lastLogin = loginTime;

        return res.status(200).json({message:"User signed in successfully", user});
 }  
        catch(err){
        console.log("err",err.message);

        return res.status(500).json({ message: "Server error" });
    }
}
module.exports = {signup, signin}
