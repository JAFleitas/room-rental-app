import { ContainerCard, ContainerComment } from "./styles"
import Rating from "@mui/material/Rating"

export default function ReviewCard({ comment }) {
  return (
    <ContainerCard>
      <Rating
        name="read-only"
        value={comment?.rating}
        precision={0.5}
        readOnly
      />
      <ContainerComment>
        <p>{comment?.message}</p>
        <span>Comment on: {comment?.creationDate}</span>
        <p>By: {comment?.user?.name + " " + comment?.user?.lastname}</p>
      </ContainerComment>
    </ContainerCard>
  )
}
