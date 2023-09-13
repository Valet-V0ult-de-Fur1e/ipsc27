import React from "react";
import { Button } from "../../elements";

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
  Footer,
  FooterContainer,
  FooterWrapper,
} from "./style";
const PopularCourses = ({ courses = [] }) => {
  return (
    <MainContainer>
      <Container>
        <Header>
          <HeaderContainer>
            <HeaderContentWrapper>
              <StyledDiv></StyledDiv>
              <h2>POPULAR COURSES</h2>
              <p>
                We offer more than 35 group exercis, aerobic classes each week.
              </p>
            </HeaderContentWrapper>
          </HeaderContainer>
        </Header>
        <Body>
          {courses.map((course) => (
            <BodyContainer>
              <BodyWrapper>
                <img src={course.image} alt="" />
                <BodyContent>
                  <h4>{course.title}</h4>
                  <p>{course.mentor}</p>
                </BodyContent>
              </BodyWrapper>
            </BodyContainer>
          ))}
        </Body>
        <Footer>
          <FooterContainer>
            <FooterWrapper>
              <Button>See All Our Courses</Button>
            </FooterWrapper>
          </FooterContainer>
        </Footer>
      </Container>
    </MainContainer>
  );
};

export default PopularCourses;
