import express from 'express';

const router =express.Router();

router.get("/send",(req,res)=>{
    res.send("send message end point")
});

router.get("/recieve",(req,res)=>{
    res.send("receive message end point")
})
export default router;