import React from "react"

import { FiSearch } from "react-icons/fi"
import { useState } from "react"
import { Input, SearchButton, Container, Search, Text, Icon, Label, Box } from "./styled"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function SearchBar() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Container >
    <Box>
    <Label>Where</Label>
    <Input placeholder="Where are you doing?"></Input>

    </Box>
    <Box>
    <Label>Check in</Label>
    <DatePicker  customInput={<Input />} selected={startDate} onChange={(date) => setStartDate(date)} />

    </Box>
    <Box>
    <Label>Check-Out</Label>
    <DatePicker customInput={<Input />} selected={endDate} onChange={(date) => setEndDate(date)} />

    </Box>
    <Box>
    <Label>Guest</Label>
    <Input placeholder="Add Guests?"></Input>

    </Box>
    <SearchButton type="submit">
      <FiSearch />
    </SearchButton>
  </Container>


  )
}

export default SearchBar
