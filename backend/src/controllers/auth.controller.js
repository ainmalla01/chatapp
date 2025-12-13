import user from '../models/User.js';
import bcrypt from 'bcrypt';
import generatingToken from '../middlewares/jwtToken.js'
export const signUp= async (req,res)=>{
    try{

    
   const {fullName,email,password}=req.body;

//    conditions
// empty check
if(!email||!fullName||!password){
    res.status(400).json({
        message:"Fill all the fields"
    })
}
// password length check
if(password.length<8){
     res.status(400).json({
        message:"password should be more than 8"
    })
}
// checking strong passowrd
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(!strongPasswordRegex.test(password)){
      res.status(400).json({
        message:"password strong required"
    })
}
// vail email check
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!regex.test(email)){
    res.status(400).json({
        message:"email is not valid"
    })
}
// existing email check
const email_existing=await user.findOne({email})

if(email_existing){
    res.status(400).json({
        message:"email already exist"
    })
}
// hash password 
const hashpassword= await bcrypt.hash(password,10);
const newUser=await user.create({
    fullName,
    email,
    password:hashpassword
})

   res.status(201).json({
      message: "User registered successfully",
      newUser
    });
    await generatingToken(newUser._id,res)
    await emailsending();
}
catch(error){
    res.status(500).json({
        message:"sever error"
    })
}



}



export const logIn =(req,res)=>{
    res.send("Login send point");}





export const logOut =(req,res)=>{
    res.send("LogOut send point");}
