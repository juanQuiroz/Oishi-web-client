import React, { useContext } from "react";
import Carrusel from "../components/Inicio/Carrusel";
import Categorias from "../components/Inicio/Categorias";
import PrincipalesProductos from "../components/Inicio/PrincipalesProductos";
import Layout from "../components/Layout";
import ModalIndex from "../components/ModalIndex";
import { apitest } from "../config/axios";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(true);

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

  return (
    <Layout>
      <ModalIndex isOpen={isOpen} setIsOpen={setIsOpen} />
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imgURL &&
          imgURL.map(slide => {
            return (
              <SwiperSlide key={slide.id}>
                <img src={slide.url} alt="" />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <PrincipalesProductos />
      <Categorias />
    </Layout>
  );
}
