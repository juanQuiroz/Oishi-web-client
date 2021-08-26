import React from "react";
import axios from "axios";
import { Slideshow, Slide, TextoSlide } from "../Inicio/Slideshow";
import { SliderData } from "../Inicio/SliderData";
import styled from "styled-components";

const Carrusel = () => {
  const [imgURL, setImgURL] = React.useState();

  const getImgUrls = async () => {
    const imgCarrusel = await axios.get(
      "https://oishirestaurant.herokuapp.com/api/v1/carrusel",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );
    setImgURL(imgCarrusel.data.data);
  };

  React.useEffect(() => {
    getImgUrls();
    console.log(imgURL);
  }, []);

  return (
    <Principal className="-my-7">
      <Slideshow
        controles={true}
        autoplay={true}
        velocidad="1500"
        intervalo="6500"
      >
        {imgURL &&
          imgURL.map(slide => {
            return (
              <Slide key={slide.id}>
                {/* <a href="!#"></a> */}
                <img src={slide.url} alt="" />

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
