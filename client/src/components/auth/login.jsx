import { useAuth0 } from "@auth0/auth0-react"
import { FcGoogle } from "react-icons/fc"
import { ButtonGoogle } from "../DropDown/styled"

export default function LoginWithGoogle() {
  const { loginWithRedirect } = useAuth0()

  return (
    <ButtonGoogle onClick={loginWithRedirect}>
      <FcGoogle />
      Log in with Google
    </ButtonGoogle>
  )
}
