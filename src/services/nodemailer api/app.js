import express from 'express';
import nodemailer from 'nodemailer';
const app = express();

app.use(express.json());

const port = 3000;

app.post('/api/email', async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    post: 587,
    secure: false,
    auth: {
      user: "official449studios@gmail.com",
      pass: "lquv vkoh utjx ukty "
    }
  });
  let message = {
    "from": "official449studios@gmail.com",
    "to": "undefined",
    "subject": "undefined subject",
    "text": "undefined text",
  };

  const { emailRecipient, emailSubject, emailText } = req.body;

  message.to = emailRecipient;
  message.subject = emailSubject;
  message.text = emailText;

  const r = await transporter.sendMail(message);

  try {
    res.send(r);
  } catch (error) {
    console.log(error);
  }
  
});

app.listen(port, () => {
  console.log('express is listening at port ', port);
});
