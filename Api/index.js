import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./Routes/user.route.js"
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("connected to database!!")
    });

const app = express();

app.listen(300, () => {
    console.log("Server is Running port 3000!!");
});


app.get('/api/user',userRouter);
