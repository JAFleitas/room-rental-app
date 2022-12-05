import AllPropertyCard from "../../components/AllPropertyCard/AllPropertyCard"
import Paginated from "../../components/paginated/paginated"
import { ToastContainer} from 'react-toastify';
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionLoginWithGoogle } from "../../redux/actions"
import SearchBar from "../../components/SearchBar/SearchBar"

export default function Home() {
  const { isAuthenticated, user } = useAuth0()
  const dispatch = useDispatch()
  const USER = useSelector(state => state.user)

  useEffect(() => {
    if (USER?.id) return
    if (isAuthenticated) {
      dispatch(
        actionLoginWithGoogle({
          email: user.email,
          lastname: user.family_name,
          name: user.given_name,
          photo: user.picture,
        }),
      )
    }
  }, [isAuthenticated])
  
  return (
    <>
      <SearchBar />
      <AllPropertyCard />
      <Paginated />
      <ToastContainer limit={3}/>
    </>
  )
}
