import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated, isAuthenticated }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated])

  const submitUser = () => {
    Axios.post("http://localhost:3000/api/user/login", {
      password: password,
      email: email,
    }).then((res) => {
      localStorage.setItem("token", true);
      setIsAuthenticated(true)
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
