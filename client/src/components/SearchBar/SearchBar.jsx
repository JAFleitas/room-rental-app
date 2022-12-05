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
  ButtonFilterShowMovil,
  ContainerButtons,
  ButtonFilterShow,
  Article,
  ImageContainer,
  ImageSearch,
  Section,
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

import image1 from "../../assets/Background-images/bckgr01.jpg"
import { useRef } from "react"
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
    setSearched(location)
    search.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleChange = e => {
    const { value } = e.target

    setLocation(value)
  }

  useEffect(() => {
    setLocation(filters.location)
  }, [])
 const [searched, setSearched] = useState("")
 const search = useRef(null)
  return (
    <Section>
    <Article id="container">
      <ImageContainer>
        <ImageSearch src={image1}/>
      </ImageContainer>
      <Container>
        <ContainerSearchBar>
          <Box>
            <Label>Location</Label>
            <Input
              value={location}
              onChange={handleChange}
              placeholder="Where?"></Input>
          </Box>
          <div style={{display:"flex",gap:"8px" }}>
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
          </div>

          <ContainerButtons>
            <SearchButton onClick={handleSearch} type="submit">
              Search <FiSearch />
            </SearchButton>
           {/*  <ButtonFilterShowMovil onClick={() => setOpenFilters(!openFilters)}>
              <FilterAltIcon />
              {openFilters ? "Close" : "Open"} filters
            </ButtonFilterShowMovil> */}
          </ContainerButtons>
        </ContainerSearchBar>
      </Container>
      
      {/*   <ButtonFilterShow onClick={() => setOpenFilters(!openFilters)}>
          <FilterAltIcon />
          {openFilters ? "Close" : "Open"} filters
        </ButtonFilterShow>
        {openFilters && <Filters />}
      <Sorters /> */}
      <h2 ref={search} id="property">ALL PROPERTIES:</h2>
      {searched.length>0 && <h3 style={{fontSize:"16px",fontWeight:"600",color:"#9238fa"}} > search result with "{searched}"</h3>}
    </Article>
    </Section>
  )
}

export default SearchBar
