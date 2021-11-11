const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3001, () => {
  console.log("app is running");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clocking_app",
});

app.post("/api/user", (req, res) => {
  const fullname = req.body.fullname;
  const password = req.body.password;
  const email = req.body.email;
  const inserUser =
    "INSERT INTO users (full_name, email, encrypted_password) VALUES (?, ?, ?)";
  db.query(inserUser, [fullname, password, email], (err, result) => {
    console.log(err, result);
  });
});
