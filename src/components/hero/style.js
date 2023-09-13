import styled from 'styled-components'
import heroBg from "../../images/bg-main.jpg";



export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${heroBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  max-height: 100%;
  padding: 200px calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  margin-left: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5rem;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 95px;
  line-height: 95px;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: white;

  span {
    color: #1bc90e;
  }

  @media screen and  (max-width: 480px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const StyledBox = styled.span`
  color: #fff;
  letter-spacing: 5px;
  border: 2px solid #fff;
  padding: 3px 15px 5px 15px;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 1.5rem;
  display: inline-block;
  line-height: 1.2;
  font-family: "Barlow Condensed", sans-serif;

`;
