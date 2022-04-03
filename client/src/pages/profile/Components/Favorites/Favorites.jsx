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
      <Title>My Favorites</Title>
      {propertiesDOM.length > 0 ? propertiesDOM?.filter(prop => prop) : <h3>You have not saved favorites yet</h3>}
    </SubMenu>
  )
}
