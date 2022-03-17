import React from "react"
import React from "react"
import PropertyCard from "../PropertyCard/PropertyCard"

// aca hay que agregar el useEfect y además traernos las propiedades del estado
//global a una variable (allPropierties) y mapearla para renderizar cada propiedad

function AllPropertyCard() {
    return (
      <Cards>
        {
            allPropierties && allPropierties.map((property)=>{
                return(
                    <PropertyCard
                    key= {property.id}
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
            })
        }
      </Cards>
    )
  }
  
  export default AllPropertyCard
