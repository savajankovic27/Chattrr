import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import getUsersForSidebar from "../controllers/user.controller.js";

const router = express.Router();

//setting up the layout for the UI
router.get("/",protectRoute, getUsersForSidebar);


export default router;



