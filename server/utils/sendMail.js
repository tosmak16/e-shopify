import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
/**
 * @description it handles sending email notification
 *
 * @param {string} token
 *
 * @param {string} emailMessage
 *
 * @returns {object} message
 */
export const sendMail = (emailMessage, customerEmail, username) => {
  nodemailer.createTestAccount(() => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.AMIN_MAIL_USER, // app bot email
        pass: process.env.ADMIN_MAIL_PASS // app bot password
      }
    });
    // setup email data with unicode symbols
    const mailOptions = {
      from: '<tosmakbadguy31@gmail.com>', // sender address
      to: `${customerEmail}`, // list of receivers
      subject: 'E-shopify order Notification', // Subject line
      html: `<div style="background-color: #fbfbd287">
              <p> 
              <strong>E-SHOPIFY</strong>
              </p>
              <p> 
              <strong>Hello ${username},</strong>
              </p>
              <p>
              ${emailMessage.toLowerCase()}
              </p>
              </div>` // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return error;
      }

      return `Message sent: %s${info.messageId}`;
      // Example Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    });
  });
};
export default sendMail;
