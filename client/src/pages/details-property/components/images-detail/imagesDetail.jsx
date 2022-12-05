import { useState } from "react"


import Modal from "../../../../components/modal/modal"
import formatImages from "../../../../utilities/formatImages"
import {
  ContainerImages,
  PrincipalImage,
  Img,
  SecondaryImages,
  ContainerModalImages,
  ImageModal,
} from "./styles"

export default function Images({imagesPropertyDetails}) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <ContainerImages>
        <PrincipalImage>
          <Img
            onClick={() => setModal(true)}
            src={
              imagesPropertyDetails.length > 0 ? imagesPropertyDetails[0] : null
            }
            alt="image not found"
            filter={"true"}
          />
        </PrincipalImage>
        <SecondaryImages>
          {imagesPropertyDetails.slice(1, 5).map((element, i) => (
            <Img
              filter={"true"}
              onClick={() => setModal(true)}
              key={i}
              src={element}
              alt="image not found"
            />
          ))}
        </SecondaryImages>
      </ContainerImages>

      <Modal
        width={"90%"}
        modalShow={modal}
        setModalShow={setModal}
        title={"images"}
        overlayShow={true}
        outButton={"true"}>
        <ContainerModalImages>
          {imagesPropertyDetails.map((e, i) => (
            <ImageModal
              format={formatImages(i)}
              key={i}
              src={e}
              alt="image not found"
            />
          ))}
        </ContainerModalImages>
      </Modal>
    </>
  )
}
