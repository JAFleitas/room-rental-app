import React, { useEffect, useState } from "react"
import {
  CardContainer,
  Card,
  RedButton,
  ContainerButtons,
  EditButton,
} from "./styled"
import { SubMenu, Title } from "../../../../styles/global.css"
import { useSelector, useDispatch } from "react-redux"
import PropertyCard from "../../../../components/PropertyCard/PropertyCard"
import {
  getPropertiesByUserId,
  deletePropertyFromMyProperties,
} from "../../../../redux/actions/index"
// import { SubMenu } from "../ProfileInfo/styled"
import { Container } from "../RentCard/styled"
import { useNavigate } from "react-router-dom"

export default function MyProperties() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const MyProperties = useSelector(state => state.MyProperties) || []
  const [render, setRender] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getPropertiesByUserId(user.id))
  }, [dispatch, render])

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
              <ContainerButtons>
                <RedButton
                  id={property.id}
                  value={property.id}
                  onClick={e => handleDelete(e)}>
                  Eliminar
                </RedButton>
                <EditButton
                  onClick={() => navigate(`/editProperty/${property.id}`)}>
                  Edit
                </EditButton>
              </ContainerButtons>
            </Card>
          )
        })}
      
      </CardContainer>
    </SubMenu>
  )
}
