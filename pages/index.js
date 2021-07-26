import Carrusel from "../components/Inicio/Carrusel";
import Layout from "../components/Layout";
import Titulos from "../components/ui/Titulos";

export default function Home() {
  return (
    <Layout>
      <Carrusel />

      <Titulos>Lo más pedido de Oishi!</Titulos>
    </Layout>
  );
}
