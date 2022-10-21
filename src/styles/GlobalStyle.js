import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, section, h1, h2, h3, h4 {
        padding: 0;
        margin: 0;
    }
    body {
        background: #e9ecef;
    }
    a {
        text-decoration: none;
    }
`

export default GlobalStyle;