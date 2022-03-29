import { useAuth0 } from "@auth0/auth0-react"
import { BsFacebook } from "react-icons/bs"
import { ButtonFacebook } from "../DropDown/styled"

export default function LoginWithFacebook() {
  const { loginWithRedirect } = useAuth0()

  return (
    <ButtonFacebook onClick={loginWithRedirect}>
      <BsFacebook />
      Log in with Facebook
    </ButtonFacebook>
  )
}
