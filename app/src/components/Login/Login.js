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
  }, [isAuthenticated, navigate]);

  const submitUser = () => {
    Axios.post("http://localhost:3000/api/user/login", {
      password: password,
      email: email,
    }).then((res) => {
      localStorage.setItem("token", true);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      setIsAuthenticated(true);
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
      <button onClick={submitUser}>Log In</button>
    </div>
  );
}

export default Login;
