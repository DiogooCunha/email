import { sendEmail } from "../utils/mail.js";

export const email = (req, res) => {
  res.json({
    message: "Email Sender API",
    endpoints: {
      health: "GET /health",
      sendEmail: "POST /send-email",
    },
  });
};

export const emailHealth = (req, res) => {
  res.json({ status: "OK", service: "Email Microservice" });
};

export const emailSend = async (req, res) => {
  try {
    const { to, subject, title, content, buttonText, buttonUrl, footerText } =
      req.body;

    //validation
    if (!to || !subject) {
      return res.status(400).json({
        success: false,
        error: "Fields 'to' and 'subject' are required",
      });
    }

    // send email
    const result = await sendEmail(
      { to, subject, title, content, buttonText, buttonUrl, footerText },
      process.env.EMAIL_USER,
      process.env.EMAIL_PASS
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
};
