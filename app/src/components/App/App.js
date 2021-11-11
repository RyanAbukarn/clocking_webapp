import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "../User/UserForm";
import Login from "../Login/Login";
function App() {
  const [token, setToken] = useState("");

  return (
    <div className="wrapper">
      <h1>Clocking App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/sign_in" element={<UserForm />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
