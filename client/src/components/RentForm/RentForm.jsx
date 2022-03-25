import React, { useState } from "react"
import {
  Container,
  Header,
  Price,
  Stars,
  IconStar,
  Form,
  FormField,
  FormSelect,
  FormLabel,
  SubmitButton,
} from "./styled"
import Calendar from "./Calendar"

export default function RentForm(props) {
  props = props.props
  console.log(Calendar)

  function handleClick() {}

  return (
    <Container>
      <Header>
        <Price>{props.price ? props.price : "185"}$</Price>
        <Stars>
          <IconStar />
          {props.rating}
        </Stars>
      </Header>
      <Form>
        <FormField>
          <FormLabel>Travelers: </FormLabel>
          <FormSelect type="select">
            <option key="1">1</option>
            <option key="2">2</option>
            <option key="3">3</option>
            <option key="4">4</option>
            <option key="5">5</option>
            <option key="+5">+5</option>
          </FormSelect>
        </FormField>
        <FormField>
          <Calendar props={{ price: props.price ? props.price : null }} />
        </FormField>
        <SubmitButton onClick={handleClick}>Reservar</SubmitButton>
      </Form>
    </Container>
  )
}
