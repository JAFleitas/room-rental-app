import React from "react"
import { Routes, Route } from "react-router-dom"
import ProfileInfo from "../Components/ProfileInfo/ProfileInfo"
import Settings from "../Components/Settings/Settings"
const MenuRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProfileInfo />}></Route>
      <Route exact path="/settings" element={<Settings/>}></Route>
      <Route exact path="/history" element={<h1>history</h1>}></Route>
      <Route exact path="/favorites" element={<h1>favorites</h1>}></Route>
      <Route exact path="/properties" element={<h1>properties</h1>}></Route>
    </Routes>
  )
}

export default MenuRoutes
