import express from 'express';
// Router method of express helps to make different router for the function

 const router =express.Router();

router.get("/Signup",(req,res)=>{
    res.send("segnUp send point");
})
router.get("/Login",(req,res)=>{
    res.send("Login send point");
})
router.get("/Logout",(req,res)=>{
    res.send("Logout send point");
})

export default router;