import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "../db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { app, server } from "./socket/socket.js";

const port = process.env.port || 5001;


dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users", userRoutes);

// This will output a "Cannot GET" message if it is commented out. 
// app.get("/", (req,res) => {
//     res.send("Hello World!!")
// })

// to edit
server.listen(5001, () => {
    connectToMongoDB()
    console.log('Server Running on port 5001');
});