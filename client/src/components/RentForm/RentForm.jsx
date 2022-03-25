import React, { useState } from "react"
import {
  Container,
  Header,
  Price,
  Stars,
  IconStar,
  Form,
  FormField,
  FormSelect,
  FormInput,
  FormLabel,
  DateManager,
  SubmitButton,
} from "./styled"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function RentForm(props) {
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange

  console.log(dateRange)
  props = props.props
  //   const onChange = dates => {
  //     const [start, end] = dates
  //     setStartDate(start)
  //     setEndDate(end)
  //   }

  return (
    <Container>
      <Header>
        <Price>{props.price ? props.price : "185"}$</Price>
        <Stars>
          <IconStar />
          {props.rating}
        </Stars>
      </Header>
      <Form>
        <FormField>
          <FormLabel>Travelers: </FormLabel>
          <FormSelect type="select">
            <option key="1">1</option>
            <option key="2">2</option>
            <option key="3">3</option>
            <option key="4">4</option>
            <option key="5">5</option>
            <option key="+5">+5</option>
          </FormSelect>
        </FormField>
        <FormField>
          <DateManager
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={update => {
              setDateRange(update)
            }}
            isClearable={true}
          />
        </FormField>
        <SubmitButton>Reservar</SubmitButton>
      </Form>
    </Container>
  )
}

// () => {
// 	const [startDate, setStartDate] = useState(new Date());
// 	return (
// 	  <DatePicker
// 		selected={startDate}
// 		onChange={date => setStartDate(date)}
// 		excludeDateIntervals={[{start: subDays(new Date('03/10/2022'), 0), end: addDays(new Date('03/10/2022'), 5) }]}
// 		placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
// 	  />
// 	);
//   };
