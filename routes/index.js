const router = require("express").Router();

router.use("/", require("./pages"));

router.get("*", (req, res) => {
  res.status(404).render("error");
});

module.exports = router;
