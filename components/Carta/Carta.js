import React from "react";
import Titulos from "../ui/Titulos";
import Categoria from "./Categoria";

import Sushi2 from "../../assets/sushi2.svg";
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

  return (
    <div>
      <div className="w-full p-2 px-3 sm:px-6">
        <div
          class="bg-cover bg-center w-full h-28 rounded-xl sm:h-80 "
          style={{
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
            backgroundImage: `url(/imgcarta.jpeg)`,
          }}
        ></div>
      </div>

      {products ? (
        products.map(categoria => (
          <div className="px-1 sm:px-2">
            <Categoria key={categoria.id} categoria={categoria} />
          </div>
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
