import axios from "axios"
import React from "react"
import { useParams } from "react-router-dom"
import FormAddProperty from "./form"

export const EditProperty = () => {
  const { id } = useParams()
  return <FormAddProperty id={id} />
}
