import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Barlow+Condensed:400,500,600,700|Montserrat|Poppins:400,500,600,700");
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,400&display=swap');
*, ::after, ::before {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    color: rgba(0, 0, 0, 0.6);
}

img {
    max-width: 100%;
    display: block;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    color: #232323;
    letter-spacing: .5px;
    margin-top:0;
  }


`
