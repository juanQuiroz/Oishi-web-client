import React from "react";
import { Slideshow, Slide, TextoSlide } from "../Inicio/Slideshow";
import { SliderData } from "../Inicio/SliderData";
import styled from "styled-components";

const Carrusel = () => {
  return (
    <Principal>
      <Titulo>Productos Destacados</Titulo>
      <Slideshow
        controles={true}
        autoplay={true}
        velocidad="2000"
        intervalo="2000"
      >
        {SliderData.map(slide => {
          return (
            <Slide key={slide.id}>
              <a href="https://www.falconmaters.com">
                <img src={slide.image} alt="" />
              </a>
              <TextoSlide>
                <p>15% descuento en productos Apple</p>
              </TextoSlide>
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
  max-width: 1000px;
  margin: 50px auto;
  overflow: hidden;
`;

export default Carrusel;
