import styled from 'styled-components'

export const MainContainer = styled.div`
  position: relative;
  padding: 50px 0;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  max-width: 1140px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const PhotoWrapper = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  display: inline-block;
  width: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

export const TextWrapper = styled.div`
  padding: 2em;
`;

export const ContentBox = styled.div`
h3 {
font-family: "Barlow Condensed",sans-serif;
font-size: 38px;
font-weight: 700;
letter-spacing: .5px;
line-height: 45.6px;
text-align: left;
text-transform: uppercase;

}

span {
    color: #f5634b;

}

`;
