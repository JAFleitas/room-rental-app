import React, { useEffect, useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
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
  Location,
  RatingNumber,
  HeartContainer,
} from "./styled"

import Slider from "react-slick"
import Heart from "./Heart"
import { useSelector } from "react-redux"
import { IoLocationOutline } from "react-icons/io5"

function PropertyCard(props) {
  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const navigateTo = useNavigate()
  const favorites = useSelector(state => state.listFavorites)
  const auth = useSelector(state => state.auth)
  const [liked, setLiked] = useState(false)

  function handleClick() {
    navigateTo(`/property-info/${props.id}`, { scroll: { x: 0, y: 0 } })
  }

  useEffect(() => {
    let properties = favorites.FavoriteProperties?.map(e => e.propertyId) || []

    setLiked(auth === true && properties?.includes(props.id))
  }, [favorites])

  return (
    <Container width={props.width}>
      <HeartContainer>
          <Heart id={props.id} liked={liked} />
        </HeartContainer>
      <ImageContainer onClick={() => handleClick()}>
        <Slider cssEase="" {...settings} arrows={false}>
          {props.image &&
            props.image.map((image, i) => {
              return <Image key={i} src={image}></Image>
            })}
        </Slider>
        <Location>
          <IoLocationOutline  />
          {`${props.location}`}
        </Location>
        
      </ImageContainer>
      <Title onClick={() => handleClick()}>{props.name}</Title>
      <Info>{`${props.numberOfRooms} rooms -  ${props.maxNumberOfPeople} guests`}</Info>
      <DivPyR>
        <Price>${props.price} / night </Price>
        <Rating>
          <AiFillStar color="yellow" fontSize={"1.5rem"} />
          <RatingNumber>
            {props.rating}
            {props.rating % 1 === 0 ? ".0" : null}
          </RatingNumber>
        </Rating>
      </DivPyR>
      
    </Container>
  )
}

export default PropertyCard
