import styled from 'styled-components'

export const Button = styled.button`
display: inline-block;
background-image: linear-gradient(90deg,#14960a 0%,#1476ff 100%);
border: 1px solid transparent;
border-radius: 0;
color: #fff;
cursor: pointer;
letter-spacing: 1px;
line-height: 1.5;
padding: 18px 35px;
text-align: center;
text-decoration: none;
text-transform: uppercase;
transition: all .5s;
font-family: Montserrat,sans-serif;
font-size: 14px;

&:hover {
    background-image: linear-gradient(90deg, #1476ff 0%, #14960a 100%);
    outline: 0;
    transform: translateY(-5px);
}

`




// box-sizing: border-box;



// user-select: none;
// vertical-align: middle;