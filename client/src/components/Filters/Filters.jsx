import React, { useEffect, useState } from "react"
import {
  actionSaveDates,
  getAllProperties,
  setOptionFilters,
} from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Form, InputsNumber, Services, RestartFilterButton } from "./styled"
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
      const newServices = filters.services.filter(service => service.id !== id)
      setfilters({
        ...filters,
        services: newServices,
      })
      dispatch(setOptionFilters({ services: newServices.map(e => e.id) }))

      // Y lo volvemos a añadir a las opciones de filtrado
      setServices([...services, service])
    } else {
      const newServices = [...filters.services, service]
      // O sino lo agregamos a los filtros seleccionados
      setfilters({ ...filters, services: newServices })
      dispatch(setOptionFilters({ services: newServices.map(e => e.id) }))

      // Y lo quitamos de la opciones de filtrado
      setServices(services.filter(service => service.id !== id))
    }
  }

  const handleChange = e => {
    const { name, value } = e.target

    // Cambio el estado local
    const newFilters = { ...filters, [name]: value }
    setfilters(newFilters)

    // Y envio los nuevos filtros
    const copyFilters = { ...newFilters }
    delete copyFilters.services
    console.log({ copyFilters })
    dispatch(setOptionFilters(copyFilters))
  }

  const handleRestartFilters = e => {
    e.preventDefault()

    setfilters(initialFilters)
    setServices(initialServices)
    dispatch(setOptionFilters(initialFilters))
    dispatch(actionSaveDates({}))
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
            <option value={""}>All</option>
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
      <RestartFilterButton onClick={handleRestartFilters}>
        <FilterAltIcon /> Restart filters
      </RestartFilterButton>
    </Form>
  )
}
