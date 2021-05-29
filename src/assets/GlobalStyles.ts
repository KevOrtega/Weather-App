import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    #root {
        --aqua-marine-blue: #71e2d0;
        --hit-gray: #a2adb8;
        --malibu: #71ddff;
        --regent-gray: #8b98a6;
        --slate-gray: #708995;
        --white: #fff;

        --font-regular: 'montserrat', 'Verdana', 'Times New Roman', Times, serif;
    }

    * {
        font-family: var(--font-regular);
        font-size: 1em;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--slate-gray);
    }


    html, body, #root, main {
        height: 100vh;
        min-width: 300px;
        overflow: hidden;
    }

    body {
        font-size: 2vmin;
    }

    .page--enter {
        transform: translateX(-100%);
    }

    .page--enter-active {
        transform: translateX(0);
    }

    .page--exit {
        transform: translateX(0);
    }

    .page--exit-active {
        transform: translateX(-100%);
    }

    .second-page--enter {
        transform: translateX(100%);
    }

    .second-page--enter-active {
        transform: translateX(0);
    }

    .second-page--exit {
        transform: translateX(0);
    }

    .second-page--exit-active {
        transform: translateX(100%);
    }
`