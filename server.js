// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Create a transporter object
// let transporter = nodemailer.createTransport({
//     service: 'gmail', // Change if using another SMTP service
//     auth: {
//         user: 'your_email@gmail.com', // Your email address
//         pass: process.env.EMAIL_PASSWORD || '', // Use an environment variable or empty if not set
//     },
// });

// // Endpoint to handle form submission
// app.post('/send-email', (req, res) => {
//     const { message } = req.body;

//     let mailOptions = {
//         from: 'your_email@gmail.com', // Sender address
//         to: 'recipient@example.com', // Change to your recipient address
//         subject: 'New Message from Contact Form',
//         text: message, // Message body
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Email sent: ' + info.response);
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
