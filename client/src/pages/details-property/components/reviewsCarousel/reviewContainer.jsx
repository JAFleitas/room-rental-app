// import { reviewsObj } from "../../../../utilities/reviewsObjdemo"
import ReviewCard from "../reviewCard/reviewCard"
import {
  DivStar,
  Star,
  ContainerRating,
  ContainerAll,
  ContainerCards,
  ButtonSt,
} from "./styles"

export default function ReviewContainer({ comments, rating = 0 }) {
  return (
    <>
      {rating && (
        <ContainerAll>
          <ContainerRating>
            <DivStar>
              <h1>
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
            <div>
              <ButtonSt>See all reviews</ButtonSt>
            </div>
          </ContainerCards>
        </ContainerAll>
      )}
    </>
  )
}
