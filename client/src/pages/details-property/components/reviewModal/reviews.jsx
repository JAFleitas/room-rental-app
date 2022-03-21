import { useState } from "react"
import Modal from "../../../../components/modal/modal"
import { reviewsObj } from "../../../../utilities/reviewsObjdemo"
import ReviewCard from "../reviewCard/reviewCard"

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
        setModalShow={setModalShow}
        width={"80%"}>
        {reviewsObj.map((e, i) => (
          <ReviewCard
            key={i}
            title={e.title}
            rating={e.rating}
            comment={e.comment}
          />
        ))}
      </Modal>
    </>
  )
}
