import { IoCloseOutline } from "react-icons/io5"
import { Overlay, ContainerModal, CloseButton, HeaderTitle } from "./styles"
export default function Modal({
  children,
  modalShow,
  setModalShow,
  overlayShow,
  positionModalY,
  positionModalX,
  padding,
  width,
  title,
}) {
  return (
    <>
      {modalShow && (
        <Overlay
          overlayShow={overlayShow}
          positionModalY={positionModalY}
          positionModalX={positionModalX}>
          <ContainerModal padding={padding} width={width}>
            {title && (
              <HeaderTitle>
                <h3>{title}</h3>
              </HeaderTitle>
            )}
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
