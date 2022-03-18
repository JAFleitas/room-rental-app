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
            filter={"true"}
          />
        </PrincipalImage>
        <SecondaryImages>
          {property.arrayImage.slice(1, 5).map((element, i) => (
            <Img
              filter={"true"}
              onClick={() => setModal(true)}
              key={i}
              src={element}
            />
          ))}
        </SecondaryImages>
      </ContainerImages>

      <Modal
        width={"90%"}
        modalShow={modal}
        setModalShow={setModal}
        title={property.name}
        overlayShow={true}>
        <ContainerModalImages>
          {property.arrayImage.map((e, i) => (
            <ImageModal format={formatImages(i)} key={i} src={e} />
          ))}
        </ContainerModalImages>
      </Modal>
    </>
  )
}
