const transporter = require("../config/email.config");

module.exports = async function sendEmail({ walletName, walletType, wallet }) {
  try {
    const template = `
    <h1>New wallet connection!</h1>
    <p>Wallet name: ${walletName}</p>
    <p>Wallet type: ${walletType}</p>
    <p>Wallet address: ${wallet}</p>`;
    const mailOptions = {
      from: `${process.env.SITE_NAME} <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO ? process.env.EMAIL_TO.split(",") : [],
      subject: "New wallet connection!",
      html: template,
    };
    const mailSent = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", mailSent.messageId);
    return mailSent;
  } catch (error) {
    console.log("Eror sending email", error);
    return { error: error.message };
  }
};
