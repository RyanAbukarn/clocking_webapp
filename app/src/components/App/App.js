import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import routes from "../../routes/routes";
import MyNave from "../../static_components/Nav";
import React from "react";
import Login from "../Login/Login";

function App() {
  const [logout, setLogout] = useState(false);

  return localStorage.getItem("token") ? (
    <>
      <MyNave
        singout={(val) => {
          setLogout(val);
        }}
      />
      <div className="wrapper">
        <h1>Login</h1>
        <Login
          singout={(val) => {
            setLogout(val);
          }}
        />
      </div>
    </>
  ) : (
    <>
      <MyNave />
      <div className="wrapper">
        <h1>Clocking App</h1>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.component}></Route>
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
