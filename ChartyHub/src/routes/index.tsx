// import React from 'react'

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import { Route, Routes } from "react-router"

function AppRoute() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default AppRoute