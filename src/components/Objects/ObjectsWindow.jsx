import React from "react";
import {
  MainContainer,
  Container,
  Header,
  HeaderContainer,
  HeaderContentWrapper,
  StyledDiv,
  Body,
  BodyContainer,
  BodyContent,
  BodyWrapper,
} from "./style";
const ObjectsList = ({ objects = [] }) => {
  return (
    <MainContainer>
      <Container>
        <Header>
          <HeaderContainer>
            <HeaderContentWrapper>
              <StyledDiv></StyledDiv>
              <h2>Стрелковые объекты</h2>
            </HeaderContentWrapper>
          </HeaderContainer>
        </Header>
        <Body>
          {objects.map((object) => (
            <BodyContainer>
              <BodyWrapper>
                <img src={object.image} alt="" />
                <BodyContent>
                  <h4>{object.title}</h4>
                  <p>{object.city}</p>
                </BodyContent>
              </BodyWrapper>
            </BodyContainer>
          ))}
        </Body>
      </Container>
    </MainContainer>
  );
};

export default ObjectsList;
