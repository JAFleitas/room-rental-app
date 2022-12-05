import React from "react"
import { useSelector } from "react-redux"

import PropertyCard from "../PropertyCard/PropertyCard"
import { Card } from "./styled"
// aca hay que agregar el useEfect y además traernos las propiedades del estado
//global a una variable (allPropierties) y mapearla para renderizar cada propiedad
import img1 from "../../assets/Background-images/bckgr01.jpg"
import img2 from "../../assets/Background-images/bckgr02.jpg"
import img3 from "../../assets/Background-images/bckgr03.jpg"
import img4 from "../../assets/Background-images/bckgr04.jpg"
function AllPropertyCard() {

  const allPropierties = useSelector(state => state.AllProperties.properties)
  return (
    <Card>
      {allPropierties &&
        allPropierties.map(property => {
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
        {
          [1,2,3,4,5,6,7,8,9,0,10,11,12,14,15].map((e,i)=><PropertyCard
              id={1}
              key={i}
              name={"probando"}
              location={"probando"}
              price={15}
              numberOfRooms={2}
              maxNumberOfPeople={5}
              description={"probandoprobandoprobandoprobandoprobandoprobandoprobandoprobandoprobandoprobando"}
              rating={5}
              image={[img1,img2,img3,img4]}
            />)
        }
    </Card>
  )
}

export default AllPropertyCard
