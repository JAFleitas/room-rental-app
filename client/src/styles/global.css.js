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
    min-height:100vh;
    background: rgb(199,250,255);
    background: linear-gradient(135deg, rgba(199,250,255,1) 0%, rgba(199,240,255,1) 15%, rgba(199,230,255,1) 30%, rgba(199,214,255,1) 45%, rgba(199,202,255,1) 60%, rgba(206,199,255,1) 75%, rgba(215,199,255,1) 90%, rgba(235,199,255,1) 100%);
  }

`
