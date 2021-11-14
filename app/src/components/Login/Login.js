import React, { useState, useContext } from "react";
import Axios from "axios";
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitUser = ({ singout }) => {
    Axios.post("http://localhost:3001/api/user/login", {
      password: password,
      email: email,
    }).then((res) => {
      singout(true);
      localStorage.setItem("token", true);
    });
  };
  return (
    <div className="App">
      <label>email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={submitUser}>Create</button>
    </div>
  );
}

export default Login;
