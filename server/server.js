import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import resumeRoute from "./routes/resumeRoutes.js";




dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Database
connectDB();

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoute);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
