import React from "react"
import { SubMenu, Title } from "./styled"
import { useSelector } from "react-redux"
import FavoriteCard from "../../../../components/PropertyCard/FavoriteCard"

export default function Favoritos() {
  const favorites = useSelector(state => state.listFavorites)
  const properties = useSelector(state => state.AllProperties?.properties) || []

  let propertiesDOM = favorites?.FavoriteProperties?.map(prop => {
    let findedProperty = properties?.find(
      property => property.id === prop.propertyId,
    )
    return (
      findedProperty && (
        <FavoriteCard key={findedProperty.id} property={findedProperty} />
      )
    )
  })

  return (
    <SubMenu>
      <Title>Your Favorites</Title>
      {propertiesDOM?.filter(prop => prop)}
    </SubMenu>
  )
}
