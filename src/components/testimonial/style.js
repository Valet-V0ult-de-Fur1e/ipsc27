import styled from 'styled-components'
import { FaQuoteLeft } from "react-icons/fa";
import imgBg from "../../images/bg-cta.jpg"


export const MainSection = styled.div`
  padding: 100px 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 1.1), rgba(0, 0, 0, 0.7)),
    url(${imgBg}) no-repeat no-repeat;
  background-size: cover;
  right: 5;
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;
export const Header = styled.div`
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
`;
export const TestimonialWrapper = styled.div``;
export const StyledTestimonial = styled.div`
margin-bottom: 2.5em;
text-align: center;
h3 {

    color: #fff;
    font-size: 28px;
    line-height: 38px;
}

p {
    box-sizing: border-box;
color: rgba(255,255,255,.5);
font-family: Montserrat,sans-serif;
line-height: 28.8px;
margin-bottom: 1.5rem;
margin-top: 1.5rem;
text-align: center;
}

h4 {
    box-sizing: border-box;
color: #fff;
font-family: "Barlow Condensed",sans-serif;
font-size: 22px;
font-weight: 400;
letter-spacing: .5px;
line-height: 30px;
margin-bottom: 0;
margin-top: 0;
text-align: center;
text-transform: capitalize;
}

span {
    box-sizing: border-box;
color: rgba(255,255,255,.5);
font-family: Montserrat,sans-serif;
line-height: 28.8px;
text-align: center;
}
`;
export const HeaderContentWrapper = styled.div`
    margin-bottom: 3em;
h2 {
    color: #fff;
    font-size: 38px;
    margin-top: .5rem;
}
`;
export const HeaderWrapper = styled.div``;
export const StyledDiv = styled.div`
  margin: 0 auto;
  background: #f5634b;
  width: 45px;
  height: 4px;
`;
export const Quote = styled(FaQuoteLeft)`
  font-size: 36px;
  color: #f5634b;
  margin-bottom: 1em;
`;
