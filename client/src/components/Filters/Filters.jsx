import React, { useEffect, useState } from "react"
import {
  getAllProperties,
  setOptionFilters,
} from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Form, InputsNumber, Services } from "./styled"
import FilterAltIcon from "@mui/icons-material/FilterAlt"

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
  const [filters, setfilters] = useState(initialFilters)
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  const initialServices = useSelector(state => state.services)
  const initialCategories = useSelector(state => state.categories)

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
  }

  useEffect(() => {
    setCategories(initialCategories)
    setServices(initialServices)
  }, [initialCategories, initialServices])

  useEffect(() => {
    if (filtersGlobal.services) {
      let services = filtersGlobal.services.map(idService => {
        return initialServices.find(service => service.id === idService)
      })
      setfilters({ ...initialFilters, ...filtersGlobal, services })
    }
  }, [])

  useEffect(() => {
    if (filtersGlobal.services) {
      let services = filtersGlobal.services.map(idService => {
        return initialServices.find(service => service.id === idService)
      })
      setfilters({ ...initialFilters, ...filtersGlobal, services })
    }
  }, [filtersGlobal])

  return (
    <Form>
      <InputsNumber>
        <div>
          <label>Capacity Min</label>
          <input
            type="number"
            name="minpeople"
            value={filters.minpeople}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Capacity Max</label>
          <input
            type="number"
            name="maxpeople"
            value={filters.maxpeople}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Min price</label>
          <input
            type="number"
            name="minprice"
            value={filters.minprice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Max price</label>
          <input
            type="number"
            name="maxprice"
            value={filters.maxprice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Min rooms</label>
          <input
            type="number"
            name="minrooms"
            value={filters.minrooms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Max rooms</label>
          <input
            type="number"
            name="maxrooms"
            value={filters.maxrooms}
            onChange={handleChange}
          />
        </div>
      </InputsNumber>
      <Services>
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
          <label>Services </label>
          {services.map(service => (
            <button
              style={{
                padding: "5px",
                margin: "1px 5px",
                backgroundColor: "rgb(244, 118, 223)",
                color: "black",
                border: "none",
                borderRadius: "10px",
              }}
              key={service.id}
              onClick={() => handleService(service, true)}>
              {service.name}
            </button>
          ))}
          {filters.services.map(service => (
            <button
              style={{
                padding: "5px",
                backgroundColor: "#64075cdd",
                margin: "1px 5px",
                color: "white",
                border: "none",
                borderRadius: "10px",
              }}
              key={service.id}
              onClick={() => handleService(service, false)}>
              {service.name}
            </button>
          ))}
        </div>
      </Services>
      <button
        style={{
          border: "2px solid #6e5fcb",
          color: "#6e5fcb",
          width: "120px",
          borderRadius: "10px",
          fontWeight: "bold",
          backgroundColor: "white",
          alignSelf: "center",
          padding: "2px",
        }}
        onClick={handleApplyFilters}>
        <FilterAltIcon /> Filter
      </button>
    </Form>
  )
}
