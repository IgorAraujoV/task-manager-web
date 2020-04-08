import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, #root {
      min-height: 100vh;
      height: 100%;
    }

    input, button {
      border: none;
    }

    body, button, a, input {
      font-family: Arial, Helvetica, sans-serif;
    }

    button, a {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
`;
