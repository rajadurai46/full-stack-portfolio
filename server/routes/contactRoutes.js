import express from "express";
import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save to MongoDB
    await Contact.create({ name, email, phone, message });

    // Email Notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER,
      subject: "Portfolio Contact Form",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;
