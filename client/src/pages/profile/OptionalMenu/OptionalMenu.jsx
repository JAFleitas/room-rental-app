import React from "react"
import { SubMenu } from "./styled"
import { Routes, Route } from "react-router-dom"
import InfoSubMenu from "../Components/InfoSubMenu"
const OptionalMenu = () => {
  return (
    <Routes>
      <Route exact path="/" element={<InfoSubMenu />}></Route>
      <Route exact path="/settings" element={<h1>settings</h1>}></Route>
      <Route exact path="/history" element={<h1>history</h1>}></Route>
      <Route exact path="/favorites" element={<h1>favorites</h1>}></Route>
      <Route exact path="/properties" element={<h1>properties</h1>}></Route>
    </Routes>
  )
}

export default OptionalMenu
