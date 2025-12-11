import { getAllEmails, getSingleEmail, saveEmail } from "../models/email.models.js";
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
    const senderEmail = process.env.EMAIL_USER;
    const senderPass = process.env.EMAIL_PASS;

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
      senderEmail,
      senderPass
    );

    // {
    //  success,
    //  messageId,
    //  message,
    // }
    console.log(result);

    if (result.success) {
      const slq = saveEmail({
        messageId: result.messageId,
        senderEmail,
        to,
        subject,
        content,
      });
      console.log(slq);
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

export const emailLogs = (req, res) => {
  try {
    const senderEmail = process.env.EMAIL_USER;

    const result = getAllEmails(senderEmail);

    console.log(result);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in /logs route:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

export const singleEmailLog = (req, res) => {
  try {
    const senderEmail = process.env.EMAIL_USER;
    const id = req.params.id;

    const result = getSingleEmail(senderEmail, id);
    console.log(result);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in /logs/:id route:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};
