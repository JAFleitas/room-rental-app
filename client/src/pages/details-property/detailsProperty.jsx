import { IoChevronBackSharp } from "react-icons/io5"
import { lazy, Suspense, useEffect, useState } from "react"
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
import ReviewContainer from "./components/reviewsCarousel/reviewContainer"
import RentForm from "../../components/RentForm/RentForm"

import { getPropertyById, GET_PROPERTY_BY_ID } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Images = lazy(() => import("./components/images-detail/imagesDetail"))

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  //dispatch
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPropertyById(id))
    setLoading(false)
    return () => {
      dispatch({
        type: GET_PROPERTY_BY_ID,
        payload: null,
      })
    }
  }, [])
  const property = useSelector(state => state.detailsOfProperty)
  return loading ? (
    <div>'Loading...'</div>
  ) : property ? (
    <ContainerPageDetails>
      <ContainerMapAndTitle>
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
              numberOfReviews={property.countReviews}
            />
          </StarRating>
        </DescriptionContainer>

        <ContainerMap>
          <MapDetail coordinates={property.coordinates} />
        </ContainerMap>
      </ContainerMapAndTitle>

      <Suspense fallback={<ContainerImages></ContainerImages>}>
        {property.image && <Images imagesPropertyDetails={property.image} />}
      </Suspense>

      <DescriptionContainer>
        <h1>What services does the place offer?</h1>

        {property.services ? (
          property.services.map(e => (
            <ServicesSt>
              {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
            </ServicesSt>
          ))
        ) : (
          <p>This property dont have services</p>
        )}
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
        <ReviewContainer
          comments={property.comments}
          rating={property.rating}
        />
      </DescriptionContainer>
      <RentForm props={property} />
    </ContainerPageDetails>
  ) : (
    <div>No se ha podido cargar la propiedad</div>
  )
}
