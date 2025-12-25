import express from "express";
import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Create transporter ONCE (not per request)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save to MongoDB (FAST)
    await Contact.create({ name, email, phone, message });

    // Respond IMMEDIATELY (DON'T WAIT FOR EMAIL)
    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });

    // Send email ASYNC (non-blocking)
    transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact Message",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    }).catch((err) => {
      console.error("Email error:", err.message);
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;

