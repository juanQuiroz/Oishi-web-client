import React from "react";
import Titulos from "../ui/Titulos";
import Categoria from "./Categoria";
// import { CartaOishi } from "../../api/restaurantApi";
import api from "../../config/axios";

const Carta = () => {
  const [products, setProducts] = React.useState();
  const getProducts = async () => {
    const res = await api.get("/categoriaproductos/all/productos", {
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
  console.log(products);
  return (
    <div>
      <Titulos className>Nuestra Carta</Titulos>

      {products ? (
        products.map(categoria => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 rounded-md w-full justify-items-center mb-4">
          <div className="animate-pulse flex">
            <div className="p-2 rounded-lg bg-blueGray-100 h-30 w-40">
              <div className="rounded-lg bg-blueGray-300 h-12 w-full"></div>
              <div className="flex-1 space-y-4 mt-2">
                <div className="space-y-2">
                  <div className="h-4 bg-blueGray-300 rounded w-5/6"></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex">
            <div className="p-2 rounded-lg bg-blueGray-100 h-30 w-40">
              <div className="rounded-lg bg-blueGray-300 h-12 w-full"></div>
              <div className="flex-1 space-y-4 mt-2">
                <div className="space-y-2">
                  <div className="h-4 bg-blueGray-300 rounded w-5/6"></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex">
            <div className="p-2 rounded-lg bg-blueGray-100 h-30 w-40">
              <div className="rounded-lg bg-blueGray-300 h-12 w-full"></div>
              <div className="flex-1 space-y-4 mt-2">
                <div className="space-y-2">
                  <div className="h-4 bg-blueGray-300 rounded w-5/6"></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex">
            <div className="p-2 rounded-lg bg-blueGray-100 h-30 w-40">
              <div className="rounded-lg bg-blueGray-300 h-12 w-full"></div>
              <div className="flex-1 space-y-4 mt-2">
                <div className="space-y-2">
                  <div className="h-4 bg-blueGray-300 rounded w-5/6"></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex">
            <div className="p-2 rounded-lg bg-blueGray-100 h-30 w-40">
              <div className="rounded-lg bg-blueGray-300 h-12 w-full"></div>
              <div className="flex-1 space-y-4 mt-2">
                <div className="space-y-2">
                  <div className="h-4 bg-blueGray-300 rounded w-5/6"></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex">
            <div className="p-2 rounded-lg bg-blueGray-100 h-30 w-40">
              <div className="rounded-lg bg-blueGray-300 h-12 w-full"></div>
              <div className="flex-1 space-y-4 mt-2">
                <div className="space-y-2">
                  <div className="h-4 bg-blueGray-300 rounded w-5/6"></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex">
            <div className="p-2 rounded-lg bg-blueGray-100 h-30 w-40">
              <div className="rounded-lg bg-blueGray-300 h-12 w-full"></div>
              <div className="flex-1 space-y-4 mt-2">
                <div className="space-y-2">
                  <div className="h-4 bg-blueGray-300 rounded w-5/6"></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex">
            <div className="p-2 rounded-lg bg-blueGray-100 h-30 w-40">
              <div className="rounded-lg bg-blueGray-300 h-12 w-full"></div>
              <div className="flex-1 space-y-4 mt-2">
                <div className="space-y-2">
                  <div className="h-4 bg-blueGray-300 rounded w-5/6"></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                  <div className="h-2 bg-blueGray-300 rounded "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carta;
