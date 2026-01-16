 import mongoose from "mongoose"; 

 const connectDb = async() => {
    const url = process.env.MONGO_URI;

    if(!url){
        throw new Error("MONGO_URI not defined in env variables")
    }

    try{
        await mongoose.connect(url,{
            dbName: "Chatappmicroserviceapp"
        })
        console.log("connected to mongodb");
    } catch(error) {
        console.error("failed to connect to Mongodb", error);
        process.exit(1);
    }
 }

 export default connectDb;