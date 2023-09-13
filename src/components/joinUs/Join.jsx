import React, { useState } from "react";
import StepNavigation from "./stepNavigation";
import { Button } from "../../elements";
import {
    MainContainer,
    Container,
    PhotoWrapper,
    TextWrapper,
    Img,
    ContentBox
  } from './style'
import './index.css';

function Map() {

  const labelArray = ['Заявка в ФПС', 'БЕКОСО', 'Регистрация и оплата взносов', 'Получение карты']
  const textArray = [
    <div>
        <div>
            <h4>Обратись к региональному представителю ОСОО «ФПСР»</h4>
            <p>
                <strong>E-mail: </strong>  
                <a href="mailto:27@ipsc.ru">27@ipsc.ru</a>
            </p>
        </div>
    </div>, 
    <div>
        <h4>Пройди курс «Безопасное и квалифицированное обращения с оружием» у сертифицированного инструктора ОСОО «ФПСР»</h4>
        <h4>и подготовь необходимые документы:</h4>
        <dev>
            <li>Копия первой страницы паспорта и страницы с актуальной регистрацией;</li>
            <li>Фотография 3*4 (цветная или черно-белая);</li>
            <li><a href="http://ipsc.ru" target="_blank">Соглашение</a> на обработку своих персональных данных;</li>
            <li><a href="http://ipsc.ru">Анкета для вступления</a>.</li>
        </dev>
    </div>,
    <div>
      <h4>Зарегистрируйся на <a href="http://ipsc.ru" target="_blank">ipsc.ru</a> и оплати вступительный и ежегодный взносы</h4>
      <h5>Вступительный взнос: 2000 рублей</h5>
      <h5>Ежегодный взнос: 3000 рублей — за 1 год, либо 12000 рублей — за 5 лет</h5>
      <h5>Подробнее о взносах можно узнать на <a href="http://ipsc.ru" target="_blank">ipsc.ru</a></h5>
    </div>, 
    <div>
      <h4>Получи карту члена в ОСОО «ФПСР» в региональном отделение ОСОО «ФПСР»</h4>
    </div>
]

const [currentStep, updateCurrentStep] = useState(1);

function updateStep(step) {
    updateCurrentStep(step);
}

  return (
    <div className="App">
      <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
      <p>{textArray[currentStep-1]}</p>
      <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Предыдущий шаг</button>
      <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep+1)}>Следующий шаг</button>
    </div>
  );
}

const JoinMap = () => {
    return (
      <MainContainer>
        <Container>
          <TextWrapper>
            <ContentBox>
              <h3>
                Присоединись к нам за <span>4</span> шага
              </h3>
            </ContentBox>
          </TextWrapper>
        </Container>
        {Map()}
      </MainContainer>
    );
  };

export default JoinMap;
