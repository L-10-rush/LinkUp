import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});


// import express from "express"  //const express = require("express") both work the same 
// import dotenv from "dotenv"
// import cookieParser from "cookie-parser"
// import cors from 'cors'

// import { connectDB } from "./lib/db.js";
// import authRoutes from './routes/auth.route.js';
// import messageRoutes from './routes/message.route.js';
// import { app, server,  } from "./lib/socket.js";
// import path from "path";
// import { fileURLToPath } from "url";

// dotenv.config();

// const PORT = process.env.PORT
// //const __dirname = path.resolve();

// // --- Middleware ---
// app.use(express.json({ limit: '5mb' }));
// app.use(cookieParser());
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));

// // --- API Routes ---
// // These must come BEFORE the static file serving code
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);


// //debug
// // app.get("/test",(req,res)=>{
// //     console.log("Requestiing ......\n")
// //     res.send("<h1>Request reached </h1>")
// // })
// // // //debug
// // // app.post("/test1",(req,res)=>{
// // //     console.log("Requestiing ......\n")
// // // })

// // if (process.env.NODE_ENV==="production"){
// //     app.use(express.static(path.join(__dirname, "../frontend/dist")));


// //     app.get("*", (req,res) =>{
// //         res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
// //     })
// // }

// // --- Static File Serving (for production) ---
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const frontendDistPath = path.resolve(__dirname, "../../frontend/dist");

// app.use(express.static(frontendDistPath));

// // Catch-all route to serve index.html for any other request
// app.get("*", (req, res) => {
//     res.sendFile(path.join(frontendDistPath, "index.html"));
// });


// server.listen(PORT, ()=> {
//     console.log("server is running on port:"+ PORT);
//     connectDB();
// });

