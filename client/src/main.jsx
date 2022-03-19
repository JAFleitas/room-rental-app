import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Globalcss } from "./styles/global.css"

ReactDOM.render(
  <StrictMode>
    <Globalcss />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,

  document.getElementById("root"),
)
