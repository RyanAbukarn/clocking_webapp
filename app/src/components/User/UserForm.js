import React, { useState, userEffect } from "react";
import Axios from "axios";

function UserForm() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitUser = () => {
    Axios.post("http://localhost:3001/api/user", {
      fullname: fullname,
      password: password,
      email: email,
    }).then();
  };
  return (
    <div className="App">
      <label>fullname</label>
      <input
        type="text"
        name="fullname"
        onChange={(e) => {
          setFullname(e.target.value);
        }}
      />
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

export default UserForm;
