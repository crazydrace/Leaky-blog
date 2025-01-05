import express from "express";
import { signup, signin, google } from "../controller/auth.controller.js";

const router = express.Router();

// Routes for user authentication
router.post("/signup", signup); // Route to handle user signup
router.post("/signin", signin); // Route to handle user signin
router.post("/google", google); // Route to handle Google sign-in

export default router;
