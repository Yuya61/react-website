import React from 'react';
import Icon1 from '../../images/icon1.svg';
import Icon2 from '../../images/icon2.svg';
import Icon3 from '../../images/icon3.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>dummy Text</ServicesH2>
          <ServicesP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>dummy Text</ServicesH2>
          <ServicesP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>dummy Text</ServicesH2>
          <ServicesP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
