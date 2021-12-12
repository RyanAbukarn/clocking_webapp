const db = require("../config");

const create_user = (req, res) => {
  const fullname = req.body.fullname;
  const password = req.body.password;
  const email = req.body.email;
  const inserUser =
    "INSERT INTO users (full_name, email, encrypted_password) VALUES (?, ?, ?)";
  db.query(inserUser, [fullname, email, password], (err, result) => {
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
    console.log(result);
    if (result.length == 0)
      return res.status(404).send({ message: "NOT FOUND" });
    else res.send(result[0]);
  });
};

const my_team_logs = (req, res) => {
  const userID = req.query.userID;
  const getMyTeamLogs = `
        SELECT users.full_name, time_logs.clock_in, time_logs.clock_out
        FROM users
        JOIN time_logs on users.id = time_logs.user_id
        JOIN user_teams on users.id = user_teams.user_id
        WHERE user_teams.team_id = (SELECT team_id FROM user_teams WHERE user_id = (?));
   `;
  db.query(getMyTeamLogs, userID, (err, result) => {
    console.log(result);
    if (result.length == 0)
      return res.status(404).send({ message: "NOT FOUND" });
    else res.send(result);
  });
};
module.exports = { create_user, login, my_team_logs };
