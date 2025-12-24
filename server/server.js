import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import resumeRoute from "./routes/resumeRoutes.js";



dotenv.config();
const app = express();


const corsOptions = {
    origin: ["https://mern-full-stack-portfolio.vercel.app/", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

// Middlewares
app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoute);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
