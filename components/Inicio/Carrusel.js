import React from "react";
import { Slideshow, Slide, TextoSlide } from "../Inicio/Slideshow";
import { SliderData } from "../Inicio/SliderData";
import styled from "styled-components";

const Carrusel = () => {
  return (
    <Principal className="-my-7">
      <Slideshow
        controles={true}
        autoplay={true}
        velocidad="1500"
        intervalo="6500"
      >
        {SliderData.map(slide => {
          return (
            <Slide key={slide.id}>
              {/* <a href="!#"></a> */}
              <img src={slide.image} alt="" />

              {/* <TextoSlide>
                <p>15% descuento en productos Apple</p>
              </TextoSlide> */}
            </Slide>
          );
        })}
      </Slideshow>
    </Principal>
  );
};

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Principal = styled.main`
  max-width: 100%;
  margin: 17px auto;
  overflow: hidden;
`;

export default Carrusel;
