import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import resumeRoute from "./routes/resumeRoutes.js";



dotenv.config();
const app = express();



app.use(cors());

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "*"
    );
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.options("*", cors());



// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoute);

// Database
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
