import React, { useState } from "react"
import {
  FiltersButton,
  FilterForm,
  ModalTitle,
  ModalField,
  ModalLabel,
  ModalSelect,
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
} from "./styled"
import { MdFilterAlt } from "react-icons/md"
import Modal from "../modal/modal"

export default function Filters() {
  const [modalShow, setModalShow] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    console.log("clicked")
    setModalShow(!modalShow)
  }

  return (
    <div>
      <FiltersButton onClick={handleClick}>
        <MdFilterAlt />
      </FiltersButton>
      <Modal
        overlayShow={true}
        modalShow={modalShow}
        setModalShow={setModalShow}>
        <ModalTitle>Filtros </ModalTitle>
        <FilterForm>
          <ModalField>
            <ModalLabel>Max-Capacity:</ModalLabel>
            <ModalSelect name="MaxPersonas">
              <option defaultValue={true} value={"default"}>
                {" "}
              </option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              {/* <option value={"5"}>5</option> */}
              <option value={"+5"}>+5</option>
            </ModalSelect>
          </ModalField>
          <ModalField>
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
          </ModalField>
          <ModalField>
            <ModalLabel>Rooms:</ModalLabel>
            <ModalSelect name="Max-rooms">
              <option defaultValue={true} value={"default"}>
                {" "}
              </option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              <option value={"6"}>6</option>
            </ModalSelect>
          </ModalField>
          <ModalField>
            <ModalLabel>Pets:</ModalLabel>
            <CheckBoxWrapper>
              <CheckBox id="checkbox" type="checkbox" name="pets" />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </ModalField>
        </FilterForm>
      </Modal>
    </div>
  )
}
