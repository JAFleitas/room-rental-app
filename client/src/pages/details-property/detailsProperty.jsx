// #6f5fca
// #27276b
// #1766dc
import { IoChevronBackSharp } from "react-icons/io5"

import { useNavigate } from "react-router-dom"

import Reviews from "./components/review/reviews"
import {
  ContainerPageDetails,
  ContainerImages,
  PrincipalImage,
  SecondaryImages,
  Img,
  DescriptionContainer,
  StarRating,
  AiFillStarSt,
  BotonBack,
  ServicesSt,
  DivReview,
} from "./styled-components"
export default function Details() {
  // obj e imagen de prueba .
  const imgSrc =
    "https://images.adsttc.com/media/images/5a33/42eb/b22e/3866/6000/00ac/large_jpg/45_Casa_Marindia_-_%C2%A9_Federico_Cairoli_(low).jpg?1513308897"

  const property = {
    arrayImage: [imgSrc, imgSrc, imgSrc, imgSrc, imgSrc],
    name: "Fifth house located in Monte Grande",
    rating: 4.9,
    numberOfReviews: 239,
    description:
      "Fifth house located in Monte Grande, in the La morita neighborhood near the town of Jaguel, the house has a 6-meter pool, barbecue, 4 bedrooms, 5 bathrooms, Wi-Fi, air conditioning and 3 televisions.",
    numberOfRooms: 4,
    maxNumberOfPeople: 8,
    services: {
      hasKitchen: true,
      hasAirConditioning: true,
      hasWifi: true,
      hasTelevision: true,
    },
  }

  const navigate = useNavigate()

  return (
    <ContainerPageDetails>
      <DescriptionContainer>
        <BotonBack>
          <button onClick={() => navigate("/")}>
            <IoChevronBackSharp />
          </button>
        </BotonBack>
        <div>
          <h2>{property.name} </h2>
        </div>

        <StarRating>
          <Reviews
            AiFillStarSt={AiFillStarSt}
            numberOfReviews={property.numberOfReviews}
          />
        </StarRating>
      </DescriptionContainer>

      <ContainerImages>
        <PrincipalImage>
          <Img
            src={property.arrayImage[0] ? property.arrayImage[0] : null}
            alt="image Property"
          />
        </PrincipalImage>
        <SecondaryImages>
          {property.arrayImage.slice(1, 5).map((element, i) => (
            <Img key={i} src={element} />
          ))}
        </SecondaryImages>
      </ContainerImages>

      <DescriptionContainer>
        <h1>What services does the place offer?</h1>
        <ServicesSt></ServicesSt>
      </DescriptionContainer>

      <DescriptionContainer>
        <h1>Description</h1>
        <p>
          {property.description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora corporis, ducimus, quos odio reprehenderit
          maiores, esse facere neque dicta sapiente voluptatibus dolor. Quod
          earum maiores eveniet, doloremque labore accusantium quibusdam?
        </p>
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
