require("dotenv").config(); // load environment variables
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2390;

app.set("view engine", "ejs"); // view engine
app.use(express.static("public")); // static files
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes"));

app.listen(PORT, () =>
  console.log(`Server Up and running on: http://localhost:${PORT}/`)
);
