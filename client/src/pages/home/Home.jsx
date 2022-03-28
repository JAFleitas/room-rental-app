import AllPropertyCard from "../../components/AllPropertyCard/AllPropertyCard"
import Sorters from "../../components/Filters/Sorters"
import Paginated from "../../components/paginated/paginated"
import {
  WelcomeContainer,
  WelcomeTitle,
  WelcomeText,
  Container,
  Design,
  DesignContainer,
} from "./styled"
import design from "../../assets/designWelcome.png"


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

      <Container>
        <DesignContainer>
          <Design src={design} alt="welcome-design" />
        </DesignContainer>
        <WelcomeContainer>
          <WelcomeTitle>
            We are Rental App, a web page designed as a final project for
            HENRY's Bootcamp.
          </WelcomeTitle>
          <WelcomeText>
            {" "}
            The mission of the project is to offer a platform to rent gorgeous
            properties with tourist purposes . Be part of the experience adding
            publishing properties as a host, renting wonderful properties, and
            many other fantastic functionalities.
          </WelcomeText>
        </WelcomeContainer>
      </Container>

      <AllPropertyCard />
      <Paginated />
    </div>
  )
}
