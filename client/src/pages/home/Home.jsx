import AllPropertyCard from "../../components/AllPropertyCard/AllPropertyCard"
import Sorters from "../../components/Filters/Sorters"
import Paginated from "../../components/paginated/paginated"
// import {
//   WelcomeContainer,
//   WelcomeTitle,
//   WelcomeText,
//   Container,
//   Design,
//   DesignContainer,
// } from "./styled"
// import design from "../../assets/designWelcome.png"

import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionLoginWithGoogle } from "../../redux/actions"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const { isAuthenticated, user } = useAuth0()
  const dispatch = useDispatch()
  const USER = useSelector(state => state.user)
  const form = useSelector(state => state.formRentalProperty)
  const navigate = useNavigate()

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
    if (form?.propertyID) {
      navigate("/pay-reservation")
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
