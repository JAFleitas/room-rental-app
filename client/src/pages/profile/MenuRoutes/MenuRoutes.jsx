import React from "react"
import { Routes, Route } from "react-router-dom"
import Account from "../Components/Acount/Acount"
import ProfileInfo from "../Components/ProfileInfo/ProfileInfo"
import Settings from "../Components/Settings/Settings"
import History from "../Components/History/History"
import Favorites from "../Components/Favorites/Favorites"
const MenuRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProfileInfo />}></Route>

      <Route exact path="/settings" element={<Settings />}></Route>
      <Route exact path="/history" element={<History />}></Route>
      <Route exact path="/favorites" element={<Favorites />}></Route>

      <Route exact path="/account" element={<Account/>}></Route>


      <Route exact path="/properties" element={<h1>properties</h1>}></Route>
    </Routes>
  )
}

export default MenuRoutes
