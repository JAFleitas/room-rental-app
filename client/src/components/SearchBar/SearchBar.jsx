import React, { useEffect } from "react"
import { FiSearch } from "react-icons/fi"
import { useState } from "react"
import {
  Input,
  SearchButton,
  ContainerSearchBar,
  Container,
  Label,
  Box,
} from "./styled"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useDispatch, useSelector } from "react-redux"
import {
  actionSaveDates,
  getAllProperties,
  setOptionFilters,
} from "../../redux/actions"
import Filters from "../Filters/Filters"
import Sorters from "../Filters/Sorters"
import FilterAltIcon from "@mui/icons-material/FilterAlt"

function SearchBar() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [location, setLocation] = useState("")
  const filters = useSelector(state => state.filters)
  const page = useSelector(state => state.page)
  const dates = useSelector(state => state.dates)
  const dispatch = useDispatch()
  const [openFilters, setOpenFilters] = useState(false)

  const handleSearch = e => {
    e.preventDefault()
    dispatch(
      actionSaveDates({
        start_date: startDate,
        final_date: endDate,
      }),
    )
    dispatch(setOptionFilters({ location }))
    dispatch(getAllProperties({ ...filters, location }, page, dates))
  }

  const handleChange = e => {
    const { value } = e.target

    setLocation(value)
  }

  useEffect(() => {
    setLocation(filters.location)
  }, [])

  return (
    <div>
      <Container>
        <ContainerSearchBar>
          <Box>
            <Label>Location</Label>
            <Input
              value={location}
              onChange={handleChange}
              placeholder="Where?"></Input>
          </Box>
          <Box>
            <Label>Check in</Label>
            <DatePicker
              customInput={<Input />}
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </Box>
          <Box>
            <Label>Check-Out</Label>
            <DatePicker
              customInput={<Input />}
              selected={endDate}
              onChange={date => setEndDate(date)}
            />
          </Box>
          <SearchButton onClick={handleSearch} type="submit">
            <FiSearch />
          </SearchButton>
        </ContainerSearchBar>
        <button onClick={() => setOpenFilters(!openFilters)}>
          <FilterAltIcon />
          {openFilters ? "Close" : "Open"} filters
        </button>
        {openFilters && <Filters />}
      </Container>
      <Sorters />
    </div>
  )
}

export default SearchBar
