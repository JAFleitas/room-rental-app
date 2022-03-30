import "./App.css"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import RouterApp from "./routes/RouterApp"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories, getAllEmails, getAllPaymentMethod, getAllProperties, getAllServices, getAllUsers, getFavorites, loadUser } from "./redux/actions"

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const admin = useSelector(state => state.user.type);

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

  useEffect(() => {
    if(auth && admin){
      dispatch(getAllEmails());
      dispatch(getAllUsers());
    }
  }, [admin]);

  return (
    <>
      <Nav />
      <RouterApp />
      <Footer />
    </>
  )
}

export default App
