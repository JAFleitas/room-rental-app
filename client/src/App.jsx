import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import RouterApp from "./routes/RouterApp"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Footer />
    </div>
  )
}

export default App
