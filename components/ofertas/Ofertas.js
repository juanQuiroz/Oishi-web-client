import React, { useContext } from "react";
import PresentacionOferta from "./PresentacionOferta";
import PedidosContext from "../../context/pedidos/pedidosContex";

const Ofertas = ({ oferta }) => {
  const pedidosContext = useContext(PedidosContext);
  const { localSeleccionado } = pedidosContext;
  console.log("localSeleccionado: ", localSeleccionado);

  console.log("OFERTA_DATA", oferta);
  return (
    <div className=" my-2 rounded-xl shadow">
      {oferta?.ofertas ? (
        <div className="relative">
          {oferta.ofertas.map(ofer =>
            ofer.local_id == localSeleccionado ? (
              ofer.activo == false ? null : (
                <div
                  className=" w-full p-2 rounded-xl"
                  style={{
                    backgroundSize: "cover",
                    backgroundAttachment: "scroll",
                    backgroundImage: `url(${oferta.url})`,
                  }}
                >
                  <p className="text-3xl font-Andika m-1 p-1 rounded-md opacity-95 text-center bg-blueGray-50">
                    {oferta.nombre}
                  </p>

                  {/* Aqui va el filtro por local 1 -> Cañete , 2 -> Ica */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 sm:gap-2 w-full ">
                    {oferta &&
                      oferta?.ofertas.map(ofertaPresentacion =>
                        ofertaPresentacion.local_id == localSeleccionado &&
                        ofertaPresentacion.activo == true ? (
                          <PresentacionOferta
                            key={ofertaPresentacion.oferta_id}
                            presentacionOferta={ofertaPresentacion}
                            dataProducto={{
                              nombre: oferta.nombre,
                              url: oferta.url,
                            }}
                          />
                        ) : null,
                      )}
                  </div>
                </div>
              )
            ) : null,
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Ofertas;
