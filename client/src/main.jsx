import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

import { Provider } from "react-redux"
import {store} from "./redux/store";
import { Globalcss } from "./styles/global.css"

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Globalcss />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
>,

  document.getElementById("root"),
)
