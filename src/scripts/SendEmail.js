import nodemailer from "nodemailer"
// import { render } from '@react-email/render';
// import EmailTemplate from '../components/EmailTemplate';
import "dotenv/config"

const transporter = nodemailer.createTransport({
  service: process.env.REACT_APP_SERVICE,
  host: process.env.REACT_APP_HOST,
  port: process.env.REACT_APP_PORT,
  secure: false,
  auth: {
    user: process.env.REACT_APP_USER,
    pass: process.env.REACT_APP_PASS,
  },
});

const emailRecipient = "bchan9803@gmail.com"
const emailSubject = "New Article from Axios"

// const emailHtml = render(<EmailTemplate />);

const sendEmail = async () => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.REACT_APP_USER,           // sender address
    to: emailRecipient,                              // list of receivers
    subject: emailSubject,          // Subject line
    // text:
    html: `
      <p>AXIOS: Chris Christie drops out of the presidential race!</p>
    `
  });

  console.log("Message sent: %s", info.messageId);
}

try {
  sendEmail()  
} catch (error) {
  console.log(error);
}