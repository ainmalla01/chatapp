import express from 'express';
import { signUp,logIn,logOut } from '../controllers/auth.controller';

// Router method of express helps to make different router for the function

 const router =express.Router();

router.post("/Signup",signUp)

router.get("/Login",logIn)

router.get("/Logout",logOut)

export default router;