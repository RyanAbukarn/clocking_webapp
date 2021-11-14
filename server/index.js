const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const user = require("./user/user");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3001, () => {
  console.log("app is running");
});

app.post("/api/user/user_create", (req, _) => {
  user.create_user(req, _);
});
app.post("/api/user/login", (req, res) => {
  user.login(req, res);
});
