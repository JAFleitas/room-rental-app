import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { Auth0Provider } from "@auth0/auth0-react"

import "./index.css"
import App from "./App"

import { store } from "./redux/store"
import { Globalcss } from "./styles/global.css"

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
const clientID = import.meta.env.VITE_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={domain}
        clientId={clientID}
        redirectUri={window.location.origin}>
        <Globalcss />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </StrictMode>,
  document.getElementById("root"),
)
