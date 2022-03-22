import React, { useEffect, useState } from "react"
import {
  FiltersButton,
  FilterForm,
  ModalTitle,
  // ModalField,
} from "./styled"
import { MdFilterAlt } from "react-icons/md"
import Modal from "../modal/modal"
import { useDispatch, useSelector } from "react-redux"
import { getAllProperties, getAllCategories, getAllServices, setOptionFilters } from "../../redux/actions"

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
  const [modalShow, setModalShow] = useState(false)
  const [filters, setfilters] = useState(initialFilters)
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch();
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

  const handleApplyFilters = (e) => {
    e.preventDefault();

    const servicesIds = filters.services.map(service =>  service.id);
    
    dispatch(setOptionFilters({...filters, services: servicesIds}))
    dispatch(getAllProperties({...filters, services: servicesIds}));
    // console.log(filters);
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log("clicked")
    setModalShow(!modalShow)
    console.log(modalShow)
  }

  useEffect(() => {
    setCategories(initialCategories)
    setServices(initialServices)
  }, [initialCategories, initialServices])
  
  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getAllServices())
  }, [])

  return (
    <div>
      <FiltersButton onClick={handleClick}>
        <MdFilterAlt />
      </FiltersButton>
      <Modal
        overlayShow={true}
        modalShow={modalShow}
        setModalShow={setModalShow}>
        <ModalTitle>Filtros</ModalTitle>
        <FilterForm>
          <div>
            <h3>
              <label>Capacity</label>
            </h3>
            <label>Min</label>
            <input
              type="number"
              name="minpeople"
              value={filters.minpeople}
              onChange={handleChange}
            />
            <label>Max</label>
            <input
              type="number"
              name="maxpeople"
              value={filters.maxpeople}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>
              <label>Price</label>
            </h3>
            <label>Min</label>
            <input
              type="number"
              name="minprice"
              value={filters.minprice}
              onChange={handleChange}
            />
            <label>Max</label>
            <input
              type="number"
              name="maxprice"
              value={filters.maxprice}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>
              <label>Rooms</label>
            </h3>
            <label>Min</label>
            <input
              type="number"
              name="minrooms"
              value={filters.minrooms}
              onChange={handleChange}
            />
            <label>Max</label>
            <input
              type="number"
              name="maxrooms"
              value={filters.maxrooms}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Category</label>
            <select
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
            </select>
          </div>
          <div>
            <label>Servicios</label>
            <div>
              <h4>Añadir servicio</h4>
              {services.map(service => (
                <button
                  style={{
                    padding: "5px",
                    backgroundColor: "deeppink",
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
              <h4>Selected Services</h4>
              {filters.services.map(service => (
                <button
                  style={{
                    padding: "5px",
                    backgroundColor: "skyblue",
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
          <button onClick={handleApplyFilters}>Aplicar filtros</button>
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
