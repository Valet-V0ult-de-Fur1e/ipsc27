import React from "react";
import {
    MainContainer,
    Container,
    TextWrapper,
    ContentBox
  } from './style'

const DocumentsPlates = () => {
  return (
    <MainContainer>
        <Container>
          <TextWrapper>
            <ContentBox>
              <div>
                <h3>Документы</h3>
                <h4>Cрок действия аккредитации до <span>14.04.2027</span></h4>
              </div>
            </ContentBox>
          </TextWrapper>
        </Container>
      </MainContainer>
  );
};

export default DocumentsPlates;


