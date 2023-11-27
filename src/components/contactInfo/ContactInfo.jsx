import React from "react";
import { Button } from "../../elements";
import IPSC_LOGO from '../../images/IPSCktlogo.png'
import {
  MainContainer,
  Container,
  PhotoWrapper,
  TextWrapper,
  Img,
  ContentBox
} from './style'

const ContactInfo = () => {
  return (
    <MainContainer>
      <Container>
        <PhotoWrapper>
          <Img
            src={IPSC_LOGO}
            alt=""
          />
        </PhotoWrapper>

        <TextWrapper>
          <ContentBox>
            <h3>
              Контакты
            </h3>
            <h4>Телефон: <a href="tel:+7 (4212) 20-44-41">+7 (4212) 20-44-41</a></h4>
            <h4>Почта: <a href="mailto:27@ipsc.ru">27@ipsc.ru</a> </h4>
            <h4>Адрес: <a href="https://yandex.ru/maps/-/CDQ6M2kU">г.Хабаровск, проспект 60 лет Октября, д.156</a></h4>
            <a href="https://catalog.ipsc.ru/listing/ro_habarovskiy/?v=f9308c5d0596">
              <Button>Узнать больше</Button>
            </a>
          </ContentBox>
        </TextWrapper>
      </Container>
    </MainContainer>
  );
};

export default ContactInfo;

