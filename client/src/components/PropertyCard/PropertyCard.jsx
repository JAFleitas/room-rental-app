import React from "react"
import { AiFillStar } from "react-icons/ai"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  Container,
  Image,
  Title,
  Price,
  ImageContainer,
  Info,
  Rating,
  DivPyR,
} from "./styled"

import Slider from "react-slick"
function PropertyCard(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Container>
      <ImageContainer>
        <Slider {...settings}>
          {props.image &&
            props.image.map((image, i) => {
              return (
                
                  <Image key={i} src={image}></Image>
                
              )
            })}
        </Slider>
      </ImageContainer>
            <Title>{props.name}</Title>
      <Info>{`${props.location}`}</Info>
      <Info>{` Rooms: ${props.numberOfRooms}`}</Info>
      <Info>{`Guests: ${props.maxNumberOfPeople}`}</Info>
      <DivPyR>

      <Price> Price: {props.price}/ night </Price>
      <Rating>
        <AiFillStar color="pink" />
        {props.rating}
      </Rating>
      </DivPyR>
    </Container>
  )
}

export default PropertyCard
