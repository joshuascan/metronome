import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        ${"" /* border: 1px solid red; */}
    }

    html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    }

    body {
    background-image: url("wood_bg.png");
    font-size: 1.6rem;
    cursor: default;
    }


    a {
    text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    li {
    list-style: none;
    }
`;
