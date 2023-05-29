import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:root{
    font-size: 62.5%; /* 10px */
    font-family: "Inter", sans-serif;
}

body{
    font-size: 1.6rem; /* 16px */
    background-color: #7C3AED;
}

a{
    text-decoration: none;
}

`;
