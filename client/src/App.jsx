import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import PropertyCard from "./components/PropertyCard/PropertyCard"
import Details from "./pages/details-property/detailsProperty"
import AboutUs from "./pages/about-us/AboutUs"

function App() {

  // const house={
  //   price:15,
  //   title:"casa frente al mar",
  //   info:"3baños,2habitaciones,comedor, cocina, desayuno",
  //   rating:4.5,
  //   images:["https://decoraideas.com/wp-content/uploads/2019/08/04-4-768x536.jpg",
  //   "https://decoraideas.com/wp-content/uploads/2019/08/04-4-768x536.jpg",
  //   "https://decoraideas.com/wp-content/uploads/2019/08/04-4-768x536.jpg",
    

  // ]

  // }
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<div>Home</div>}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>
        <Route exact path="/properties" element={<PropertyCard/>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
