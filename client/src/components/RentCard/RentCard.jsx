import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getRentalsByUser } from "../../redux/actions"
import {
  Container,
  CardContainer,
  CardTitle,
  CardInfoContainer,
  CardInfo,
  ImageContainer,
  Image,
} from "./styled"
export default function RentCard() {
  const userRentals = useSelector(state => state.userRentals.data)
  const dispatch = useDispatch()
  console.log(userRentals)

  useEffect(() => {
    dispatch(getRentalsByUser())
  }, [dispatch])
  return (
    <Container>
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
          </CardContainer>
        )
      })}
    </Container>
  )
}
