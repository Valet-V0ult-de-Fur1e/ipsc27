import styled from 'styled-components'

export const MainContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 45px;
  background: #181a23;

  p, li {
    color: #fff;
    font-size: 14px;
    line-height: 25.2px;
    margin-bottom: 1rem;
    margin-top: 0;
    opacity: 0.8;
    text-align: left;
  }
`;
export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 80%;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: row;
`;
export const FooterColumn1 = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  h2 {
    box-sizing: border-box;
    color: #fff;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    margin-top: 0;
    text-align: left;
    text-transform: uppercase;
  }

  
`;
export const FooterColumn2 = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
export const FooterContentWrapper = styled.div`

color: #fff;
ul {
  list-style: none;
  padding: 0;
}
span {
  font-size: 14px;
}
`;
export const FooterColumn3 = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  @media (min-width: 992px) {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
`;
export const FooterColumn4 = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
export const LinkContainer = styled.div``;

export const FooterColumnTitle = styled.h4`
color: #fff;
font-family: "Barlow Condensed",sans-serif;
font-size: 18px;
font-weight: 700;
letter-spacing: 1px;
line-height: 30px;
margin-bottom: 1.5rem;
margin-top: 0;
text-align: left;
text-transform: uppercase;
`