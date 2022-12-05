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
  Services,
  PeopleAndRooms,
} from "./styled-components"
import {
  ContainerMap,
  ContainerMapAndTitle,
} from "./styled-components/map.styles"
import { ContainerImages } from "./components/images-detail/styles"
import ReviewContainer from "./components/reviewsCarousel/reviewContainer"
import RentForm from "../../components/RentForm/RentForm"
import CircularProgress from "@mui/material/CircularProgress"
import { getPropertyById, GET_PROPERTY_BY_ID } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Images = lazy(() => import("./components/images-detail/imagesDetail"))

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const userLoginId = useSelector(state => state.user.id)
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
  useEffect(() => {
    return () => {
      window.scroll(0, 0)
    }
  }, [])
  const property = useSelector(state => state.detailsOfProperty)
  return loading ? (
    <div style={{ display: "flex" }}>
      <CircularProgress />
    </div>
  ) : property ? (
    <ContainerPageDetails>
      <ContainerMapAndTitle>
        <DescriptionContainer>
          <div>
            <h1 style={{fontSize:"24px",paddingBottom:"24px"}}>{property.name}</h1>
          </div>
          <PeopleAndRooms>
            <h4>Rooms: {property.numberOfRooms}</h4>
            <h4>Max people: {property.maxNumberOfPeople}</h4>
          </PeopleAndRooms>
          <StarRating>
            <Reviews
              rating={property.rating}
              AiFillStarSt={AiFillStarSt}
              numberOfReviews={property.countReviews}
            />
           <BotonBack onClick={() => navigate("/")}>
             Return
          </BotonBack>
          </StarRating>
        </DescriptionContainer>

        <ContainerMap>
          <MapDetail coordinates={property.coordinates} />
        </ContainerMap>
      </ContainerMapAndTitle>

      <Suspense fallback={<ContainerImages></ContainerImages>}>
        {property.image && <Images imagesPropertyDetails={property.image} />}
      </Suspense>

      <Services>
        <h1>What services does the place offer?</h1>
        {property.services ? (
          property.services.map(e => (
            <ServicesSt key={e.id}>
              {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
            </ServicesSt>
          ))
        ) : (
          <p>This property dont have services</p>
        )}
      </Services>

      <DescriptionContainer>
        <h1>Description</h1>
        <p>{property.description}</p>
      </DescriptionContainer>
      <DescriptionContainer>
        <DivReview>
          <AiFillStarSt mb={"6px"} />
          <h2>Reviews</h2>
        </DivReview>
        {property?.comments?.length === 0 && property?.rating === 0 ? (
          <div>No comments yet</div>
        ) : (
          <ReviewContainer
            comments={property.comments}
            rating={property.rating}
          />
        )}
      </DescriptionContainer>
      {property?.userID === userLoginId ? (
        <div>You cannot rent your property!</div>
      ) : (
        <RentForm props={property} />
      )}
    </ContainerPageDetails>
  ) : (
    <div>No se ha podido cargar la propiedad</div>
  )
}
