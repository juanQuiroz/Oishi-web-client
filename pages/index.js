import Carrusel from "../components/Inicio/Carrusel";
import Categorias from "../components/Inicio/Categorias";
import PrincipalesProductos from "../components/Inicio/PrincipalesProductos";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Carrusel />
      <PrincipalesProductos />
      <Categorias />
    </Layout>
  );
}
