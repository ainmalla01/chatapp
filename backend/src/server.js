import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'


dotenv.config();
const app=express();
const Port=process.env.PORT||3000;          

// middleware
app.use(express.json());
app.use(cors());



app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
    

app.listen(Port,()=>{
    console.log(`server is running now at  ${Port}`);
})