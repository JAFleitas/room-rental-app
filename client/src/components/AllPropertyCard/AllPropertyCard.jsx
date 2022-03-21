import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProperties } from "../../redux/actions"

import PropertyCard from "../PropertyCard/PropertyCard"
import { Card } from "./styled"
// aca hay que agregar el useEfect y además traernos las propiedades del estado
//global a una variable (allPropierties) y mapearla para renderizar cada propiedad

function AllPropertyCard() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProperties())
  }, [dispatch])

  const allPropierties = useSelector(state => state.AllProperties.properties)
  return (
    <Card>
      {allPropierties.properties &&
        allPropierties.properties.map(property => {
          return (
            <PropertyCard
              id={property.id}
              key={property.id}
              name={property.name}
              location={property.location}
              price={property.price}
              numberOfRooms={property.numberOfRooms}
              maxNumberOfPeople={property.maxNumberOfPeople}
              description={property.description}
              rating={property.rating}
              image={property.image}
            />
          )
        })}
    </Card>
  )
}

export default AllPropertyCard
