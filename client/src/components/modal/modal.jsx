import { IoCloseOutline } from "react-icons/io5"
import { Overlay, ContainerModal, CloseButton } from "./styles"
export default function Modal({
  children,
  modalShow,
  setModalShow,
  overlayShow,
  positionModalY,
  positionModalX,
  padding,
  width,
}) {
  return (
    <>
      {modalShow && (
        <Overlay
          overlayShow={overlayShow}
          positionModalY={positionModalY}
          positionModalX={positionModalX}>
          <ContainerModal padding={padding} width={width}>
            <CloseButton onClick={() => setModalShow(false)}>
              <IoCloseOutline />
            </CloseButton>
            {children}
          </ContainerModal>
        </Overlay>
      )}
    </>
  )
}
