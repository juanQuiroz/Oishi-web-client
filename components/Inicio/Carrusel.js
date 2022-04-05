import React from "react";
import axios from "axios";
import { apitest } from "../../config/axios";

import styled from "styled-components";

const Carrusel = () => {
  const [imgURL, setImgURL] = React.useState();

  const getImgUrls = async () => {
    const imgCarrusel = await apitest.get("/api/v1/carrusel", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    setImgURL(imgCarrusel.data.data);
  };

  React.useEffect(() => {
    getImgUrls();
  }, []);

  //  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
  {
    imgURL &&
      imgURL.map(slide => {
        return (
          <SwiperSlide key={slide.id}>
            {/* <img src={slide.url} alt="" /> */}
            hola
          </SwiperSlide>
        );
      });
  }
  // </Swiper>
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
