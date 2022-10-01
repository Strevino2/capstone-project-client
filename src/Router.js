import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Login from './components/Login'
import cookie from 'cookie'
import { Navigate } from "react-router-dom"

// Write checkAuth function here
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    console.log("COOKIE", cookie)
    console.log({ cookie })
    return cookies["loggedIn"] ? true : false;
}
// Check the cookies for a cookie called "loggedIn"



// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
    const {component: Component} = props;

    return checkAuth() === true ? <Component /> : <Navigate to="/login" />
}

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/login" element={<Admin />} /> */}
            <Route path="/admin" element={<ProtectedRoute component={Admin} />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}

export default Router;