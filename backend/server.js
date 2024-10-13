import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "../db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
const app = express();

dotenv.config();
const port = process.env.port || 5001;
// WHENEVER YOU UPDATE THIS FILE, YOU NEED TO TERMINATE THE PROCESS AND THEN RUN IT AGAIN
// Shortcut: Control + C
app.get("/", (req,res) => {
    res.send("Hello World!!")
})

app.use("/api/auth",authRoutes);

// to edit
app.listen(5001, () => {
    connectToMongoDB()
    console.log('Server Running on port 5001');
});