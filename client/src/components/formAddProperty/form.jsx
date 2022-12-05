import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { validateFormAddProperty } from "../../utilities/validateForm"
import MapForm from "./mapContainer"
import { getAllCategories, getAllServices } from "../../redux/actions"
import { useNavigate } from "react-router-dom"
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
  FormPropertyContainer,
  ContainerImages,
  BtnDeleteImage,
  CardImage,
} from "./styles"
import { SelectSt } from "../Filters/styles/index.sort"
import axios from "axios"
import getHeaderToken from "../../utilities/getHeadertoken"
const api = import.meta.env.VITE_APP_API_URL

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

export default function FormAddProperty(props) {
  const dispatch = useDispatch()
  const typeProperty = useSelector(state => state.categories)
  const servicesData = useSelector(state => state.services)
  const coordinates = useSelector(state => state.coordinates)
  const [formData, setFormData] = useState(initialStateForm)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

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
      if (props.id) {
        formData.idProperty = props.id
        swal({
          title: "Are you sure?",
          text: "Data will be updated",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then(async willUpdated => {
          if (willUpdated) {
            await axios
              .put(
                `${api}/properties/editProperty`,
                { data: formData },
                getHeaderToken(),
              )
              .then(res => {
                setFormData(initialStateForm)
                window.scroll(0, 0)
                swal({
                  title: "Successful",
                  text: res.data,
                  icon: "success",
                })
                navigate("/profile/myProperties")
              })
              .catch(err => console.log(err))
          } else {
            swal("Your Property data is safe!")
            navigate("/profile/myProperties")
            window.scroll(0, 0)
          }
        })
      } else {
        await axios
          .post(
            `${api}/properties/addProperty`,
            { data: formData },
            getHeaderToken(),
          )
          .then(res => {
            window.scroll(0, 0)
            swal({
              title: "Successful",
              text: res.data.message,
              icon: "success",
              buttons: {
                Continue: true,
                Exit: true,
              },
              dangerMode: true,
            }).then(value => {
              switch (value) {
                case "Continue":
                  servicesData.map(elem => {
                    document.getElementById(elem.id).checked = false
                  })
                  document.getElementById("FileImage").value = ""
                  setFormData(prev => {
                    return {
                      ...initialStateForm,
                      image: [],
                      services: [],
                      coordinates: [],
                    }
                  })
                  break

                case "Exit":
                  navigate("/")
                  break
                default:
                  navigate("/")
              }
            })
          })
          .catch(err => console.log(err))
      }
    } else {
      console.log("Not found token")
    }
  }

  const handleFileChange = async e => {
    const files = e.target.files
    let respData = formData.image
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
      if (!formData.services.includes(e.target.defaultValue)) {
        Services.push(e.target.defaultValue)
      }
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
    if (props.id) {
      const loadData = async id => {
        const res = await axios.get(`${api}/properties/getPropertyById/${id}`)
        const services = res.data.services.map(el => el.id)
        setFormData({
          name: res.data.name,
          location: res.data.location,
          price: res.data.price,
          numberOfRooms: res.data.numberOfRooms,
          maxNumberOfPeople: res.data.maxNumberOfPeople,
          image: res.data.image,
          services: services,
          description: res.data.description,
          typePropertyID: res.data.typePropertyID,
          coordinates: res.data.coordinates,
        })
        services.map(elem => {
          document.getElementById(elem).checked = true
        })
      }
      loadData(props.id)
    }
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
    <FormPropertyContainer>
      <TitleSt>
        {props.id ? <h1>Edit Property</h1> : <h1>Add Property</h1>}
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
        </FormContainer>
        <FormContainer>
          <ContainerImgAndMap>
            <div>
              {errors.coordinates ? (
                <LabelSt error={true}>{errors.coordinates}</LabelSt>
              ) : (
                <>
                  <LabelSt>Coordinates </LabelSt>
                  <LabelSt>
                    {formData.coordinates.length ? formData.coordinates : null}{" "}
                  </LabelSt>
                </>
              )}
            </div>
            <ContainerMap>
              <MapForm />
            </ContainerMap>

            <FormContainer>
              <LabelSt>Images</LabelSt>
              <ContainerImages>
                {formData.image
                  ? formData.image.map((elem, index) => (
                      <CardImage key={index} photo={elem}>
                        <BtnDeleteImage onClick={() => removeImg(index)} />
                      </CardImage>
                    ))
                  : null}
              </ContainerImages>
              {errors.image && <LabelSt error={true}>{errors.image}</LabelSt>}
              <input
                type="file"
                name="file"
                id="FileImage"
                multiple="multiple"
                onChange={handleFileChange}
              />
              <LabelSt>Type of property</LabelSt>
              <SelectSt
                name="typePropertyID"
                value={formData.typePropertyID}
                onChange={handleInputChange}>
                <option value=""></option>
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
        </FormContainer>
      </Container>
      <TitleSt>
        <ButtonSt
          disabled={
            errors.name ||
            errors.location ||
            errors.price ||
            errors.image ||
            errors.description ||
            errors.typePropertyID ||
            errors.coordinates ||
            errors.services
          }
          onClick={sendData}>
          {props.id ? "UPDATE PROPERTY" : "ADD PROPERTY"}
        </ButtonSt>
      </TitleSt>
    </FormPropertyContainer>
  )
}
