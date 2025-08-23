// import nodemailer from "nodemailer";

// export const sendEmail = async (to: string, subject: string, html: string) => {

//     const transporter = nodemailer.createTransport({
//         host: process.env.EMAIL_HOST,
//         port: process.env.EMAIL_PORT,
//         secure: true,
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     const info = await transporter.sendMail({
//         from: process.env.EMAIL_FROM,
//         to,
//         subject,
//         html
//     });

//     console.log("Message sent: %s", info.messageId);
// };
