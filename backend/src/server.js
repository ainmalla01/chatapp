import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectDb from './config/db.js';
import cookieParser from "cookie-parser";

// to use cookie function
app.use(cookieParser());


dotenv.config();
const app=express();
const Port=process.env.PORT||3000;          

// middleware
app.use(express.json());
app.use(cors());

// for developyment
const __dirname=path.resolve();

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

// make ready for deployment
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

}
    
// running server
app.listen(Port,()=>{
    console.log(`server is running now at  ${Port}`);
    connectDb();
})