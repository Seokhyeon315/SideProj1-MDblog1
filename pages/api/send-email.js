// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   //req.body: is an object containing the body parsed by content-type, or null if no body was sent.
//   const { name, email, subject, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "",
//       pass: "",
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "",
//     subject: subject,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Email failed to send. " });
//   }
// }
