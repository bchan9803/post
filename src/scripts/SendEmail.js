// const nodemailer = require("nodemailer");

import nodemailer from "nodemailer"
import "dotenv/config"

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.REACT_APP_USER,
    pass: process.env.REACT_APP_PASSWORD,
  },
});

async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.REACT_APP_USER, // sender address
    to: "bchan9803@gmail.com", // list of receivers
    subject: "test", // Subject line
    text: `
      Hi,
      \tHere is a new article from Axios
      Sincerely,
      the 449 Studios Team :)
    `,
    html: `
      <h1>Hi, </h1>
      <h3>\tHere is a new article from Axios</h3>
      <h5>Sincerely,</h5>
      <h6>the 449 Studios Team :)</h6>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

// export const mail = {
//   // send mail with defined transport object
//   from: {
//     name: "449 Studios",
//     // address: process.env.REACT_APP_USER,
//     address: "official449studios@gmail.com"
//   },
//   to: "bchan9803@gmail.com", // recipient
//   subject: "Brand New Article From Blank", // Subject line
//   text: "hi testing 123", // plain text body
//   html: "<b>Hello world?</b>", // html body
// }



// export const sendMail = async (transporter, mail) => {
//   // console.log('env-user: ', process.env.REACT_APP_USER);
//   // console.log('env-pass: ', process.env.REACT_APP_PASS);
//   try {
//     await transporter.sendMail(mail)
//     console.log('Email successfully sent!');
//   } catch (e) {
//     console.error(e)
//   }
// }


// sendMail(transporter, mail)