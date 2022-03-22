import React, { useEffect } from "react"
import Button from "../Button/Button"
import SearchBar from "../SearchBar/SearchBar"
import { Navigator, IconContainer, Logo, ToHome } from "./styled"
import logo from "../../assets/Rental_App_Logo.png"
import { useDispatch } from "react-redux"
import { loadUser } from "../../redux/actions/index"
import { useParams } from "react-router-dom"

export default function Nav() {
  const id = useParams()
  console.log(id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <Navigator id={id}>
      <IconContainer>
        <ToHome to="/">
          <Logo src={logo}></Logo>
        </ToHome>
      </IconContainer>
      {/* <SearchBar /> */}
      <Button />
    </Navigator>
  )
}
