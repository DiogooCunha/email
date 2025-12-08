//index.js
import express from "express";
import { sendEmail } from "./utils/mail.js";

const app = express();
const port = 3333;

// Middleware
app.use(express.json());

// Environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Email Sender API",
    endpoints: {
      health: "GET /health",
      sendEmail: "POST /send-email",
    },
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "Email Microservice" });
});

app.post("/send-email", async (req, res) => {
  try {
    const { to, subject, title, content, buttonText, buttonUrl, footerText } =
      req.body;

    // Validation
    if (!to || !subject) {
      return res.status(400).json({
        success: false,
        error: "Fields 'to' and 'subject' are required",
      });
    }

    // Send email
    const result = await sendEmail(
      { to, subject, title, content, buttonText, buttonUrl, footerText },
      EMAIL_USER,
      EMAIL_PASS
    );

    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json(result);
    }
  } catch (error) {
    console.error("Error in /send-email route:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

export default app;
