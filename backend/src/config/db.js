import mongoose from 'mongoose';

const connectDb=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_DB);
        console.log(conn)
        console.log("mongodb connected");
    }catch(error){
        console.error("error connecting to mongodb",error)
        process.exit(0);

    }
}

export default connectDb;