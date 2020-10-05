import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #000;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
    }

    body, input, button {
        font-family: 'Calibri', serif;
    }

    button {
        cursor: pointer;
    }

`;
