import React from "react"
import { SubMenu, Title } from "../../../../styles/global.css"
import { useSelector } from "react-redux"
import FavoriteCard from "../../../../components/PropertyCard/FavoriteCard"
import PropertyCard from "../../../../components/PropertyCard/PropertyCard"
import { Card, CardContainer } from "../MyProperties/styled"

export default function Favoritos() {
  const favorites = useSelector(state => state.listFavorites)
  const properties = useSelector(state => state.AllProperties?.properties) || []

  let propertiesDOM = favorites?.FavoriteProperties?.map(prop => {
    let findedProperty = properties?.find(
      property => property.id === prop.propertyId,
    )
    return (
      findedProperty && (
        <Card key={findedProperty.id}>
        <PropertyCard  {...findedProperty} />

        </Card>
      )
    )
  })

  return (
    <SubMenu>
      <Title>My Favorites</Title>
      <CardContainer>
      {propertiesDOM?.length > 0 ? propertiesDOM?.filter(prop => prop) : <h3>You have not saved favorites yet</h3>}
    </CardContainer>
    </SubMenu>
  )
}
