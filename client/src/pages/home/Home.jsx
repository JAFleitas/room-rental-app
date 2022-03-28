import AllPropertyCard from "../../components/AllPropertyCard/AllPropertyCard"
import Sorters from "../../components/Filters/Sorters"
import Paginated from "../../components/paginated/paginated"
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { actionLoginWithGoogle } from "../../redux/actions"
export default function Home() {
  const { isAuthenticated, user } = useAuth0()
  const dispatch = useDispatch()

  useEffect(() => {
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
    <div>
      <Sorters />
      <AllPropertyCard />
      <Paginated />
    </div>
  )
}
