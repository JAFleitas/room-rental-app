import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Container,
  PropertyForm,
  PropertyField,
  PropertyLabel,
  PropertyInput,
  PropertyError,
  PropertyTitle,
  PropertyButton,
} from "./styled"
import { addProperty } from "../../redux/actions"

function validate(input) {
  let error = {}

  if (!input.name) {
    error.name = " A name is required"
  }

  if (!input.location) {
    error.location = "A location is required"
  }
  if (!input.price) {
    error.price = "A price is required"
  }
  if (!input.numberOfRooms) {
    error.numberOfRooms = "A room is required"
  }
  if (!input.maxNumberOfPeople) {
    error.numberOfRooms = "Max people is required"
  }
  if (!input.description) {
    error.description = "Description is required"
  }
  if (!input.rating) {
    error.rating = "Rating is required"
  }
  if (!input.image) {
    error.image = "An image is required"
  }
  if (!input.coordinates) {
    error.coordinates = "Coordinates are required"
  }

  return error
}

export default function newRental() {
  const dispatch = useDispatch()
  const logedUserId = useSelector(state => state.user.id)
  const [error, setError] = useState({})
  const [input, setInput] = useState({
    userId: logedUserId,
    name: "",
    location: "",
    price: 0,
    numberOfRooms: 0,
    maxNumberOfPeople: 0,
    description: "",
    rating: 0,
    image: "",
    coordinates: [0, 0],
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    console.log

    setError(
      validate({
        ...input,
        [e.currentTarget.name]: e.target.value,
      }),
    )
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (
      input.name.length >= 0 &&
      input.location.length >= 0 &&
      input.price.length > 0 &&
      input.numberOfRooms > 0 &&
      input.maxNumberOfPeople> 0 &&
      input.description.length > 1 &&
      input.image.length >= 1
    ) {
      dispatch(addProperty(input))
      setInput({
        userId: logedUserId,
        name: "",
        location: "",
        price: 0,
        numberOfRooms: 0,
        maxNumberOfPeople: 0,
        description: "",
        rating: 0,
        image: "",
        coordinates: [0, 0],
      })
    }
  }

  return (
    <Container>
      <PropertyTitle> NEW RENTAL </PropertyTitle>
      <PropertyForm>
        <PropertyField>
          <PropertyLabel>Name:</PropertyLabel>
          <PropertyInput
            type="text"
            name="name"
            value={input.name}
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.name && <PropertyError>{error.name}</PropertyError>}

        <PropertyField>
          <PropertyLabel>Location</PropertyLabel>
          <PropertyInput
            type="text"
            name="location"
            value={input.location}
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.location && <PropertyError>{error.location}</PropertyError>}

        <PropertyField>
          <PropertyLabel>Price:</PropertyLabel>
          <PropertyInput
            type="number"
            min="0"
            value={input.price}
            name="price"
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.price && <PropertyError>{error.price}</PropertyError>}

        <PropertyField>
          <PropertyLabel>Rooms:</PropertyLabel>
          <PropertyInput
            type="number"
            min="1"
            value={input.numberOfRooms}
            name="numberOfRooms"
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.numberOfRooms && (
          <PropertyError>{error.numberOfRooms}</PropertyError>
        )}

        <PropertyField>
          <PropertyLabel>Max people</PropertyLabel>
          <PropertyInput
            type="number"
            value={input.maxNumberOfPeople}
            name="maxNumberOfPeople"
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.maxNumberOfPeople && (
          <PropertyError>{error.maxNumberOfPeople}</PropertyError>
        )}

        <PropertyField>
          <PropertyLabel>Description</PropertyLabel>
          <PropertyInput
            type="text"
            value={input.description}
            name="description"
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.description && (
          <PropertyError>{error.description}</PropertyError>
        )}

        <PropertyField>
          <PropertyLabel>Rating: </PropertyLabel>
          <PropertyInput
            placeholder="1 to 5"
            type="number"
            value={input.rating}
            name="rating"
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.rating && <PropertyError>{error.rating}</PropertyError>}

        <PropertyField>
          <PropertyLabel>Image:</PropertyLabel>
          <PropertyInput
            type="text"
            value={input.image}
            name="image"
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.image && <PropertyError>{error.image}</PropertyError>}

        <PropertyField>
          <PropertyLabel>Coordinate 1</PropertyLabel>
          <PropertyInput
            type="number"
            value={input.coordinates[0]}
            name="coordinates[0]"
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.coordinates && (
          <PropertyError>{error.coordinates}</PropertyError>
        )}
        <PropertyField>
          <PropertyLabel>Coordinate 2</PropertyLabel>
          <PropertyInput
            type="number"
            value={input.coordinates[1]}
            name="coordinates[1]"
            onChange={e => handleChange(e)}></PropertyInput>
        </PropertyField>
        {error.coordinates && (
          <PropertyError>{error.coordinates}</PropertyError>
        )}
        <PropertyButton onClick={e => handleSubmit(e)}>
          Add Property
        </PropertyButton>
      </PropertyForm>
    </Container>
  )
}
