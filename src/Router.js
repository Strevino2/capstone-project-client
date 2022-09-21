import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Login from './components/Login'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}

export default Router;