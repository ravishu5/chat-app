import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import {createClient} from 'redis'
import userRoutes from './routes/user.js'
import { connectRabbitMQ } from './config/rabbitmq.js';

dotenv.config();
// connect to mongoDB
connectDb();
// connect to RabbitMQ
connectRabbitMQ();

// redis connection
if(!process.env.REDIS_URL){
    throw new Error("REDIS_URL is not defined in env variables");
}

export const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient
    .connect()
    .then(()=> console.log("connected to redis"))
    .catch(console.error);


// app
const app = express();
app.use(express.json());

app.use("/api/v1", userRoutes);

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
});