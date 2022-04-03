import {
  ContainerCard,
  ContainerComment,
  ContainerStars,
  FillStarIcon,
  // Title,
} from "./styles"

export default function ReviewCard({ comment }) {
  let stars = [];

  for (let star = 0; star < comment.rating; star++) {
    stars.push(<FillStarIcon key={star} />)
  }
  // console.log(stars);
  return (
    <ContainerCard>
      <ContainerStars>
        {stars}
      </ContainerStars>
      <ContainerComment>
        <p>{comment.message}</p>
        <span>Comment on: {comment.creationDate}</span>
        <p>By: {comment.user.name + " " + comment.user.lastname}</p>
      </ContainerComment>
    </ContainerCard>
  )
}
