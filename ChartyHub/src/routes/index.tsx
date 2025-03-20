// import React from 'react'

import AllCampaings from "@/pages/AllCampaings"
import CampaignByid from "@/pages/CampaignByid"
import Donation from "@/pages/Donation"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import { Route, Routes } from "react-router"

function AppRoute() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/campaigns" element={<AllCampaings/>}/>
        <Route path="/campaign/:id" element={<CampaignByid/>}/>
        <Route path="/donation/:id" element={<Donation/>}/>
    </Routes>
  )
}

export default AppRoute