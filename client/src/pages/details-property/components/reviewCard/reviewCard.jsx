import {
  ContainerCard,
  ContainerComment,
  ContainerStars,
  FillStarIcon,
  Title,
} from "./styles"

export default function ReviewCard({ title, rating, comment }) {
  return (
    <ContainerCard>
      <ContainerStars>
        {rating.map(e => (
          <FillStarIcon key={e} />
        ))}
      </ContainerStars>
      <Title>{title}</Title>
      <ContainerComment>
        <p>{comment}</p>
      </ContainerComment>
    </ContainerCard>
  )
}
