import React from "react";
import Layout from "../components/Layout";
import { apitest } from "../config/axios";
import Producto from "../components/cartav2/Producto";
import Ofertas from "../components/ofertas/Ofertas";
import PedidosContext from "../context/pedidos/pedidosContex";
import Oferta from "../components/cartav2/Oferta";

const cartaOishi = () => {
  const pedidosContext = React.useContext(PedidosContext);
  const { localSeleccionado } = pedidosContext;

  // Categoria Seleccionada
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  // Productos obtenidos desde API
  const [products, setProducts] = React.useState();

  // State para almacenar las ofertas
  const [ofertas, setOfertas] = React.useState();

  const categorias = [
    {
      id: 1,
      descripcion: "Oishi Piqueos",
    },
    {
      id: 2,
      descripcion: "Acompañamientos",
    },
    {
      id: 3,
      descripcion: "Platos Calientes",
    },
    {
      id: 4,
      descripcion: "Sanguches",
    },
    {
      id: 5,
      descripcion: "Makis",
    },
    {
      id: 6,
      descripcion: "Bebidas",
    },
    {
      id: 7,
      descripcion: "Sandwich Furai",
    },
  ];

  const categorias2 = [
    {
      id: 8,
      descripcion: "Promos Oishi",
    },
    {
      id: 9,
      descripcion: "Combos Oishi",
    },
  ];

  // productos activos, presentaciones activas, sin ofertas, activo para carta y del local seleccionado
  const getProducts = async () => {
    const res = await apitest.get(
      `/api/v2/products?include=product_category,product_type,image,presentations,presentations.offer&product_is_active=1&presentation_is_active=1&local_id=${localSeleccionado}&offer_is_active=0&is_active_carta=1`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    setProducts(res.data.data);
  };
  // productos activos, presentaciones activas, sin ofertas, activo para carta y del local seleccionado
  const gerOfertas = async () => {
    const res = await apitest.get(
      `/api/v2/offers?include=presentation.presentationable&offer_is_active=1&presentation_is_active=1&local_id=${localSeleccionado}&product_presentatioanble_is_active=1`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    setOfertas(res.data.data);
  };

  React.useEffect(() => {
    console.log("localSeleccionado", localSeleccionado);
    getProducts();
    gerOfertas();
    console.log("products", products);
  }, [localSeleccionado]);

  // Filtrar productos por categoria
  if (products && products.length > 0) {
    var productosFiltrados = products.filter(
      producto => producto.product_category.id == selectedCategory,
    );
  }
  // if (ofertas && ofertas.length > 0) {
  //   var productosFiltrados2 = ofertas.filter(oferta => 9 == selectedCategory);
  // }

  return (
    <Layout>
      <div className=" mx-2 sm:mx-8 mb-4 sm:mb-6">
        <h3 className="text-2xl font-Cunia text-oishiRojo sm:mx-2">
          Carta Oishi
        </h3>

        <div className="pl-1 overflow-x-auto flex my-2 w-full h-auto">
          {categorias2.map(categoria => (
            <button
              onClick={() => setSelectedCategory(categoria.id)}
              className={
                selectedCategory == categoria.id
                  ? `bg-oishiCeleste text-black font-bold py-1 px-1.5 mr-1 sm:mr-3 rounded-full shadow min-w-fit sm:px-3`
                  : `border-2 border-oishiCeleste text-black py-1 px-1.5 mr-1 sm:mr-3 rounded-full min-w-fit sm:px-3`
              }
              key={categoria.id}
            >
              {categoria.descripcion}
            </button>
          ))}
          {categorias.map(categoria => (
            <button
              onClick={() => setSelectedCategory(categoria.id)}
              className={
                selectedCategory == categoria.id
                  ? `bg-oishiAzul text-white font-bold py-1 px-1.5 mr-1 sm:mr-3 rounded-full shadow min-w-fit sm:px-3`
                  : `border-2 border-oishiAzul text-oishiAzul py-1 px-1.5 mr-1 sm:mr-3 rounded-full min-w-fit sm:px-3`
              }
              key={categoria.id}
            >
              {categoria.descripcion}
            </button>
          ))}
        </div>

        <div className=" h-auto mb-1 sm:mb-2 mx-1 sm:mx-2 mt-3 sm:mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-5">
          {productosFiltrados &&
            productosFiltrados.map(producto => (
              <Producto key={producto.id} producto={producto} />
            ))}
          {ofertas &&
            selectedCategory == 9 &&
            ofertas.map(oferta => <Oferta key={oferta.id} oferta={oferta} />)}
        </div>
      </div>
    </Layout>
  );
};

export default cartaOishi;
