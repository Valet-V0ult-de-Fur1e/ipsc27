import React from "react";
import {
  Container,
  CardWrapper,
  ContentWrapper,
  Card
} from './style'
import { Button } from "../../elements";

const DocumentsView = () => {
  return (
    <Container>
      <CardWrapper>
        <ContentWrapper>
          <Card>
            <a href="https://catalog.ipsc.ru/wp-content/uploads/2018/10/новое-свидетельство-МинЮст-ФПС-Хабаровского-края.pdf">
              <Button>Свидетельство</Button>
            </a>
          </Card>
        </ContentWrapper>
        <ContentWrapper>
          <Card>
            <a href="https://catalog.ipsc.ru/wp-content/uploads/2023/05/приказ-об-аккредитации-ФПС-Хабаровского-края-2023.pdf">
              <Button>Аккредитация</Button>
            </a>
          </Card>
        </ContentWrapper>
      </CardWrapper>
    </Container>
  );
};

export default DocumentsView;


