import styled from "styled-components";

export const Container = styled.div`
/* margin: 5em 0; */
  padding: 4rem 0 0 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* max-height: 80vh; */
  justify-content: space-between;
`;

export const Card = styled.div`
/* width: 300px; */
  padding: 3rem;
  /* box-shadow: 2px 2px 20px rgba(90, 118, 253, 0.15); */
  border-radius: 10px;
  min-width: 200px;
  margin-bottom: 1em;
   h3 {
    box-sizing: border-box;
color: #232323;
font-family: "Barlow Condensed",sans-serif;
font-size: 1.75rem;
font-weight: 700;
letter-spacing: .5px;
line-height: 1.2;
margin-bottom: .5rem;
margin-top: 1rem;
position: relative;
text-align: left;
text-transform: uppercase;
transition: all 600ms;
word-wrap: break-word;
   }
  
 
`;
export const CardWrapper = styled.div`
  padding: 0 1rem;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  max-width: 1140px;
`;

export const ContentWrapper = styled.div`
    padding: 0 10px;
    flex: 1 1 30%;


`