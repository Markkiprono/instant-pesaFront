const nodeMailer = require("nodemailer");
const { emailPassKey } = require("../services/services");

const sendMail = async (options) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "Instantpesakenya1@gmail.com",
      pass: emailPassKey,
    },
  });
  const mailOptions = {
    from: "Instantpesakenya1@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
module.exports = sendMail;
