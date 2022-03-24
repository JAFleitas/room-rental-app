import React, { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  FavoriteContainer,
  FavoriteImage,
  Title,
  PriceFavorite,
  ImageContainer,
  Location,
} from "./styled"
import Slider from "react-slick"
import Heart from "./Heart"
import { useSelector } from "react-redux"
import { IoLocationOutline } from "react-icons/io5"

const FavoriteCard = ({property})=> {
  const { name, location, id, price, image } = property || {};
  const [liked, setLiked] = useState(false)
  const auth = useSelector(state => state.auth)
  const favorites =
    useSelector(state => state.listFavorites)
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3300,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const handleClick =() => {
    navigateTo(`/property-info/${id}`)
  }

  useEffect(() => {
    let properties = favorites.FavoriteProperties?.map(e => e.propertyId) || [];

    setLiked(auth===true && properties?.includes(id))
  }, [favorites]);
  
  return (
    <FavoriteContainer>
      <ImageContainer onClick={() => handleClick()}>
        <Slider {...settings}>
          {image &&
            image.map((image, i) => {
              return <FavoriteImage key={i} src={image}></FavoriteImage>
            })}
        </Slider>
      <Location>
        <span style={{"fontSize": "1.2rem"}}>
        <IoLocationOutline />
        </span>
        {`${location}`}
      </Location>
      </ImageContainer>
      <Title onClick={() => handleClick()}>{name}</Title>
      <PriceFavorite>$ {price}</PriceFavorite>
      <Heart id={id} liked={liked} />
    </FavoriteContainer>
  )
}

export default FavoriteCard
