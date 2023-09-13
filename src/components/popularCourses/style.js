import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 100px 0;
  background: #f0f2f4;
`;
export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  max-width: 1140px;

  padding: 0 2em;
  width: 80%;
`;
export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 3.5rem;
`;
export const HeaderContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
  /* width: 100%; */
  margin: 0 auto;
`;

export const HeaderContentWrapper = styled.div`
 padding-right: 15px;
  padding-left: 15px;
  h2 {
color: #232323;
font-family: "Barlow Condensed",sans-serif;
font-size: 38px;
font-weight: 700;
letter-spacing: .5px;
line-height: 1.2;
margin-bottom: .5rem;
margin-top: 1.5rem;
text-align: center;
text-transform: uppercase;
  }
`;
export const StyledDiv = styled.div`
  margin: 0 auto;
  background: #f5634b;
  width: 45px;
  height: 4px;
`;
export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 3em;
`;
export const BodyContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding: 0 15px 30px 15px;
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
export const BodyWrapper = styled.div`
  min-width: 0;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  img {
      width: 100%;
      display: block;
  }
`;
export const BodyContent = styled.div`
    padding: 1.25rem;

    h4{
color: #232323;
cursor: pointer;
font-family: Montserrat,sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: .5px;
line-height: 30px;
margin-bottom: 0;
margin-top: 0;
text-align: left;
word-wrap: break-word;
    }
    
`;
export const Footer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;
export const FooterContainer = styled.div`
margin: 0 auto;`;
export const FooterWrapper = styled.div``;
