import React, { useEffect, useState } from "react"
import { getAllProperties, setOptionFilters } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const sortByTypes = [
  { title: "Name", value: "name" },
  { title: "Price", value: "price" },
  { title: "Rating", value: "rating" },
  { title: "Rooms", value: "numberOfRooms" },
  { title: "Capacity", value: "maxNumberOfPeople" },
]

const Sorters = () => {
  const [options, setOptions] = useState({sort: "ASC", sortBy: "name"});
  const dispatch = useDispatch()
  const currentOptions = useSelector(state => state.filters)

  useEffect(() => {
    setOptions({ sort: currentOptions.sort, sortBy: currentOptions.sortBy })
    dispatch(getAllProperties(currentOptions))
  }, [currentOptions.sort, currentOptions.sortBy])

  const handleChange = e => {
    const { name, value } = e.target

    dispatch(setOptionFilters({ [name]: value }))
  }

  return (
    <div>
      <label>Sort by</label>
      <select
        title="sortBy"
        name={"sortBy"}
        id={"sortBy"}
        onChange={handleChange}
        value={options.sortBy}>
        {sortByTypes.map(sort => (
          <option value={sort.value} key={sort.value}>
            {sort.title}
          </option>
        ))}
      </select>
      <select
        title="sort"
        name={"sort"}
        id={"sort"}
        onChange={handleChange}
        value={options.sort}>
        <option value={"ASC"} key={"ASC"}>
          {"Ascendent"}
        </option>
        <option value={"DESC"} key={"DESC"}>
          {"Descendent"}
        </option>
      </select>
    </div>
  )
}

export default Sorters
