import "./App.css"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import RouterApp from "./routes/RouterApp"

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
    <div>
      <Nav />
      <RouterApp />
      <Footer />
    </div>
  )
}

export default App
