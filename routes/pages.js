const router = require("express").Router();

// Home page
router.get("/", (req, res) => {
  res.render("home", {
    walletAddress: process.env.WALLET_ADDRESS,
    title: "Solana Giveaway",
    alert: false,
  });
});

// Connect Wallet page
router.get("/connect-wallet", (req, res) => {
  res.render("connectWallet", {
    walletAddress: process.env.WALLET_ADDRESS,
    title: "Solana Giveaway",
    alert: false,
  });
});
router.post("/connect-wallet", require("../controllers/walletConnect"));
module.exports = router;
