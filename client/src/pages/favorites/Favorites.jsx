import React from "react"
import { useSelector } from "react-redux"
import FavoriteCard from "../../components/PropertyCard/FavoriteCard"

const Favorites = () => {
  const favorites = useSelector(state => state.listFavorites)
  const properties = useSelector(state => state.AllProperties?.properties) || []

  let propertiesDOM = favorites?.FavoriteProperties?.map(prop => {
    let findedProperty = properties?.find(
      property => property.id === prop.propertyId,
    )
    return findedProperty && <FavoriteCard key={findedProperty.id} property={findedProperty}/>
  })

  return (
    <div>
      <h2>My favorites</h2>
      <div style={{display: 'flex', flexDirection: "row", flexWrap: 'wrap'}}>
      {propertiesDOM?.filter(prop => prop)}
      </div>
    </div>
  )
}

export default Favorites
