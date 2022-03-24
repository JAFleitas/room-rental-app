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
} from "./styled"

import Slider from "react-slick"
import Heart from "./Heart"
import { useSelector } from "react-redux"

function PropertyCard(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const navigateTo = useNavigate()
  const favorites =
    useSelector(state => state.listFavorites)
  const auth = useSelector(state => state.auth)
  const [liked, setLiked] = useState(false)

  function handleClick() {
    navigateTo(`/property-info/${props.id}`)
  }

  useEffect(() => {
    let properties = favorites.FavoriteProperties?.map(e => e.propertyId);
    console.log(properties) || [];
    setLiked(auth===true && properties?.includes(props.id))
  }, [favorites]);

  
  return (
    <Container>
      <ImageContainer onClick={() => handleClick()}>
        <Slider {...settings}>
          {props.image &&
            props.image.map((image, i) => {
              return <Image key={i} src={image}></Image>
            })}
        </Slider>
      </ImageContainer>
      <Title onClick={() => handleClick()}>{props.name}</Title>
      <Info>{`${props.location}`}</Info>
      <Info>{` Rooms: ${props.numberOfRooms}`}</Info>
      {/* <Info>{`Guests: ${props.maxNumberOfPeople}`}</Info> */}
      <DivPyR>
        <Price>{props.price}$/ night </Price>
        <Rating>
          <AiFillStar color="pink" />
          {props.rating}
        </Rating>
      </DivPyR>
      <Heart id={props.id} liked={liked}/>
    </Container>
  )
}

export default PropertyCard
