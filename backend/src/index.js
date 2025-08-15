import express from "express"  //const express = require("express") both work the same 
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from 'cors'

import { connectDB } from "./lib/db.js";
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { app, server,  } from "./lib/socket.js";
import path from "path";

dotenv.config()
app.set

const PORT = process.env.PORT
const __dirname = path.resolve();


app.use(express.json({limit: '5mb'})); // should be before the prassing as the express cant phrase the json

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
})
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


//debug
// app.get("/test",(req,res)=>{
//     console.log("Requestiing ......\n")
//     res.send("<h1>Request reached </h1>")
// })
// // //debug
// // app.post("/test1",(req,res)=>{
// //     console.log("Requestiing ......\n")
// // })

if (process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));


    app.get("*", (req,res) =>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

server.listen(PORT, ()=> {
    console.log("server is running on port:"+ PORT);
    connectDB();
});