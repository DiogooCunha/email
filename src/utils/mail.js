// mail.js
import nodemailer from "nodemailer";

const getEmailTemplate = (data) => {
  const { title, content, buttonText, buttonUrl, footerText } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title || "Email"}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 30px; background-color: #2c3e50; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                ${title || "Your Company"}
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                ${content || "Hello,<br><br>Thank you for your interest. We're here to help you with anything you need."}
              </p>
              
              ${buttonText && buttonUrl ? `
              <table role="presentation" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="${buttonUrl}" style="display: inline-block; padding: 14px 40px; background-color: #3498db; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px; font-weight: 600;">
                      ${buttonText}
                    </a>
                  </td>
                </tr>
              </table>
              ` : ""}
              
              <p style="margin: 20px 0 0 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Best regards,<br>
                <strong>The Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666666; font-size: 14px; line-height: 1.5;">
                ${footerText || "© 2024 Your Company. All rights reserved."}
              </p>
              <p style="margin: 10px 0 0 0; color: #999999; font-size: 12px;">
                You're receiving this email because you signed up for our service.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export async function sendEmail({ to, subject, title, content, buttonText, buttonUrl, footerText }, userEmail, userPassword) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userEmail,
        pass: userPassword,
      },
    });

    const htmlContent = getEmailTemplate({
      title,
      content,
      buttonText,
      buttonUrl,
      footerText,
    });

    const mailOptions = {
      from: `"Your Company" <${userEmail}>`,
      to,
      subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    
    return {
      success: true,
      messageId: info.messageId,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}