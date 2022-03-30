import React, { useEffect, useState } from "react"
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
  const [render, setRender]=useState(true)

  useEffect(() => {
    dispatch(getPropertiesByUserId(user.id))
  }, [dispatch,render])

  function handleDelete(e) {
    
      console.log(e.target.value)
    dispatch(deletePropertyFromMyProperties(e.target.value))
    setRender(!render)
    // navigate("/profile/myProperties")
  }

  return (
    <SubMenu>
      <Title>My properties</Title>
      <CardContainer>
        {MyProperties?.map(property => {
          return (
            <Card key={property.id}>
              <PropertyCard
                width={"90%"}
                id={property.id}
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
                onClick={e => handleDelete(e)}>
                Eliminar
              </RedButton>
            </Card>
          )
        })}
      </CardContainer>
    </SubMenu>
  )
}
