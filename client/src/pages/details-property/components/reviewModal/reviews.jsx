import { useState } from "react"
import Modal from "../../../../components/modal/modal"
import ReviewCard from "../reviewCard/reviewCard"
import { useSelector } from "react-redux"

export default function Reviews({ rating, AiFillStarSt, numberOfReviews }) {
  const [modalShow, setModalShow] = useState(false)
  const comments = useSelector(state => state.detailsOfProperty.comments)

  return (
    <div style={{display:"flex",alignItems:"center"}}>
      <AiFillStarSt />
      <h5>
        {rating}
        {rating % 1 === 0 ? ".0" : null}
      </h5>
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
        {comments?.map((comment, i) => (
          <ReviewCard key={i} comment={comment} />
        ))}
      </Modal>
    </div>
  )
}
