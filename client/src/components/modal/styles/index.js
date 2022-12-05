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
  z-index: 200;
`

export const ContainerModal = styled.div`
  width: ${({ width }) => width ?? "500px"};
  min-height: 100px;
  max-height: 90vh;
  background: #001010;
  position: relative;
  border-radius: 10px;
  
  padding: ${({ padding }) => padding ?? "60px"};
  overflow: auto;
  
  @media screen and (max-width: 740px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
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
  color: ${({ outButton }) => (outButton ? "#fafafa" : "#1766dcaa")};
  width: 24px;
  height: 24px;
  z-index: 100;
  margin-left: 10px;

  &:hover {
    background: #0a0a0aaa;
  }

  svg {
    width: 100%;
    height: 100%;

    color: ${({ outButton }) => (outButton ? "#fafafa" : "#1766dcaa")};
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
    margin-right: 10px;
  }
`
