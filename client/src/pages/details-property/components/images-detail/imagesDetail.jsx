import { useState } from "react"
import Modal from "../../../../components/modal/modal"
import { ContainerModal } from "../../../../components/modal/styles"
import {
  ContainerImages,
  PrincipalImage,
  Img,
  SecondaryImages,
  ContainerModalImages,
  ImageModal,
} from "./styles"

export default function Images({ property }) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <ContainerImages>
        <PrincipalImage>
          <Img
            onClick={() => setModal(true)}
            src={property.arrayImage[0] ? property.arrayImage[0] : null}
            alt="image Property"
            filter={true}
          />
        </PrincipalImage>
        <SecondaryImages>
          {property.arrayImage.slice(1, 5).map((element, i) => (
            <Img
              filter={true}
              onClick={() => setModal(true)}
              key={i}
              src={element}
            />
          ))}
        </SecondaryImages>
      </ContainerImages>

      <Modal
        width={"80%"}
        padding={"40px"}
        modalShow={modal}
        setModalShow={setModal}
        title={"images"}
        overlayShow={true}>
        <ContainerModalImages>
          {property.arrayImage.map((e, i) => (
            <ImageModal key={i} src={e} />
          ))}
        </ContainerModalImages>
      </Modal>
    </>
  )
}
