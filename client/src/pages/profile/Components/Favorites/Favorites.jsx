import React, { useState, useEffect } from "react"
import { SubMenu, Title } from "./styled"
import Favorites from "../../../favorites/Favorites"
import { useDispatch, useSelector } from "react-redux"
import FavoriteCard from "../../../../components/PropertyCard/FavoriteCard"
import { actionGetPropertyById } from "../../../../redux/actions/index"

export default function Favoritos() {
  const favorites = useSelector(state => state.listFavorites.FavoriteProperties)
  const [cards, setCards] = useState([])
  const dispatch = useDispatch()

  let cardsArray = []
  async function gettingsCards() {
    for (let i = 0; i < favorites.length; i++) {
      const data = await dispatch(
        actionGetPropertyById(favorites[i].propertyId),
      )
      cardsArray.push(data.payload)
    }
    console.log("cargado!")
    setCards(cardsArray)
  }

  useEffect(() => {
    gettingsCards()
    //si en el array de abajo se pone cards pasan dos cosas:
    //1: Tu PC explota por que se carga infinitamente el componente...
    //2: Si se "deslikea" una propiedad dentro de la pagina profile, inmediatamente se elimina esa propiedad.
  }, [])

  return (
    <SubMenu>
      <Title>Your Favorites</Title>
      {cards?.map(card => (
        <FavoriteCard property={card} />
      ))}
      {/* <Favorites /> */}
    </SubMenu>
  )
}

//Comentarios:
/* 
  Usando el Favorites comentado se ampliaban indefiniditamente las tarjetas de las propiedades.
  Añadiendo estilos al FavoriteCard se solucionaria un error de diseño en las tarjetas cuando se las usa dentro del profile
*/
