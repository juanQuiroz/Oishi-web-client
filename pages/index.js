import Carrusel from "../components/Inicio/Carrusel";
import Layout from "../components/Layout";
import { IMAGES } from "../mock";

export default function Home() {
  return (
    <Layout>
      <Carrusel time={3000}>
        {IMAGES.map((image, index) => (
          <img key={index} src={image.imageUrl} alt={image.placeHolder} />
        ))}
      </Carrusel>
    </Layout>
  );
}
