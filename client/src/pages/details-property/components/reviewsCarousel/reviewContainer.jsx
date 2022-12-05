import { useState } from "react"
import { useSelector } from "react-redux"
import Modal from "../../../../components/modal/modal"
import ReviewCard from "../reviewCard/reviewCard"
import {
  DivStar,
  Star,
  ContainerRating,
  ContainerAll,
  ContainerCards,
  ButtonSt,
} from "./styles"

export default function ReviewContainer({ rating = 0 }) {
  const comments = useSelector(state => state.detailsOfProperty.comments)
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      {rating && (
        <ContainerAll>
          <ContainerRating>
            <DivStar>
              <h1 style={{ fontSize: "70px", fontWeight: "800" }}>
                {rating}
                {rating % 1 === 0 ? ".0" : null}
              </h1>
              <Star />
            </DivStar>
          </ContainerRating>
          <ContainerCards>
            {comments.slice(0, 3).map(comment => (
              <ReviewCard key={comment.id} comment={comment} />
            ))}
            <div style={{alignSelf:"center",paddingTop:"20px"}}>
              <ButtonSt onClick={() => setModalShow(true)}>
                See all reviews
              </ButtonSt>
            </div>
          </ContainerCards>
          <Modal
            overlayShow={true}
            modalShow={modalShow}
            setModalShow={setModalShow}
            width={"80%"}>
            {comments?.map((comment, i) => (
              <ReviewCard key={i} comment={comment} />
            ))}
          </Modal>
        </ContainerAll>
      )}
    </>
  )
}
