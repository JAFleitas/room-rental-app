import React, { useEffect } from "react"
import { SubMenu, Title, CardContainer, Card, RedButton } from "./styled"
import { useSelector, useDispatch } from "react-redux"
import PropertyCard from "../../../../components/PropertyCard/PropertyCard"
import {
  getPropertiesByUserId,
  deletePropertyFromMyProperties,
} from "../../../../redux/actions/index"
import { useNavigate } from "react-router-dom"

export default function MyProperties() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const MyProperties = useSelector(state => state.MyProperties) || []

  useEffect(() => {
    dispatch(getPropertiesByUserId(user.id))
  }, [dispatch])
  console.log(MyProperties)

  function handleDelete(propertyId) {
    const form = {
      propertyId: propertyId,
      userID: user.id,
    }
    dispatch(deletePropertyFromMyProperties(form))
    // navigate("/profile/myProperties")
  }

  return (
    <SubMenu>
      <Title>My properties</Title>
      <CardContainer>
        {MyProperties?.map(property => {
          return (
            <Card>
              <PropertyCard
                width={"90%"}
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
              <RedButton
                id={property.id}
                value={property.id}
                onClick={e => handleDelete(e.target.value)}>
                Eliminar
              </RedButton>
            </Card>
          )
        })}
      </CardContainer>
    </SubMenu>
  )
}
