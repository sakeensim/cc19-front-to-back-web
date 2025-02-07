import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import User from '../pages/user/User'
import Notfound from '../pages/Notfound'
import Register1 from '../pages/auth/Register1'

function AppRoutes() {
  return (
    <>
        <Routes>

            {/* Public*/}
            <Route path = "/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path ="about" element={<About/>}/>
                <Route path ="register" element={<Register1/>}/>
                <Route path ="login" element ={<Login/>}/>
            </Route>

            {/* private [USER]*/}
            <Route path = "user" element ={<Layout/>}>
                <Route index element ={<User />}/>
            </Route>

            {/* private [ADMIN]*/}
            <Route path = "admin" element ={<Layout />}>
                <Route index element={<Dashboard/>}/>
                <Route path ="manage" element={<Manage/>}/>
            </Route>

            <Route path ="*" element={<Notfound/>}/>

        </Routes>
    </>
  )
}

export default AppRoutes