import jwt from 'jsonwebtoken';

const jwtWebtoken=async (userId,res)=>{
 const token =jwt.sign({id:userId},process.env.Jwt_KEY,{
    expiresIn:'1d'
 })
   // Set cookie
  res.cookie("token", token, {
    httpOnly: true,     // prevents client-side JS access
    secure: process.env.NODE_ENV === "production", // send only over HTTPS in production
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  });
 res.status(201).json({
    message:"successfully created",
    token
 })


}