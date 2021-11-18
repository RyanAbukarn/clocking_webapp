import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Navbar from "../AppNavbar/AppNavbar";
import Login from "../Login/Login";
import UserForm from "../User/UserForm";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") === "true")

  return <BrowserRouter>
    <div className="App">
      <Header />
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route exact path="/" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/sign_up" element={<UserForm />} />
        <Route path="/profile" element={<Profile isAuthenticated={isAuthenticated} />} />
      </Routes>
    </div>
  </BrowserRouter>
}

export default App;