import styled from "styled-components"

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ overlayShow }) =>
    overlayShow ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)"};
  padding: 40px;
  display: flex;
  align-items: ${({ positionModalY }) => positionModalY ?? "center"};
  justify-content: ${({ positionModalX }) => positionModalX ?? "center"};

  z-index: 100;
`

export const ContainerModal = styled.div`
  width: ${({ width }) => width ?? "500px"};
  min-height: 100px;
  max-height: 100vh;
  background: #fff;
  position: relative;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${({ padding }) => padding ?? "20px"};
  overflow: auto;
`
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s easy all;
  border-radius: 5px;
  color: #1766dc;
  width: 24px;
  height: 24px;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
