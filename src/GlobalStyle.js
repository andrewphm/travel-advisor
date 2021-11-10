import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --headerHeight: 3.5rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    #root {
    }

    body {
        max-height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;

        color: #fff;
        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }
    }
`;
