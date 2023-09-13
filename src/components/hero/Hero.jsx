import React from "react";
import { Button } from "../../elements";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  StyledBox,
  HeroH1,
} from "./style";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <StyledBox>Федерация практической стрельбы Хабаровского края</StyledBox>
          <HeroH1>
            СКОРОСТЬ <br></br>
            <span>ТОЧНОСТЬ</span>
            <br />
            БЕЗОПАСНОСТЬ
          </HeroH1>
          <a href="https://ipsc.ru/">
            <Button>Присоединиться</Button>
          </a>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
