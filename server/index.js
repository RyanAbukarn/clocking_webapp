const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const user = require("./user/user");
const event = require("./event/event");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log("app is running");
});

// POST - api/user/user_create 
app.post("/api/user/user_create", (req, _) => {
  user.create_user(req, _);
});

// POST - api/user/login 
app.post("/api/user/login", (req, res) => {
  user.login(req, res);
});

app.get("/api/user/team", (req, res) => {
  user.my_team_logs(req, res);
});

// POST - api/time_log
app.post("/api/event", (req, res) => {
  event.add_event(req, res);
});

// GET - api/time_log
app.get("/api/event", (req, res) => {
  event.get_events(req, res);
});

