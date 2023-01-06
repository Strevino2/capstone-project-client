import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Admin from "./components/Admin";
// import Menu from "./components/Menu";
import MenuCopy from "./components/MenuCopy";
// import Login from "./components/Login";
import cookie from "cookie";
import { Navigate } from "react-router-dom";

// Write checkAuth function here
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};
// Check the cookies for a cookie called "loggedIn"

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
  const { component: Component } = props;

  return checkAuth() === true ? <Component /> : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/menu" element={<MenuCopy />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/admin" element={<ProtectedRoute component={Admin} />} />
    </Routes>
  );
};

export default Router;
