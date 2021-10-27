import React from "react";
import PresentacionOferta from "./PresentacionOferta";

const Ofertas = ({ oferta }) => {
  console.log("XXXOFRTADDD", oferta);
  return (
    <div className="bg-white my-2 rounded shadow">
      {oferta?.ofertas ? (
        <div className="relative">
          <div
            className=" w-full p-2"
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "scroll",
              backgroundImage: `url(${oferta.url})`,
            }}
          >
            <p className="text-3xl font-Andika m-1 p-1 rounded-md opacity-95 text-center bg-blueGray-50">
              {oferta.nombre}
            </p>

            <div className="grid grid-cols-2 gap-1 w-full ">
              {oferta &&
                oferta?.ofertas.map(ofertaPresentacion => (
                  <PresentacionOferta
                    key={ofertaPresentacion.oferta_id}
                    presentacionOferta={ofertaPresentacion}
                    dataProducto={{ nombre: oferta.nombre, url: oferta.url }}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center font-Andika font-medium text-3xl my-10 py-4">
          No hay ofertas disponibles
        </p>
      )}
    </div>
  );
};

export default Ofertas;
