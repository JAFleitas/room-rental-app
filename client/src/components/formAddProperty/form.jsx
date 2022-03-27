import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { validateFormAddProperty } from "../../utilities/validateForm"
import MapForm from "./mapContainer"
import { getAllCategories, getAllServices } from "../../redux/actions"
import {
  ButtonSt,
  Container,
  ContainerImgAndMap,
  ContainerMap,
  FormContainer,
  InputSt,
  LabelSt,
  TextDescription,
  TitleSt,
} from "./styles"
import { SelectSt } from "../Filters/styles/index.sort"
import axios from "axios"
const api = import.meta.VITE_APP_API_URL

const initialStateForm = {
  name: "",
  location: "",
  price: "",
  numberOfRooms: 1,
  maxNumberOfPeople: 1,
  image: [],
  services: [],
  description: "",
  discount: 0,
  typePropertyID: "",
  coordinates: [],
}

export default function FormAddProperty() {
  const dispatch = useDispatch()
  const typeProperty = useSelector(state => state.categories)
  const servicesData = useSelector(state => state.services)
  const coordinates = useSelector(state => state.coordinates)
  const [formData, setFormData] = useState(initialStateForm)
  const [errors, setErrors] = useState({})

  const handleInputChange = e => {
    const { name, value } = e.target

    setFormData(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const sendData = async e => {
    e.preventDefault()
    if (localStorage.getItem("tokenRentalApp")) {
      await axios
        .post(
          `${api}/properties/addProperty`,
          { data: formData },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tokenRentalApp")}`,
            },
          },
        )
        .then(res => {
          setFormData(initialStateForm)
          console.log(res)
        })
        .catch(err => console.log(err))
    } else {
      console.log("Not found token")
    }
  }

  const handleFileChange = async e => {
    const files = e.target.files
    let respData = []
    for (let index = 0; index < files.length; index++) {
      let data = new FormData()
      data.append("file", files[index])
      data.append("upload_preset", "rentApp")
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dye9d3vzy/image/upload",
        {
          method: "POST",
          body: data,
        },
      )
      let file = await res.json()
      respData.push(file.secure_url)
    }
    setFormData(prev => {
      return {
        ...prev,
        image: respData,
      }
    })
  }

  const removeImg = index => {
    let newData = formData.image
    newData.splice(index, 1)
    setFormData(prev => {
      return {
        ...prev,
        image: newData,
      }
    })
  }

  const validateService = e => {
    let Services = formData.services
    if (e.target.checked === true) {
      Services.push(e.target.defaultValue)
    } else {
      Services = Services.filter(service => service !== e.target.defaultValue)
    }
    setFormData(prev => {
      return {
        ...prev,
        services: Services,
      }
    })
  }

  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getAllServices())
  }, [])

  useEffect(() => {
    if (coordinates[0] === undefined) return
    setFormData(prev => {
      return {
        ...prev,
        coordinates: coordinates,
      }
    })
  }, [coordinates])

  useEffect(() => {
    setErrors(validateFormAddProperty(formData))
  }, [formData])

  return (
    <>
      <TitleSt>
        <h1>Add Property</h1>
      </TitleSt>
      <Container>
        <FormContainer>
          <LabelSt>Name</LabelSt>
          <InputSt
            name="name"
            value={formData.name}
            type={"text"}
            onChange={handleInputChange}
          />
          {errors.name && <LabelSt error={true}>{errors.name}</LabelSt>}
          <LabelSt>Location</LabelSt>
          <InputSt
            type={"text"}
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          {errors.location && <LabelSt error={true}>{errors.location}</LabelSt>}
          <LabelSt>Price</LabelSt>
          <InputSt
            type={"number"}
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          {errors.price && <LabelSt error={true}>{errors.price}</LabelSt>}
          <br />
          <LabelSt>Number of rooms</LabelSt>
          <input
            type="range"
            max="10"
            min="1"
            step="1"
            style={{ width: "40%" }}
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleInputChange}
          />
          <label>{formData.numberOfRooms}</label>
          <br />
          <LabelSt>Max Number of People</LabelSt>
          <input
            type="range"
            max="20"
            min="1"
            step="1"
            style={{ width: "40%" }}
            name="maxNumberOfPeople"
            value={formData.maxNumberOfPeople}
            onChange={handleInputChange}
          />
          <label>{formData.maxNumberOfPeople}</label>
          <LabelSt>Description</LabelSt>
          <TextDescription
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          {errors.description && (
            <LabelSt error={true}>{errors.description}</LabelSt>
          )}
          <LabelSt>Discount</LabelSt>
          <input
            type="range"
            max="30"
            min="0"
            step="5"
            style={{ width: "40%" }}
            name="discount"
            value={formData.discount}
            onChange={handleInputChange}
          />
          <label>{formData.discount} %</label>
        </FormContainer>
        <ContainerImgAndMap>
          <div>
            {errors.coordinates ? (
              <LabelSt error={true}>{errors.coordinates}</LabelSt>
            ) : (
              <>
                <LabelSt>Coordinates </LabelSt>
                <LabelSt>{coordinates} </LabelSt>
              </>
            )}
          </div>
          <ContainerMap>
            <MapForm />
          </ContainerMap>

          <FormContainer>
            <LabelSt>Images</LabelSt>
            {formData.image
              ? formData.image.map((elem, index) => (
                  <div key={index} style={{ width: "100px", height: "100px" }}>
                    <div
                      style={{
                        background: "red",
                        textAlign: "right",
                        cursor: "pointer",
                      }}
                      onClick={() => removeImg(index)}>
                      X
                    </div>
                    <img
                      src={elem}
                      style={{ width: "100%", height: "100%" }}
                      alt="not found"
                    />
                  </div>
                ))
              : null}
            <input
              type="file"
              name="file"
              multiple="multiple"
              onChange={handleFileChange}
            />

            <LabelSt>Type of property</LabelSt>
            <SelectSt name="typePropertyID" onChange={handleInputChange}>
              {typeProperty &&
                typeProperty.map(e => (
                  <option value={e.id} key={e.id}>
                    {e.name}
                  </option>
                ))}
            </SelectSt>

            {errors.typePropertyID && (
              <LabelSt error={true}>{errors.typePropertyID}</LabelSt>
            )}
          </FormContainer>
          <FormContainer>
            <LabelSt>Services</LabelSt>
            {servicesData &&
              servicesData.map((elem, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    id={elem.id}
                    value={elem.id}
                    onChange={validateService}
                  />
                  {elem.name}
                </label>
              ))}
          </FormContainer>
        </ContainerImgAndMap>
      </Container>
      <TitleSt>
        <ButtonSt
          disabled={
            errors.name ||
            errors.location ||
            errors.price ||
            errors.numberOfRooms ||
            errors.description ||
            errors.typePropertyID ||
            errors.coordinates ||
            errors.services
          }
          onClick={sendData}>
          ADD PROPERTY
        </ButtonSt>
      </TitleSt>
    </>
  )
}
