import { createGlobalStyle } from "styled-components"

export const Globalcss = createGlobalStyle`
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
    font-family: 'Open Sans', sans-serif;
	font-size: 15px;
	font-weight: lighter;
	color: #242323dd;
  }

`
