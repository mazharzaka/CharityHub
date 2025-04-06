// import React from 'react'

import AllCampaings from "@/pages/AllCampaings"
import CampaignByid from "@/pages/CampaignByid"
import Dashboard from "@/pages/Dashboard"
import Donation from "@/pages/Donation"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Profille from "@/pages/Profille"
import { Outlet, Route, Routes } from "react-router"
import ProtectedRoute from "./protect"
import Request from "@/pages/Request"
import MyRequests from "@/components/cards/MyRequestCard"
import MyTransaction from "@/pages/MyTransaction"
import SignUp from "@/pages/SignUp"

function AppRoute() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoute requiredRole={["donor", "beneficiary", "volunteer", "admin"]}>
        <Outlet />
      </ProtectedRoute>}>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<AllCampaings />} />
        <Route path="/Myporfile" element={<Profille />} />
        <Route path="/campaign/:id" element={<CampaignByid />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/requests" element={<Request />} />
      <Route path="/MyTransaction" element={<MyTransaction />} />
      <Route path="/requests/:id" element={<MyRequests />} />
      <Route path="/donation/:id" element={<Donation />

      } />
    </Routes>
  )
}

export default AppRoute