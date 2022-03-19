// #6f5fca
// #27276b
// #1766dc
import { IoChevronBackSharp } from "react-icons/io5"
import { lazy, Suspense, useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"
/* import Images from "./components/images-detail/imagesDetail" */

import Reviews from "./components/review/reviews"
import {
  ContainerPageDetails,
  DescriptionContainer,
  StarRating,
  AiFillStarSt,
  BotonBack,
  ServicesSt,
  DivReview,
} from "./styled-components"

import { ContainerImages } from "./components/images-detail/styles"
import getPropertyById from "../../utilities/getPropertyById"

const Images = lazy(() => import("./components/images-detail/imagesDetail"))

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [property, setProperty] = useState({})

  useEffect(() => {
    getPropertyById(id).then(res => setProperty(res[0]))
  }, [])

  return (
    <ContainerPageDetails>
      <DescriptionContainer>
        <BotonBack>
          <button onClick={() => navigate("/")}>
            <IoChevronBackSharp />
          </button>
        </BotonBack>
        <div>
          <h2>{property.name}</h2>
        </div>

        <StarRating>
          <Reviews
            rating={property.rating}
            AiFillStarSt={AiFillStarSt}
            numberOfReviews={239}
          />
        </StarRating>
      </DescriptionContainer>

      <Suspense fallback={<ContainerImages></ContainerImages>}>
        {property.image && <Images image={property.image} />}
      </Suspense>

      <DescriptionContainer>
        <h1>What services does the place offer?</h1>
        <ServicesSt></ServicesSt>
      </DescriptionContainer>

      <DescriptionContainer>
        <h1>Description</h1>
        <p>{property.description}</p>
      </DescriptionContainer>
      <DescriptionContainer>
        <DivReview>
          <AiFillStarSt />
          <h2>Reviews</h2>
        </DivReview>
      </DescriptionContainer>
    </ContainerPageDetails>
  )
}
