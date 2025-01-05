import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.rout.js";
import authRoutes from "./routes/auth.rout.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => console.log(err));

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use("/api/user", userRoutes); // User routes
app.use("/api/auth", authRoutes); // Authentication routes

// Global error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
