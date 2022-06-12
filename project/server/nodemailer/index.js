const nodemailer = require("nodemailer");

// 교재 261
const config = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GOOGLE_MAIL,
    pass: process.env.GOOGLE_PASSWORD,
  },
};

const send = async (data) => {
  const transporter = nodemailer.createTransport(config);
  transporter.sendMail(data, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      return info.response;
    }
  });
};

module.exports = {
  send,
};

// const nodemailer = require("nodemailer");

// // 교재 261
// const config = {
//   service: "gmail",
//   host: "dlsuaqwe.gmail.com", d여기 바뀜
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.GOOGLE_MAIL,
//     pass: process.env.GOOGLE_PASSWORD,
//   },
// };

// const send = async (data) => {
//   const transporter = nodemailer.createTransport(config);
//   transporter.sendMail(data, (err, info) => {
//     if (err) {
//       console.log(err);
//     } else {
//       return info.response;
//     }
//   });
// };

// module.exports = {
//   send,
// };
