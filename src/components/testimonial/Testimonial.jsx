import React from "react";
import {
  MainSection,
  Container,
  CenterContent,
  ContentWrapper,
  Header,
  HeaderWrapper,
  HeaderContentWrapper,
  StyledDiv,
  TestimonialWrapper,
  StyledTestimonial,
  Quote,
} from './style'
const Testimonial = () => {
  return (
    <MainSection>
      <Container>
        <CenterContent>
          <ContentWrapper>
            <Header>
              <HeaderWrapper>
                <HeaderContentWrapper>
                  <StyledDiv />
                  <h2>WHAT PEOPLE SAY</h2>
                </HeaderContentWrapper>
              </HeaderWrapper>
            </Header>
            <TestimonialWrapper>
              <StyledTestimonial>
                <Quote />
                <h3>A GREAT START TO A HEALTHY LIFE</h3>
                <p>
                  Laboriosam molestias aperiam sit corporis sunt, hic veritatis
                  possimus optio reprehenderit, laudantium excepturi,
                  consequatur. Assumenda hic error veniam exercitationem
                </p>
                <div>
                  <h4>John Donas</h4>
                  <span>Manager</span>
                </div>
              </StyledTestimonial>
              <StyledTestimonial>
                <Quote />
                <h3>A GREAT START TO A HEALTHY LIFE</h3>
                <p>
                  Laboriosam molestias aperiam sit corporis sunt, hic veritatis
                  possimus optio reprehenderit, laudantium excepturi,
                  consequatur. Assumenda hic error veniam exercitationem
                </p>
                <div>
                  <h4>John Donas</h4>
                  <span>Manager</span>
                </div>
              </StyledTestimonial>
              <StyledTestimonial>
                <Quote />
                <h3>A GREAT START TO A HEALTHY LIFE</h3>
                <p>
                  Laboriosam molestias aperiam sit corporis sunt, hic veritatis
                  possimus optio reprehenderit, laudantium excepturi,
                  consequatur. Assumenda hic error veniam exercitationem
                </p>
                <div>
                  <h4>John Donas</h4>
                  <span>Manager</span>
                </div>
              </StyledTestimonial>
              <StyledTestimonial>
                <Quote />
                <h3>A GREAT START TO A HEALTHY LIFE</h3>
                <p>
                  Laboriosam molestias aperiam sit corporis sunt, hic veritatis
                  possimus optio reprehenderit, laudantium excepturi,
                  consequatur. Assumenda hic error veniam exercitationem
                </p>
                <div>
                  <h4>John Donas</h4>
                  <span>Manager</span>
                </div>
              </StyledTestimonial>
            </TestimonialWrapper>
          </ContentWrapper>
        </CenterContent>
      </Container>
    </MainSection>
  );
};

export default Testimonial;

