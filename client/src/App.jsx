import "./App.css"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import RouterApp from "./routes/RouterApp"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories, getAllPaymentMethod, getAllProperties, getAllServices, getFavorites, loadUser } from "./redux/actions"

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    localStorage.tokenRentalApp && dispatch(loadUser());
    dispatch(getAllProperties())
    dispatch(getAllCategories())
    dispatch(getAllServices())
  }, []);

  useEffect(() => {
    if(auth){
      dispatch(getFavorites());
      dispatch(getAllPaymentMethod())
    }
  }, [auth]);

  return (
    <>
      <Nav />
      <RouterApp />
      <Footer />
    </>
  )
}

export default App
