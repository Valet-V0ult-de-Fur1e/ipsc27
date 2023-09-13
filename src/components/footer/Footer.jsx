import React from "react";
import {
  MainContainer,
  Container,
  ContentWrapper,
  FooterColumn1,
  FooterColumn2,
  FooterContentWrapper,
  FooterColumnTitle,
  LinkContainer,
  FooterColumn3,
  FooterColumn4
} from "./style";

const Footer = () => {
  return (
    <MainContainer>
      <Container>
            <h2 style={{"color": "#fff"}}>ФЕДЕРАЦИЯ ПРАКТИЧЕСКОЙ СТРЕЛЬБЫ ХАБАРОВСКОГО КРАЯ</h2>
            <p>
            Региональные спортивные федерации входят в структуру Федерации практической стрельбы России. Основной целью деятельности регионального отделения является оказание Федерации содействия в развитии вида спорта «практическая стрельба», поддержка и координация деятельности членов Федерации, развивающих данный вид спорта в Российской Федерации на территории соответствующего субъекта Российской Федерации и содействие их взаимодействию.
            </p>
      </Container>
    </MainContainer>
  );
};

export default Footer;
