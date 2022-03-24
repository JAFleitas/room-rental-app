import "./App.css"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import RouterApp from "./routes/RouterApp"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFavorites, loadUser } from "./redux/actions"

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    localStorage.tokenRentalApp && dispatch(loadUser());
  }, []);

  useEffect(() => {
    if(auth){
      dispatch(getFavorites());
    }
  }, [auth]);

  return (
    <div>
      <Nav />
      <RouterApp />
      <Footer />
    </div>
  )
}

export default App
