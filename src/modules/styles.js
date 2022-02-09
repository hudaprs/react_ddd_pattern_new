// Styled Components
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  form {
    .form-group {
      margin-bottom: 15px;

      label {
        margin-right: 10px;
      }

      input {
        margin-top: 5px;
        border: 1px #ccc solid;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
        font-size: 14px;
      }
    }
    
    .error {
      color: red;
    }

    button {
      display: inline-block;
      border: none;
      padding: 10px;
      border: 5px;
      width: 100%;
      cursor: pointer;
    }
  }
`
