import React, { useEffect } from "react"
import Button from "../Button/Button"
import { Navigator, IconContainer, Logo, ToHome } from "./styled"
import logo from "../../assets/Rental_App_Logo.png"
import { useDispatch } from "react-redux"
import { actionChangePage, loadUser } from "../../redux/actions/index"

export default function Nav() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <Navigator>
      <IconContainer>
        <ToHome to="/" onClick={() => dispatch(actionChangePage(1))}>
          <Logo src={logo}></Logo>
        </ToHome>
      </IconContainer>
      <Button />
    </Navigator>
  )
}
