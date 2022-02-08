import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    }

    body {
    font-size: 1.6rem;
    cursor: default;
    }


    a {
    text-decoration: none;
    }

    li {
    list-style: none;
    }
`;
