import React from "react";
import {
  Container,
  CardWrapper,
  ContentWrapper,
  Card
} from './style'

const CardSection = () => {
  return (
    <Container>
      <CardWrapper>
        <ContentWrapper>
          <Card>
            <h3>Modern Equipment</h3>
            <p>
              Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam
              vitae varius.
            </p>
          </Card>
        </ContentWrapper>
        <ContentWrapper>
          <Card>
            <h3>Professional Trainer</h3>
            <p>
              Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam
              vitae varius.
            </p>
          </Card>
        </ContentWrapper>
        <ContentWrapper>
          <Card>
            <h3>Healthy Diet Plan</h3>
            <p>
              Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam
              vitae varius.
            </p>
          </Card>
        </ContentWrapper>
      </CardWrapper>
    </Container>
  );
};

export default CardSection;


