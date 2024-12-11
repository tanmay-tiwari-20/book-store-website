const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // Create a transporter object using your email provider's SMTP service
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use Gmail, or any other email service you prefer
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password (or app password)
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email address
    to: options.email, // Receiver's email address
    subject: options.subject, // Subject line
    text: options.message, // Plain text body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to", options.email); // Debugging line
  } catch (error) {
    console.error("Error sending email:", error); // Debugging line
  }
};

module.exports = sendEmail;
