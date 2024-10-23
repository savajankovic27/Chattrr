import express from "express";
import dotenv from "dotenv";
import {login, logout, signup} from "../controllers/auth.controller.js";

const router  = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;