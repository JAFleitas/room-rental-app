import { useState } from "react"
import Modal from "../../../../components/modal/modal"

export default function Reviews({ rating, AiFillStarSt, numberOfReviews }) {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <AiFillStarSt />
      <h5>{rating}</h5>
      <h5>
        <a onClick={() => setModalShow(!modalShow)}>
          {numberOfReviews} reviews
        </a>
      </h5>
      <Modal
        overlayShow={true}
        modalShow={modalShow}
        setModalShow={setModalShow}>
        <div>
          {" "}
          <h1> Hello</h1>
        </div>
      </Modal>
    </>
  )
}
