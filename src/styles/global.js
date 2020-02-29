import { createGlobalStyle } from 'styled-components';
import 'rc-color-picker/assets/index.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
* {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    html, body, #root {
        height: 100%;
        background-color: ${props => props.theme.colors.white};
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font-size: 14px;
        font-family: 'Roboto';
    }
    a {
       text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;
