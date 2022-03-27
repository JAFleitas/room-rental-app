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
import axios from "axios"
const api = import.meta.env.VITE_APP_API_URL

const Images = lazy(() => import("./components/images-detail/imagesDetail"))

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProperty = async () => {
      try {
        const { data } = await axios.get(
          `${api}/properties/getPropertyById/${id}`,
        )
        console.log(data);
        setProperty(data)
      } catch (error) {
        console.log(error.response)
      } finally {
        setLoading(false)
      }
    }

    getProperty()
  }, [])

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
