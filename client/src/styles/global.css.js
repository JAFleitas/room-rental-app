import styled ,{ createGlobalStyle } from "styled-components"

export const Globalcss = createGlobalStyle`
#root{
    font-family: 'Open Sans', sans-serif;
	font-size: 15px;
	font-weight: lighter;
	color:  #e9e0e0ee;
    width: 100%;
    max-width:1224px;
    display: flex;
    flex-direction: column;
    margin:auto;
    min-height:100vh;
    padding: 0px 40px;
   p {
    color:  #e9e0e0ee;
   }

}
*{
  box-sizing: border-box;
}
*::-webkit-scrollbar {
    -webkit-appearance: none;
}
*::-webkit-scrollbar:vertical {
    width:8px;
}
*::-webkit-scrollbar-button:increment {
    display: none;
} 
*::-webkit-scrollbar:horizontal {
    height: 2px;
   
}
*::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 15px;
    border: 2px solid #f1f2f3;
}

*::-webkit-scrollbar-track {
    border-radius: 15px;  
}
*::-webkit-scrollbar-button {
    display: none;
}
body {
    display: flex;
    margin: auto;
    background: #dfdfdf;
    background: linear-gradient(180deg,#101010,#000000);
}
  
`

export const Title = styled.h1`
  width: 100%;
  font-size: 2.5rem;
  border-radius: 15px;
  border: 1px #a455ff solid;
  text-align: center;
  color:transparent;
   background: #ccc;
   background: linear-gradient(90deg, #43048a, #b574ff, #43048a);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`
export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  gap:20px;
  @media (max-width: 720px) {
    width: 60%;
  }
`