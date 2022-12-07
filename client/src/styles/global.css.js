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
  p, h4{
    color:  #e9e0e0ee;
  }
  .rdp {
  --rdp-cell-size: 40px;
  --rdp-accent-color: #0000ff;
  --rdp-background-color: #6504d4;
  --rdp-accent-color-dark: #3003e1;
  --rdp-background-color-dark: #180270;
  --rdp-outline: 2px solid var(--rdp-accent-color); /* Outline border for focused elements */
  --rdp-outline-selected: 3px solid var(--rdp-accent-color); /* Outline border for focused _and_ selected elements */

  margin: 1em;

  
}
.slick-dots li button:before
{
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: .25;
    color: #fff;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before
{
    opacity: .75;
    color: #fff;
}
@media (max-width: 520px){
    padding: 0px 15px;
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
    background: linear-gradient(180deg,#100010 ,#000000);
}
  
`

export const Title = styled.h1`
  width: 100%;
  font-size: 2.5rem;
  border-radius: 15px;
  border: 1px #a455ff solid;
  text-align: center;
  font-weight: 800;
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