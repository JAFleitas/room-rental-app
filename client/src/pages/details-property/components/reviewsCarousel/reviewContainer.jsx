import { useSelector } from "react-redux"
import { reviewsObj } from "../../../../utilities/reviewsObjdemo"
import ReviewCard from "../reviewCard/reviewCard"
import {
  DivStar,
  Star,
  ContainerRating,
  ContainerAll,
  ContainerCards,
  ButtonSt,
} from "./styles"
export default function ReviewContainer() {
  const rating = useSelector(state => state.detailsOfProperty.rating)
  return (
    <>
      {rating && (
        <ContainerAll>
          <ContainerRating>
            <DivStar>
              <h1>{rating}</h1>
              <Star />
            </DivStar>
          </ContainerRating>
          <ContainerCards>
            {reviewsObj.slice(0, 3).map((e, i) => (
              <ReviewCard
                key={i}
                title={e.title}
                rating={e.rating}
                comment={e.comment}
              />
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
