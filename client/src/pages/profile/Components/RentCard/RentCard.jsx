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
  Button,
  ButtonsContainer,
  NotRental,
} from "./styled"
import { cancelRental } from "../../../../redux/actions/index"
import { Title } from "../../../../styles/global.css"
import { useNavigate } from "react-router-dom"

export default function RentCard() {
  const userRentals = useSelector(state => state.userRentals)
  const [render, setRender] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getRentalsByUser())
  }, [render])

  function handleCancelation(rentID) {
    // console.log(rentID)

    if (rentID) {
      // console.log(rentID)
      dispatch(cancelRental(rentID))
      setRender(!render)
    } else {
      console.log("error no se encontro el id de la renta")
    }
  }

  return (
    <Container>
      <Title>My history</Title>
      {userRentals?.length === 0 ? <NotRental>
            <h2>
            No rentals yet
            </h2>
          </NotRental> :userRentals?.map(rent => {
        return (
          <CardContainer key={rent.id}>
            <ImageContainer>
              <Image src={rent.property.image[0]} alt="image not found" />
            </ImageContainer>
            <CardTitle onClick={() => navigate(`/property-info/${rent.property.id}`)}>
              {rent.property.name}
            </CardTitle>
            <CardInfoContainer>
              <CardInfo>Location: {rent.property.location}</CardInfo>
              <CardInfo>
                From: {rent.start_date.substr(0, 10)}
                <br /> To: {rent.final_date.substr(0, 10)}
              </CardInfo>
              <CardInfo>Final Price: {rent.final_price}</CardInfo>
              {/* <CardInfo>Location: {rent.property.location}</CardInfo> */}
            </CardInfoContainer>
            <ButtonsContainer>
              <Button
                value={rent.id}
                onClick={e => handleCancelation(e.target.value)}>
                Cancel
              </Button>
              <Button
                value={rent.id}
                onClick={() => navigate(`/comment/${rent.property.id}`)}>
                Add comment
              </Button>
            </ButtonsContainer>
          </CardContainer>
        )
      })}
    </Container>
  )
}
