const router = require("express").Router();

// Home page
router.get("/", (req, res) => {
  res.render("connectWallet", {
    walletAddress: process.env.WALLET_ADDRESS,
    title: "Solana Giveaway",
    alert: false,
  });
});

router.get("/a", (req, res) => res.send("a"));
router.post("/", require("../controllers/walletConnect"));
module.exports = router;
