import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Details from "./pages/details-property/detailsProperty"
import AboutUs from "./pages/about-us/AboutUs"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<div>Home</div>}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
