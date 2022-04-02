import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getRentalsByUser } from "../../../../redux/actions"
import {
  Container,
  CardContainer,
  CardTitle,
  CardInfoContainer,
  CardInfo,
  ImageContainer,
  Image,
  RedButton,
} from "./styled"
import { cancelRental } from "../../../../redux/actions/index"
import { Title } from "../Acount/styled"
export default function RentCard() {
  const userRentals = useSelector(state => state.userRentals.data)
  const dispatch = useDispatch()
  // Thiago

  const [render, setRender] = useState(true)

  useEffect(() => {
    dispatch(getRentalsByUser())
  }, [render])

  function handleCancelation(rentID) {
    console.log(rentID)

    if (rentID) {
      console.log(rentID)
      dispatch(cancelRental(rentID))
      setRender(!render)
    } else {
      console.log("error no se encontro el id de la renta")
    }
  }
  // Thiago

  return (
    <Container>
      <Title>My history</Title>
      {userRentals?.map(rent => {
        return (
          <CardContainer>
            <ImageContainer>
              <Image src={rent.property.image[0]} alt="image not found" />
            </ImageContainer>
            <CardTitle>{rent.property.name}</CardTitle>
            <CardInfoContainer>
              <CardInfo>Location: {rent.property.location}</CardInfo>
              <CardInfo>
                From: {rent.start_date.substr(0, 10)}
                <br /> To: {rent.final_date.substr(0, 10)}
              </CardInfo>
              <CardInfo>Final Price: {rent.final_price}</CardInfo>
              {/* <CardInfo>Location: {rent.property.location}</CardInfo> */}
            </CardInfoContainer>
            <RedButton
              value={rent.id}
              onClick={e => handleCancelation(e.target.value)}>
              Cancelar
            </RedButton>
          </CardContainer>
        )
      })}
    </Container>
  )
}
