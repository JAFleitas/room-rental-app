import React from "react"
import { Routes, Route } from "react-router-dom"
import Account from "../Components/Acount/acount"
import ProfileInfo from "../Components/ProfileInfo/ProfileInfo"
import Settings from "../Components/Settings/Settings"
import Favorites from "../Components/Favorites/Favorites"
import Paymentmethods from "../Components/PaymentMethods/PaymentMethods"
import MyProperties from "../Components/MyProperties/MyProperties"
import RentCard from "../Components/RentCard/RentCard"
// import RentCard from "../../../components/RentCard/RentCard"
const MenuRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProfileInfo />}></Route>
      <Route exact path="/settings" element={<Settings />}></Route>
      <Route exact path="/history" element={<RentCard/>}></Route>
      <Route exact path="/myProperties" element={<MyProperties />}></Route>
      <Route exact path="/favorites" element={<Favorites />}></Route>
      <Route exact path="/account" element={<Account />}></Route>
      <Route exact path="/payment-methods" element={<Paymentmethods />}></Route>
    </Routes>
  )
}

export default MenuRoutes
