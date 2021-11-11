import React, { useState, userEffect } from "react";
import Axios from "axios";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitUser = () => {
    Axios.post("http://localhost:3001/api/user", {
      password: password,
      email: email,
    }).then();
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
