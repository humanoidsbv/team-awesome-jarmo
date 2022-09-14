import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border border-box;
    margin: 0;

 }

 @font-face {
font-family: 'Bello-Script';
src: url(/fonts/bello-script.ttf) format("truetype");
}

@font-face {
font-family: "Proxima Nova";
src: url(fonts/proxima-nova-regular.woff) format("truetype");
}
 `;

export default GlobalStyle;
