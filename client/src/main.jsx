import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import RouterApp from "./routes/RouterApp"

ReactDOM.render(
  <StrictMode>
    <App />
    <RouterApp />
  </StrictMode>,


  document.getElementById("root"),
)
