import React from "react"
import Button from "../Button/Button"
import { Navigator, IconContainer, Logo, ToHome } from "./styled"
import logo from "../../assets/Rental_App_Logo.png"
import { useDispatch } from "react-redux"
import {
  actionChangePage,
  actionSaveDates,
  getAllProperties,
  setOptionFilters,
} from "../../redux/actions/index"

export default function Nav() {
  const dispatch = useDispatch()

  return (
    <Navigator>
      <IconContainer>
        <ToHome
          to="/home"
          onClick={() => {
            dispatch(actionChangePage(1))
            dispatch(actionSaveDates({}))
            dispatch(
              setOptionFilters({
                minrooms: "",
                maxrooms: "",
                minpeople: "",
                maxpeople: "",
                order: "ASC",
                orderBy: "name",
                minprice: "",
                maxprice: "",
                type: "", //tipo de propiedad
                location: "",
              }),
            )
            dispatch(getAllProperties())
          }}>
          <Logo src={logo}></Logo>
        </ToHome>
      </IconContainer>
      <Button />
    </Navigator>
  )
}
