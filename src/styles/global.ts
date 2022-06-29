import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --primary: #1e1e1e;
    --secondary: #3e3e42;
    --gray-white: #e5e5e5;
    --white: #fff;
    --green: #00a000;
    --blue: #4040ff;
    --red: #ff4040;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    overflow-x: hidden;

    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    width: 100%;
    overflow-x: hidden;
    background-color: var(--primary);
  }

  body, input, textarea, button, p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`
