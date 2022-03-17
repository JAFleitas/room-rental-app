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
function PropertyCard({ property }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Container>
      <ImageContainer>
        <Slider {...settings}>
          {property.images &&
            property.images.map((image, i) => {
              return (
                <div key={i}>
                  <Image src={image}></Image>
                </div>
              )
            })}
        </Slider>
      </ImageContainer>
            <Title>{property.title}</Title>
      <Info>{property.info}</Info>
      <DivPyR>

      <Price> Price: {property.price}/ night </Price>
      <Rating>
        <AiFillStar color="pink" />
        {property.rating}
      </Rating>
      </DivPyR>
    </Container>
  )
}

export default PropertyCard
