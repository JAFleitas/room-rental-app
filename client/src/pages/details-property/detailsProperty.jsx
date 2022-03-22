// #6f5fca
// #27276b
// #1766dc
import { useDispatch, useSelector } from "react-redux"
import { IoChevronBackSharp } from "react-icons/io5"
import { lazy, Suspense, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import Reviews from "./components/reviewModal/reviews"
import MapDetail from "./components/map/map"
import {
  ContainerPageDetails,
  DescriptionContainer,
  StarRating,
  AiFillStarSt,
  BotonBack,
  ServicesSt,
  DivReview,
} from "./styled-components"
import {
  ContainerMap,
  ContainerMapAndTitle,
} from "./styled-components/map.styles"

import { ContainerImages } from "./components/images-detail/styles"

import { actionGetPropertyById } from "../../redux/actions"
import ReviewContainer from "./components/reviewsCarousel/reviewContainer"

const Images = lazy(() => import("./components/images-detail/imagesDetail"))

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()

  //dispatch
  const dispatch = useDispatch()
  const propertyDetails = useSelector(state => state.detailsOfProperty)
  useEffect(() => {
    dispatch(actionGetPropertyById(id))
  }, [])

  return (
    <ContainerPageDetails>
      <ContainerMapAndTitle>
        <DescriptionContainer>
          <BotonBack>
            <button onClick={() => navigate("/")}>
              <IoChevronBackSharp />
            </button>
          </BotonBack>
          <div>
            <h2>{propertyDetails.name}</h2>
          </div>

          <StarRating>
            <Reviews
              rating={propertyDetails.rating}
              AiFillStarSt={AiFillStarSt}
              numberOfReviews={239}
            />
          </StarRating>
        </DescriptionContainer>

        <ContainerMap>
          <MapDetail />
        </ContainerMap>
      </ContainerMapAndTitle>

      <Suspense fallback={<ContainerImages></ContainerImages>}>
        {propertyDetails.image && <Images />}
      </Suspense>

      <DescriptionContainer>
        <h1>What services does the place offer?</h1>
        <ServicesSt></ServicesSt>
      </DescriptionContainer>

      <DescriptionContainer>
        <h1>Description</h1>
        <p>{propertyDetails.description}</p>
      </DescriptionContainer>
      <DescriptionContainer>
        <DivReview>
          <AiFillStarSt />
          <h2>Reviews</h2>
        </DivReview>
        <ReviewContainer />
      </DescriptionContainer>
    </ContainerPageDetails>
  )
}
