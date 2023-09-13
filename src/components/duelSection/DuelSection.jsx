import React from "react";
import { Button } from "../../elements";
import fitnessImg from '../../images/bg-5.jpg'
import {
  MainContainer,
  Container,
  PhotoWrapper,
  TextWrapper,
  Img,
  ContentBox
} from './style'

const DoublePanel = () => {
  return (
    <MainContainer>
      <Container>
        <PhotoWrapper>
          <Img
            src={fitnessImg}
            alt=""
          />
        </PhotoWrapper>

        <TextWrapper>
          <ContentBox>
            <h3>
              WE’VE SKILL IN WIDE <span>RANGE OF FITNESS</span> AND OTHER BODY HEALTH
              FACILITY.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Aliquam lorem ante, dapibus in.
            </p>
            <Button>Learn More</Button>
          </ContentBox>
        </TextWrapper>
      </Container>
    </MainContainer>
  );
};

export default DoublePanel;

