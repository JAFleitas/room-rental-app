import React from "react"
import {AiFillStar } from 'react-icons/ai';

import { Container, Image, Title, Price, ImageContainer, Info, Rating } from "./styled"

function PropertyCard({property}) {
  return (
    <Container>
      <Title>{property.title}</Title>
      <ImageContainer>
        <Image src={property.image}></Image>
      </ImageContainer>
      <Info>{property.info}</Info>
      <Price> Price: {property.price}/ night </Price>
      <Rating><AiFillStar color="pink" />{property.rating}</Rating>
    </Container>
  )
}

export default PropertyCard
