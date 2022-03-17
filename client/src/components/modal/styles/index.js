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
  border-radius: 15px;
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
  z-index: 100;

  &:hover {
    background: #0a0a0a;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  h3 {
    font-weight: 500px;
    font-size: 16px;
    color: #1766dc;
  }
`
