import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { getAllProperties } from "../../redux/actions"

import PropertyCard from "../PropertyCard/PropertyCard"
import { Card } from "./styled"
// aca hay que agregar el useEfect y además traernos las propiedades del estado
//global a una variable (allPropierties) y mapearla para renderizar cada propiedad

function AllPropertyCard() {
  useEffect(() => {
    dispatch(getAllProperties())
  }, [dispatch])

  const allPropierties = useSelector(state.AllProperties)
  return (
    <Card>
      {allPropierties &&
        allPropierties.map(property => {
          return (
            <PropertyCard
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
