import React, { useEffect, useState } from "react"
import {
  FiltersButton,
  FilterForm,
  ModalTitle,
  ModalField,
  ModalLabel,
  ModalSubtitle,
  ModalTexto,
  ModalSelect,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  Filter,
  // ModalField,
} from "./styled"
import { MdFilterAlt } from "react-icons/md"
import Modal from "../modal/modal"
import { useDispatch, useSelector } from "react-redux"
import {
  getAllProperties,
  getAllCategories,
  getAllServices,
  setOptionFilters,
} from "../../redux/actions"

// const initialCategories = [
//   { name: "Casa de playa", id: "123" },
//   { name: "Casa de campo", id: "343" },
// ]
// const initialServices = [
//   { name: "Pets", id: "123" },
//   { name: "Wifi", id: "355" },
// ]

const initialFilters = {
  minrooms: "",
  maxrooms: "",
  minpeople: "",
  maxpeople: "",
  category: "ASC",
  categoryBy: "name",
  minprice: "",
  maxprice: "",
  type: "", //tipo de propiedad
  services: [],
}

export default function Filters() {
  const filtersGlobal = useSelector(state => state.filters)
  const [modalShow, setModalShow] = useState(false)
  const [filters, setfilters] = useState(initialFilters)
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  const initialServices = useSelector(state => state.services)
  const initialCategories = useSelector(state => state.categories)

  // Funcion para añadir/quitar de los filtros un nuevo servicio mediante oprimir el boton con el nombre del servicio
  const handleService = (service, add = false) => {
    const { id } = service

    if (!add) {
      // Si ya está lo quitamos de los filtros seleccionados
      setfilters({
        ...filters,
        services: filters.services.filter(service => service.id !== id),
      })

      // Y lo volvemos a añadir a las opciones de filtrado
      setServices([...services, service])
    } else {
      // O sino lo agregamos a los filtros seleccionados
      setfilters({ ...filters, services: [...filters.services, service] })

      // Y lo quitamos de la opciones de filtrado
      setServices(services.filter(service => service.id !== id))
    }
  }

  const handleChange = e => {
    const { name, value } = e.target

    setfilters({ ...filters, [name]: value })
  }

  const handleApplyFilters = e => {
    e.preventDefault()

    const servicesIds = filters.services.map(service => service.id)

    dispatch(setOptionFilters({ ...filters, services: servicesIds }))
    dispatch(getAllProperties({ ...filters, services: servicesIds }))
    console.log(filters);
  }

  const handleClick = e => {
    e.preventDefault()
    // console.log("clicked")
    setModalShow(!modalShow)
    // console.log(modalShow)
  }

  useEffect(() => {
    setCategories(initialCategories)
    setServices(initialServices)
  }, [initialCategories, initialServices])

  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getAllServices())
    // console.log(filtersGlobal,"filtersGlobal");
    setfilters({...initialFilters,...filtersGlobal})
  }, [])

  useEffect(() => {
    // console.log(filtersGlobal,"filtersGlobal");
    setfilters({...initialFilters,...filtersGlobal})
  }, [filtersGlobal])

  return (
    <div>
      <FiltersButton onClick={handleClick}>
        <MdFilterAlt />
      </FiltersButton>
      <Modal
        overlayShow={true}
        modalShow={modalShow}
        setModalShow={setModalShow}>
        <ModalTitle>Filter</ModalTitle>
        <FilterForm>
          <CheckBoxWrapper>
            <h3>
              <ModalSubtitle>Capacity</ModalSubtitle>
            </h3>
            <label>Min</label>
            <ModalLabel>
              <CheckBox
                type="number"
                name="minpeople"
                value={filters.minpeople}
                onChange={handleChange}
              />
            </ModalLabel>
            <label> Max</label>
            <ModalLabel>
              <CheckBox
                type="number"
                name="maxpeople"
                value={filters.maxpeople}
                onChange={handleChange}
              />
            </ModalLabel>
          </CheckBoxWrapper>
          <div>
            <br />
            <ModalSubtitle>Price</ModalSubtitle>
            <label>Min</label>
            <ModalLabel>
              <CheckBox
                type="number"
                name="minprice"
                value={filters.minprice}
                onChange={handleChange}
              />
            </ModalLabel>
            <label> Max</label>
            <ModalLabel>
              <CheckBox
                type="number"
                name="maxprice"
                value={filters.maxprice}
                onChange={handleChange}
              />
            </ModalLabel>
          </div>
          <br />
          <div>
            <ModalSubtitle>Rooms</ModalSubtitle>
            <label>Min</label>
            <ModalLabel>
              <CheckBox
                type="number"
                name="minrooms"
                value={filters.minrooms}
                onChange={handleChange}
              />
            </ModalLabel>
            <label> Max</label>
            <ModalLabel>
              <CheckBox
                type="number"
                name="maxrooms"
                value={filters.maxrooms}
                onChange={handleChange}
              />
            </ModalLabel>
          </div>
          <br />
          <div>
            <ModalSubtitle>Category</ModalSubtitle>
            <ModalSelect
              title="type"
              name={"type"}
              id={"type"}
              onChange={handleChange}
              value={filters.type}>
              {categories.map(category => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </ModalSelect>
          </div>
          <div>
            <ModalSubtitle>Services </ModalSubtitle>
            <div>
              <h4>Add Service</h4>
              {services.map(service => (
                <button
                  style={{
                    padding: "5px",
                    backgroundColor: "#d2d4d3",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                  key={service.id}
                  onClick={() => handleService(service, true)}>
                  {service.name}
                </button>
              ))}
            </div>
            <div>
              <br />
              <h4>Added Service</h4>
              {filters.services.map(service => (
                <button
                  style={{
                    padding: "5px",
                    backgroundColor: "#b7d2c8",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                  key={service.id}
                  onClick={() => handleService(service, false)}>
                  {service.name}
                </button>
              ))}
            </div>
          </div>
          <Filter onClick={handleApplyFilters}>Aplicar filtros</Filter>
          {/*  <ModalField>
            <ModalLabel>Max-Capacity:</ModalLabel>
            <ModalSelect name="MaxPersonas">
              <option defaultValue={true} value={"default"}>
                {" "}
              </option>
              {capacities.map(capacity => (
                <option value={capacity}>{capacity}</option>
              ))} 
            </ModalSelect>
          </ModalField>
          {/* <ModalField>
            <ModalLabel>Rating: </ModalLabel>
            <ModalSelect name="Rating">
              <option defaultValue={true} value={"default"}>
                {" "}
              </option>
              <option value={"1-2"}>1-2</option>
              <option value={"2-3"}>2-3</option>
              <option value={"3-4"}>3-4</option>
              <option value={"4-5"}>4-5</option>
              <option value={"5"}>5</option>
            </ModalSelect>
          </ModalField> */}
          {/* <ModalField>
            <ModalLabel>Min</ModalLabel>
            <ModalSelect name="Max-rooms">
              <option defaultValue={true} value={"default"}>
                {" "}
              </option>
              {rooms.map(room => (
                <option value={room}>{room}</option>
              ))}
            </ModalSelect>
          </ModalField> 
           <ModalField>
            <ModalLabel>Pets:</ModalLabel>
            <CheckBoxWrapper>
              <CheckBox id="checkbox" type="checkbox" name="pets" />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </ModalField> */}
        </FilterForm>
      </Modal>
    </div>
  )
}
