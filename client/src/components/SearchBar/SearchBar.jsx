import React, { useEffect } from "react"
import { FiSearch } from "react-icons/fi"
import { useState } from "react"
import {
  Input,
  SearchButton,
  Container,
  Search,
  Text,
  Icon,
  Label,
  Box,
} from "./styled"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {useDispatch, useSelector} from "react-redux";
import {getAllProperties, setOptionFilters} from "../../redux/actions";

import Filters from "../Filters/Filters"

function SearchBar() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [location, setLocation] = useState("");
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch();

  const handleSearch= (e) => {
    e.preventDefault();
    dispatch(setOptionFilters({location})),
    dispatch(getAllProperties({...filters, location}));
  }
  
  const handleChange = (e) => {
    const {value} = e.target;

    setLocation(value);
  }

  useEffect(() => {
    setLocation(filters.location)
  }, [])
  

  return (
    <Container>
      <Box>
        <Label>Where</Label>
        <Input value={location} onChange={handleChange} placeholder="Name a place..."></Input>
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
      {/* <Box>
        <Label>Guest</Label>
        <Input placeholder="Add Guests"></Input>
      </Box> */}
      <Filters />
      <SearchButton onClick={handleSearch} type="submit">
        <FiSearch />
      </SearchButton>
    </Container>
  )
}

export default SearchBar
