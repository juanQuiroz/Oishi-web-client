import React from "react";
import Layout from "../components/Layout";
import { apiv1 } from "../config/axios";
import Producto from "../components/Carta/Producto";
import Ofertas from "../components/ofertas/Ofertas";

const cartaOishi = () => {
  // Productos obtenidos desde API
  const [products, setProducts] = React.useState();

  // State para almacenar las ofertas
  const [ofertas, setOfertas] = React.useState();

  // Categoria Seleccionada
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  const getProducts = async () => {
    const res = await apiv1.get("/categoriaproductos/all/productos", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    setProducts(res.data.data);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

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

  if (products && products.length > 0) {
    var productosFiltrados = products.filter(
      producto => producto.id == selectedCategory,
    )[0];
  }

  // obtener ofertas
  const getOfertas = async () => {
    const res = await apiv1.get("/ofertas", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    setOfertas(res?.data?.data);
  };

  React.useEffect(() => {
    getOfertas();
  }, []);
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="bg-gradient-to-b from-oishiAzul2 to-oishiAzul p-1 rounded-lg shadow-md mb-2 mx-2">
          <h3 className="text-xl font-Cunia text-white m-3 mx-2">Ofertas</h3>
          <div className="mt-1  h-56  overflow-auto">
            {ofertas &&
              ofertas.map(ofer => (
                <Ofertas key={ofer.producto_id} oferta={ofer} />
              ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-oishiAzul2 to-oishiAzul p-1 rounded-lg shadow-md mb-2 mx-2">
          <h3 className="text-xl font-Cunia text-white my-3 mx-2">Combos</h3>
        </div>
      </div>

      <div className="bg-gradient-to-b from-oishiAzul2 to-oishiAzul p-1 rounded-lg shadow-md mb-2 mx-2">
        <h3 className="text-xl font-Cunia text-white m-3 mx-2">Carta</h3>

        <div className="pl-1 overflow-x-auto h-8 flex my-2 w-full">
          {categorias.map(categoria => (
            <button
              onClick={() => setSelectedCategory(categoria.id)}
              className={
                selectedCategory == categoria.id
                  ? `bg-white font-bold py-1 px-1.5 mr-1  rounded-full shadow min-w-fit`
                  : `border-2 border-white text-white py-1 px-1.5 mr-1  rounded-full min-w-fit`
              }
              key={categoria.id}
            >
              {categoria.descripcion}
            </button>
          ))}
        </div>

        <div className="mb-1 sm:mb-2 mx-1 sm:mx-2 mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3 overflow-y-auto h-80">
          {productosFiltrados &&
            productosFiltrados.productos.map(producto => (
              <Producto key={producto.id} producto={producto} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default cartaOishi;
