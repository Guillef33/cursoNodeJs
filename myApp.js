const express = require("express");
const PORT = process.env.PORT || 3050;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

// app.use(bodyParser.json());
app.use(express.json());

//Route
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server running on por ${PORT}`);
  console.log(`Hello World`);
});
