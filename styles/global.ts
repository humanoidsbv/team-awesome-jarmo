import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
box-sizing: border border-box;
margin: 0;
}

button {
background: none;
border: none;
cursor: pointer;
}

input {
	margin: 5px 0px;
	padding: none;
	box-sizing: border-box;
	border: 1px solid #E6EAEE;
	border-radius: 4px;
	
}

@font-face {
font-family: 'Bello-Script';
src: url(/fonts/bello-script.ttf) format("truetype");
}

@font-face {
font-family: "Proxima Nova";
src: url(/fonts/proxima-nova-regular.woff) format("truetype");
}
 `;

export default GlobalStyle;
