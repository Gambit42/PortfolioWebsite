const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  const { subject, name, email, message } = req.body;
  const emailMessage = `
  Hi! I'm ${name}
  With regards to ${subject},

  ${message}

  You can contact me using this email: ${email}
  `;

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: subject,
    text: emailMessage,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Email could not be sent. Please try again later.",
        error: err,
      });
    } else {
      res.status(200).json({ success: true, message: "Email sent." });
    }
  });
};
