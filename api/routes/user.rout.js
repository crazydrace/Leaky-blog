import express from "express";
import { getUserProfile } from "../controller/user.controller.js";
import authenticateUser from "../middleware/authenticate.js"; // Protects routes that require user authentication

const router = express.Router();

// Protect the /me route by requiring the user to be authenticated
router.get("/me", authenticateUser, getUserProfile);

export default router;
