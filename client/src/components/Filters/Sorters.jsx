import React, { useEffect, useState } from "react"
import { getAllProperties, setOptionFilters } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Container, LabelSt, SelectSt } from "./styles/index.sort"

const sortByTypes = [
  { title: "Name", value: "name" },
  { title: "Price", value: "price" },
  { title: "Rating", value: "rating" },
  { title: "Rooms", value: "numberOfRooms" },
  { title: "Capacity", value: "maxNumberOfPeople" },
]

const Sorters = () => {
  const [options, setOptions] = useState({ order: "ASC", orderBy: "name" })
  const dispatch = useDispatch()
  const currentOptions = useSelector(state => state.filters)
  const page = useSelector(state => state.page)
  const dates = useSelector(state => state.dates)

  useEffect(() => {
    setOptions({ order: currentOptions.order, orderBy: currentOptions.orderBy })
    dispatch(getAllProperties(currentOptions, page, dates))
  }, [currentOptions.order, currentOptions.orderBy, page])

  const handleChange = e => {
    const { name, value } = e.target

    dispatch(setOptionFilters({ [name]: value }))
  }

  return (
    <Container>
      <LabelSt>Sort by:</LabelSt>
      <SelectSt
        title="orderBy"
        name={"orderBy"}
        id={"orderBy"}
        onChange={handleChange}
        value={options.orderBy}>
        {sortByTypes.map(order => (
          <option value={order.value} key={order.value}>
            {order.title}
          </option>
        ))}
      </SelectSt>
      <SelectSt
        title="order"
        name={"order"}
        id={"order"}
        onChange={handleChange}
        value={options.order}>
        <option value={"ASC"} key={"ASC"}>
          {"Ascendent"}
        </option>
        <option value={"DESC"} key={"DESC"}>
          {"Descendent"}
        </option>
      </SelectSt>
    </Container>
  )
}

export default Sorters
