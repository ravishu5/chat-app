import { publishToQueue } from "../config/rabbitmq.js";
import TryCatch from "../config/TryCatch.js";
import { redisClient } from "../index.js";

export const loginUser = TryCatch(async(req,res) => {
    const {email}= req.body;

    const rateLimitKey = `otp:ratelimit:${email}`;

    // within 1 minute, decline otp request
    const rateLimit = await redisClient.get(rateLimitKey);
    if(rateLimit){
        res.status(429).json({
            message: "Too many request. please wait before requesting new otp."
        });
        return;
    }

    // create 6-digit otp
    const otp = Math.floor(100000 + Math.random()*900000).toString();

    // store this otp in redis for 5 mins (300 secs)
    const otpKey = `otp:${email}`;
    await redisClient.set(otpKey, otp, { EX: 300 });

    // set rateLimit in redis
    await redisClient.set(rateLimitKey, "true", { EX: 60 });

    // sending otp message through rabbitMQ
    const message = {
        to: email,
        subject: "Your otp code",
        body: `Your OTP is : ${otp}. It is Valid for 5 minutes.`
    };
    
    await publishToQueue("send-otp", message);
    res.status(200).json({
        message: "OTP sent to your e-mail"
    })
})