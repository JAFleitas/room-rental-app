import "./App.css"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

import RouterApp from "./routes/RouterApp"

function App() {
  return (
    <div className="App">
      <Nav />
      <RouterApp />

      <Footer />
    </div>
  )
}

export default App
