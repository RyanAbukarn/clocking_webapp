const db = require("../config");

const create_user = (req, res) => {
  const fullname = req.body.fullname;
  const password = req.body.password;
  const email = req.body.email;
  const inserUser =
    "INSERT INTO users (full_name, email, encrypted_password) VALUES (?, ?, ?)";
  db.query(inserUser, [fullname, password, email], (err, result) => {
    if (err) res.send(false);
    else res.send(true);
  });
};
const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const login =
    "SELECT * FROM users WHERE (email, encrypted_password) = (?, ?)";
  db.query(login, [password, email], (err, result) => {
    console.log(err, result);
    if (err) res.send(false);
    else res.send(true);
  });
};
module.exports = { create_user, login };
