import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "../db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();
const port = process.env.port || 5001;


dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);


// This will output a "Cannot GET" message if it is commented out. 
// app.get("/", (req,res) => {
//     res.send("Hello World!!")
// })

// to edit
app.listen(5001, () => {
    connectToMongoDB()
    console.log('Server Running on port 5001');
});